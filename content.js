// ===========================================================================
//  EDIT YOUR SITE HERE  —  this is the only file you need to touch.
//  Change the text between the quotes, save, and refresh the browser.
//  Used by both the homepage (index.html) and the project pages (project.html).
// ===========================================================================
const CONTENT = {
  brand: "Romi-Liis · Stuudio",

  // Top-right menu. Each item: [label, link]
  nav: [
    ["Minust", "index.html#about"],
    ["Looming", "index.html#work"],
    ["Kontakt", "index.html#contact"],
  ],

  introTitle: "Valitud projektid",
  introSub:
    "Vaade hiljutistele projektidele — vaatamiseks hoia hiir pildil, täpsemalt tutvumiseks kliki.",

  footerLeft: "© 2026 Romi-Liis",
  footerRight: "",

  rotateSeconds: 5, // how long each project stays highlighted

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
        "Kõigepealt oli vaja eemaldada vana värv. Selleks läks vaja {{värvieemaldajat|images/kummut/värvieemaldajat.JPG}}, {{eksentriklihvijat|images/kummut/eksentriklihvijat.JPG}} ja {{palju aega|images/kummut/paljuaega.JPG}}. Kui suuremad pinnad puhtaks sai, jäi üle veel täitsa manuaalne lihvimispaberiga töötamine.",
        "Seejärel tuli ette võtta kummutil esinevad ebatasasused ning need {{pahteldada|images/kummut/pahteldada.JPG}} ja siis veelkord üle lihvida.",
        "Kohe alguses said ka sahtlid välja võetud, millelt omakorda eemaldasime kõik {{käepidemed|images/kummut/käepidemed.JPG}}, sest ka need vajasid hoolt. Nende kõikide pisikeste {{jubinate|images/kummut/jubinate.jpg}} puhastamiseks läks tarvis terasvilla, äädikat, sidrunhapet ja äärmiselt palju viitsimist.",
        "Järgmisena sai ette võetud kapi pealispinna {{peitsimine|images/kummut/peitsimine.JPG}}. Ühest kihist piisas.",
        "Kui sellega ühel pool, sai liikuda kummuti ülejäänud pinna juurde. Kõigepealt tuli see {{kruntida|images/kummut/kruntida.JPG}}.",
        "Kui kruntvärv kuivanud oli, sai lõpuks ometi asuda värvimise kallale. Kuna kummutil on omajagu kumerusi ja väikeseid detaile, läks lisaks värvirullile tarvis ka {{piiisikest pintslit|images/kummut/piiisikestpintslit.jpg}}, millega töötamine võttis lõppude lõpuks {{väga kaua aega|images/kummut/vägakauaaega.JPG}}. Värvi kandsin peale kaks kihti.",
        "Ja kui siis kõik see tehtud oli, jäi üle vaid kogu kummut lakkida; pealispind kolme ja ülejäänud kapp kahe kihiga. Ning niimoodi see valmis saigi, … juulil.",
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
