// ===========================================================================
//  EDIT YOUR SITE HERE  —  this is the only file you need to touch.
//  Change the text between the quotes, save, and refresh the browser.
//  Used by both the homepage (index.html) and the project pages (project.html).
// ===========================================================================
const CONTENT = {
  brand: "Romi-Liis · Stuudio",

  // Top-right menu. Each item: [label, link] — OR the special "Looming"
  // dropdown, which is built automatically from `categories` below.
  nav: [
    ["Minust", "about.html"],
    ["Looming", "__categories__"], // dropdown, don't change this href
    ["Kontakt", "contact.html"],
  ],

  // "Minust" subpage — same logic as project subpages: use {{word|images/x.jpg}}
  // markers in `story` to make hoverable words that swap the side photo.
  about: {
    title: "Minust",
    tag: "",
    img: "images/1.jpg", // side-pane cover photo
    plainAlbum: true, // no numbers, no lightbox — just the photo collage
    story: [
      "Kirjuta siia enda tutvustus. Sõna märkimiseks kasuta kuju {{sõna|images/rada.jpg}} ja hõljutamisel ilmub kõrvale määratud pilt.",
    ],
  },

  // "Kontakt" subpage — lihtsalt tekst (paragraafide massiiv).
  contact: {
    title: "Kontakt",
    tag: "",
    body: [
      'Minuga saate mis tahes põhjusel ühendust võtta kirjutades minu meiliaadressile <a class="accent-link" href="mailto:romiliis03@gmail.com">romiliis03@gmail.com</a>! :)',
    ],
  },

  // Dropdown categories under "Looming". Each category has its own subpage
  // (category.html?name=<name>) with editable intro text, and links to one
  // project subpage.
  //   name       – label shown in the dropdown and as the page heading
  //   projectId  – must match a project's `id` below (the subcategory link)
  //   intro      – text shown on the category page (paragraphs in an array)
  categories: [
    {
      name: "Restaureerimine",
      projectId: "Kummut",
      intro: ["Kirjuta siia lühike sissejuhatus restaureerimistöödest."],
    },
    {
      name: "Fotograafia",
      projectId: "Klõpsud",
      intro: ["Kirjuta siia lühike sissejuhatus fotograafiast."],
    },
    {
      name: "Kirjutised",
      projectId: "Mõtted",
      intro: ["Kirjuta siia lühike sissejuhatus kirjutistest."],
    },
    {
      name: "Keraamika",
      projectId: "Magnetid",
      intro: ["Kirjuta siia lühike sissejuhatus keraamikast."],
    },
    {
      name: "Uusim rõõmuallikas",
      projectId: "Tandem",
      intro: ["Kirjuta siia lühike sissejuhatus."],
    },
  ],

  introTitle: "Valitud projektid",
  introSub:
    "Vaade hiljutistele projektidele — vaatamiseks hoia hiir pildil, täpsemalt tutvumiseks kliki.",

  footerLeft: "© 2026 Romi-Liis",
  footerRight: "",

  rotateSeconds: 3, // how long each project stays highlighted

  // Each project opens its own page at project.html?id=<id>.
  //   id     – short unique tag used in the link (no spaces)
  //   title  – shown on the panel and the project page heading
  //   tag    – small line under the title
  //   img    – the cover photo (shown in the gallery)
  //   body   – one or more paragraphs of text for the project page
  //   gallery– extra photos to show on the project page (optional)
  projects: [
    {
      id: "Kummut",
      title: "Kummut",
      tag: "Restaureerimine",
      img: "images/1.jpg",
      // `story` is the text next to the photo. To make a word show a photo on
      // hover, wrap it like this:  {{word|images/photo.jpg}}
      story: [
        "30. mail saabus meie perre läbi Facebook Marketplace’i üks imevahva täispuidust vintage {{kummut|images/kummut/kummut.png}}. Vaatasin sellele otsa, paks valge ja kulunud värvikiht peal, ning kujutasin seda kohe ette müstiliselt rohelise ja lahedalt puidusena. Nii see algas.",
        "Kõigepealt oli vaja eemaldada vana värv. Selleks läks vaja {{värvieemaldajat|images/kummut/varvieemaldajat.jpg}}, {{eksentriklihvijat|images/kummut/eksentriklihvijat.jpg}} ja {{palju aega|images/kummut/paljuaega.jpg}}. Kui suuremad pinnad puhtaks sai, jäi üle veel täitsa manuaalselt lihvimispaberiga töötada.",
        "Seejärel tuli ette võtta kummutil esinevad ebatasasused ning need {{pahteldada|images/kummut/pahteldada.jpeg}} (selleks oli mõistagi vaja pahtlit ja pahtlilabidat) ja siis veelkord üle lihvida. Pildil on näha triipu rohelist värvi… Otsustasime enne kruntimise kallale asumist, pahteldamisega paralleelselt, katsetada, kas saime hea värvi valitud. Ja jumal tänatud, et seda tegime, sest see roheline meile üldse ei meeldinud. Millegipärast pole võimalik värvi valides värvikaardile lootma jääda, sest ka siis, kui läksime uut värvi ostma, valisime sellise, mis paistis täiesti must, kuid millel pidavat olema siiski roheline toon, ning isegi see polnud lõppude lõpuks nii tumeroheline kui lubatud midagi. Kuid sellega saime siiski rahule jääda.",
        "Kohe meie restaureerimisprojekti alguses said kummutist ka sahtlid välja võetud, millelt omakorda eemaldasime kõik {{käepidemed|images/kummut/kaepidemed.jpg}} ja dekoratiivsed võtmeavaplaadid, sest ka need vajasid palju hoolt. Nende kõikide pisikeste {{jubinate|images/kummut/jubinate.jpg}} puhastamiseks läks tarvis terasvilla, äädikat, sidrunhapet ja äärmiselt palju viitsimist.",
        "Järgmisena sai ette võetud kapi pealispinna {{peitsimine|images/kummut/peitsimine.jpg}}. Selleks oli tarvis puidupeitsi ja täitsa tavalist puhast svammi. Ühest kihist piisas.",
        "Kui sellega ühel pool, sai liikuda kummuti ülejäänud pinna juurde. Kõigepealt tuli see {{kruntida|images/kummut/kruntida.jpg}}; seda tegin värvirulli ja pintsliga.",
        "Kui kruntvärv kuivanud oli, sai lõpuks ometi asuda värvimise kallale. Kuna kummutil on omajagu kumerusi ja väikeseid detaile, läks lisaks värvirullile kasutusse ka {{piiisike pintsel|images/kummut/piiisikestpintslit.jpg}}, millega töötamine võttis lõppude lõpuks {{väga kaua aega|images/kummut/vagakauaaega.jpg}}, kuid mida mulle sellest, ja seljavalust, hoolimata teha meeldis. Värvi kandsin peale kaks kihti.",
        "Ja kui siis kõik see tehtud oli, jäi üle vaid kogu kummut lakkida; pealispind kolme ja ülejäänud kapp kahe kihiga. Selle jaoks olid tarvilikud puidulakk ja mingisugune täitsa tavaline riie, millega see peale kanda. Ning niimoodi see lõpuks valmis saigi, … juulil.",
      ],
    },
    {
      id: "Klõpsud",
      title: "Klõpsud",
      tag: "Fotograafia",
      img: "images/2.jpg",
      body: ["Kirjuta siia projekti kirjeldus."],
      gallery: [],
    },
    {
      id: "Mõtted",
      title: "Mõtted",
      tag: "Kirjutised",
      img: "images/3.jpg",
      body: ["Kirjuta siia projekti kirjeldus."],
      gallery: [],
    },
    {
      id: "Magnetid",
      title: "Magnetid",
      tag: "Keraamika",
      img: "images/4.jpg",
      body: ["Kirjuta siia projekti kirjeldus."],
      gallery: [],
    },
    {
      id: "Tandem",
      title: "Tandem",
      tag: "Uusim rõõmuallikas",
      img: "images/5.jpg",
      body: ["Kirjuta siia projekti kirjeldus."],
      gallery: [],
    },
  ],
};
