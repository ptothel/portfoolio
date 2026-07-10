# =============================================================================
#  package.ps1  —  builds a portable zip of the portfolio that unzips cleanly
#  on any computer (Windows, Mac, Chromebook/ChromeOS, Linux).
#
#  Run it by right-clicking -> "Run with PowerShell", or from a terminal:
#      powershell -ExecutionPolicy Bypass -File package.ps1
#
#  What it does, and why:
#   1. Verifies every image referenced in the code actually exists, with the
#      EXACT capitalization used in the path. ChromeOS/Linux are case-sensitive,
#      so "photo.JPG" referenced as "photo.jpg" works on Windows but breaks
#      there. This catches that before you send the zip.
#   2. Warns about non-ASCII characters (a, o, u, etc.) in filenames, which
#      some unzip tools mangle.
#   3. Packs everything inside a single top-level "portfolio" folder so
#      unzipping produces one tidy folder instead of loose files.
# =============================================================================

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }

# Files/folders that make up the site (everything else, like .git, is skipped).
$include = @(
  "index.html", "styles.css", "script.js",
  "content.js", "project.html", "project.js",
  "images"
)

Write-Host "Packaging portfolio from: $root`n"

# --- 1. Collect every image path referenced in the code --------------------
$codeFiles = @("content.js", "script.js") | ForEach-Object { Join-Path $root $_ } |
  Where-Object { Test-Path -LiteralPath $_ }
# Read line by line and drop // comments so example paths in comments are ignored.
$lines = $codeFiles | ForEach-Object { Get-Content -LiteralPath $_ } |
  ForEach-Object { ($_ -replace '//.*$', '') }
$text = $lines -join "`n"

$refs = [System.Collections.Generic.HashSet[string]]::new()
foreach ($m in [regex]::Matches($text, 'images/[^"''|}\s]+')) {
  [void]$refs.Add($m.Value)
}

# --- 2. Verify each reference exists with exact case ------------------------
$missing = @()
$caseIssues = @()
foreach ($ref in $refs) {
  $full = Join-Path $root ($ref -replace '/', '\')
  if (-not (Test-Path -LiteralPath $full)) {
    $missing += $ref
    continue
  }
  # Compare against the real on-disk name to catch case mismatches.
  $realName = (Get-Item -LiteralPath $full).Name
  $refName = Split-Path $ref -Leaf
  if ($realName -cne $refName) {
    $caseIssues += "$ref  (on disk: $realName)"
  }
}

# --- 3. Warn about non-ASCII filenames anywhere under images/ --------------
$nonAscii = @()
Get-ChildItem -LiteralPath (Join-Path $root "images") -Recurse -File |
  ForEach-Object {
    if ($_.Name -match '[^\x00-\x7F]') { $nonAscii += $_.FullName.Substring($root.Length + 1) }
  }

$problem = $false
if ($missing.Count) {
  $problem = $true
  Write-Host "MISSING images (referenced in code but not found):" -ForegroundColor Red
  $missing | ForEach-Object { Write-Host "   $_" -ForegroundColor Red }
}
if ($caseIssues.Count) {
  $problem = $true
  Write-Host "CASE MISMATCH (works on Windows, breaks on Chromebook/Linux):" -ForegroundColor Red
  $caseIssues | ForEach-Object { Write-Host "   $_" -ForegroundColor Red }
}
if ($nonAscii.Count) {
  Write-Host "WARNING: non-ASCII filenames (may mangle in some unzip tools):" -ForegroundColor Yellow
  $nonAscii | ForEach-Object { Write-Host "   $_" -ForegroundColor Yellow }
}

if ($problem) {
  Write-Host "`nFix the errors above, then run again. No zip was created." -ForegroundColor Red
  exit 1
}
Write-Host "All $($refs.Count) referenced images found with correct case.`n" -ForegroundColor Green

# --- 4. Build the zip with a single top-level "portfolio" folder -----------
# NOTE: we do NOT use Compress-Archive here. Windows PowerShell's version writes
# entry names with backslashes, which many unzip tools on Linux/ChromeOS treat
# as literal characters -> the folder structure gets "lost" (flat files named
# like "images\1.jpg"). We build the archive by hand with forward slashes so it
# is valid on every platform.

# Gather the full list of files to include (recursing into folders).
$files = @()
foreach ($item in $include) {
  $src = Join-Path $root $item
  if (-not (Test-Path -LiteralPath $src)) {
    Write-Host "note: '$item' not found, skipping" -ForegroundColor Yellow
    continue
  }
  if (Test-Path -LiteralPath $src -PathType Container) {
    $files += Get-ChildItem -LiteralPath $src -Recurse -File
  } else {
    $files += Get-Item -LiteralPath $src
  }
}

$out = Join-Path $root "portfolio-site.zip"
if (Test-Path -LiteralPath $out) { Remove-Item -LiteralPath $out }

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::Open($out, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  foreach ($f in $files) {
    # Path relative to the project root, using forward slashes, under portfolio/.
    $rel = $f.FullName.Substring($root.Length).TrimStart('\', '/') -replace '\\', '/'
    $entryName = "portfolio/$rel"
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
      $zip, $f.FullName, $entryName,
      [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
  }
} finally {
  $zip.Dispose()
}

$sizeMB = "{0:N1}" -f ((Get-Item -LiteralPath $out).Length / 1MB)
Write-Host "Created $out  ($sizeMB MB)" -ForegroundColor Green
Write-Host "Unzip it anywhere and open  portfolio/index.html  in a browser."
