// ===========================================================================
//  EDIT YOUR SITE HERE
//  Everything you can read on the page lives in this one object. Change the
//  text between the quotes, save, and refresh the browser. `img` can be a
//  local path ("images/photo.jpg") or any URL. `href` is where a panel links.
// ===========================================================================
const CONTENT = {
  brand: "Romi · Studio",

  // Top-right menu. Each item: [label, link]
  nav: [
    ["Looming", "#work"],
    ["Minust", "#about"],
    ["Kontakt", "#contact"],
  ],

  introTitle: "Valitud projektid",
  introSub: "Vaade hiljutistele projektidele — vaatamiseks hoia hiir pildil, täpsemalt tutvumiseks kliki.",

  footerLeft: "© 2026 Romi-Liis",
  // footerRight: "Auto-advancing every 5s",

  rotateSeconds: 5, // how long each project stays highlighted

  projects: [
  {
    title: "Käru",
    tag: "Väljasõit Pärnusse",
    href: "#",
    img: "images/1.jpg",
  },
  {
    title: "Kummut",
    tag: "Restaureerimisprojekt",
    href: "#",
    img: "images/2.jpg",
  },
  {
    title: "Ilus naine",
    tag: "Väljaskäigud sõpradega",
    href: "#",
    img: "images/3.jpg",
  },
  {
    title: "Uputus",
    tag: "Tormiga Kassisaba poes",
    href: "#",
    img: "images/4.jpg",
  },
  {
    title: "Tandem",
    tag: "Uusim rõõmuallikas",
    href: "#",
    img: "images/5.jpg",
  },
  ],
};

// ===========================================================================
//  Below this line is the machinery — you shouldn't need to touch it.
// ===========================================================================
const PROJECTS = CONTENT.projects;
const ROTATE_MS = (CONTENT.rotateSeconds || 5) * 1000;

// --- Fill in the fixed text -------------------------------------------------
const $ = (id) => document.getElementById(id);
$("mark").textContent = CONTENT.brand;
$("introTitle").textContent = CONTENT.introTitle;
$("introSub").textContent = CONTENT.introSub;
$("footerLeft").textContent = CONTENT.footerLeft;
$("footerRight").textContent = CONTENT.footerRight;
$("nav").innerHTML = CONTENT.nav
  .map(([label, href]) => `<a href="${href}">${label}</a>`)
  .join("");

const gallery = document.querySelector(".gallery");

// --- Build panels ----------------------------------------------------------
const panels = PROJECTS.map((p, i) => {
  const a = document.createElement("a");
  a.className = "panel";
  a.href = p.href;
  a.setAttribute("aria-label", `${p.title} — ${p.tag}`);
  a.innerHTML = `
    <img class="panel__img" src="${p.img}" alt="${p.title}" loading="lazy" />
    <div class="panel__meta">
      <div class="panel__index">${String(i + 1).padStart(2, "0")} / ${String(
    PROJECTS.length
  ).padStart(2, "0")}</div>
      <div class="panel__title">${p.title}</div>
      <div class="panel__tag">${p.tag}</div>
    </div>`;
  gallery.appendChild(a);
  return a;
});

// --- Rotation --------------------------------------------------------------
let current = 0;
let timer = null;

function setActive(index) {
  current = (index + panels.length) % panels.length;
  panels.forEach((panel, i) => panel.classList.toggle("is-active", i === current));
}

function next() {
  setActive(current + 1);
}

function start() {
  stop();
  timer = setInterval(next, ROTATE_MS);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

// Pause the auto-rotation while the pointer is inside the gallery so hover
// wins; resume from the hovered panel when the pointer leaves.
gallery.addEventListener("mouseenter", () => {
  stop();
});

gallery.addEventListener("mouseleave", () => {
  start();
});

panels.forEach((panel, i) => {
  panel.addEventListener("mouseenter", () => {
    current = i; // so leaving the gallery continues from where you looked
  });
});

// Pause when the tab is hidden to save the animation loop.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stop();
  else if (!timer) start();
});

// --- Go --------------------------------------------------------------------
setActive(0);
start();
