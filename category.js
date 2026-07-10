// Renders a category page based on ?name=<category name> in the URL.
// CONTENT is defined in content.js (loaded before this file).
const $ = (id) => document.getElementById(id);

$("mark").textContent = CONTENT.brand;
$("footerLeft").textContent = CONTENT.footerLeft;
$("footerRight").textContent = CONTENT.footerRight;

const name = new URLSearchParams(location.search).get("name");
const category = (CONTENT.categories || []).find((c) => c.name === name);

if (!category) {
  $("catTitle").textContent = "Kategooriat ei leitud";
} else {
  document.title = `${category.name} — ${CONTENT.brand}`;
  $("catTitle").textContent = category.name;
  $("catIntro").innerHTML = (category.intro || [])
    .map((p) => `<p>${p}</p>`)
    .join("");

  const link = $("catSubLink");
  link.href = `project.html?id=${encodeURIComponent(category.projectId)}`;
  link.textContent = category.projectId + " →";
}
