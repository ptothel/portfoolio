// Renders a single project page based on ?id=<id> in the URL.
// CONTENT is defined in content.js (loaded before this file).
const $ = (id) => document.getElementById(id);

// Shared header / footer text
$("mark").textContent = CONTENT.brand;
$("footerLeft").textContent = CONTENT.footerLeft;
$("footerRight").textContent = CONTENT.footerRight;
$("nav").innerHTML = CONTENT.nav
  .map(([label, href]) => `<a href="${href}">${label}</a>`)
  .join("");

// Find the requested project
const id = new URLSearchParams(location.search).get("id");
const project = CONTENT.projects.find((p) => p.id === id);

const paneImg = $("paneImg");

// Turn a paragraph string into HTML, converting {{word|images/x.jpg}} markers
// into hoverable "hotwords" that swap the photo pane. Everything else is left
// as plain text.
function renderParagraph(text) {
  return text.replace(/\{\{([^|]+)\|([^}]+)\}\}/g, (_, word, src) => {
    return `<span class="hotword" data-src="${src.trim()}">${word.trim()}</span>`;
  });
}

if (!project) {
  $("projTitle").textContent = "Projekti ei leitud";
  $("projTag").textContent = "";
} else {
  document.title = `${project.title} — ${CONTENT.brand}`;
  $("projTag").textContent = project.tag || "";
  $("projTitle").textContent = project.title || "";

  // Story text (supports the {{word|image}} markers). Falls back to `body`.
  const paras = project.story || project.body || [];
  $("projStory").innerHTML = paras.map((p) => `<p>${renderParagraph(p)}</p>`).join("");

  // The pane starts on the project's cover image and returns to it when no
  // hotword is hovered.
  const defaultSrc = project.img;
  paneImg.src = defaultSrc;
  paneImg.alt = project.title || "";

  // Preload the hotword images so they appear instantly on hover.
  const hotwords = [...document.querySelectorAll(".hotword")];
  [...new Set(hotwords.map((h) => h.dataset.src))].forEach((src) => {
    const pre = new Image();
    pre.src = src;
  });

  function showImage(src) {
    if (paneImg.src.endsWith(src)) return;
    paneImg.src = src;
    // restart the fade-in animation on each swap
    paneImg.style.animation = "none";
    void paneImg.offsetWidth;
    paneImg.style.animation = "";
  }

  hotwords.forEach((h) => {
    // Show the word's photo on hover and keep it there — it only changes when
    // another word is hovered, so it never flips back to the cover photo.
    h.addEventListener("mouseenter", () => showImage(h.dataset.src));
    // Tap support on touch screens: switch without needing hover.
    h.addEventListener("click", (e) => {
      e.preventDefault();
      showImage(h.dataset.src);
    });
  });

  // Album: a collage of every designated photo, shown after the text.
  const albumSrcs = [...new Set(hotwords.map((h) => h.dataset.src))];
  $("projAlbum").innerHTML = albumSrcs
    .map(
      (src) =>
        `<figure class="album-item"><img src="${src}" alt="${
          project.title || ""
        }" loading="lazy" /></figure>`
    )
    .join("");
}
