
const links = [
    { id: 1, title: "GitHub", url: "https://github.com/fathoriqalfarizi2008-creator", category: "sosmed", icon: "🐙" },
    { id: 2, title: "Instagram", url: "https://instagram.com/fathoriqalfarizi", category: "sosmed", icon: "📸" },
    { id: 3, title: "LinkedIn", url: "https://linkedin.com/in/username", category: "sosmed", icon: "💼" },
    { id: 4, title: "Portofolio", url: "https://example.com/portfolio", category: "project", icon: "🎨" },
    { id: 5, title: "Link Page Ini (Repo)", url: "https://github.com/username/link-page", category: "project", icon: "🧩" },
    { id: 6, title: "Catatan Kursus", url: "https://example.com/catatan", category: "project", icon: "📓" },
    { id: 7, title: "Email", url: "mailto:halo@example.com", category: "kontak", icon: "✉️" },
    { id: 8, title: "WhatsApp", url: "https://wa.me/6281234567890", category: "kontak", icon: "💬" }
];

// ===== STYLE =====
const CARD_CLASSES =
    "flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 font-medium shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-slate-900 dark:ring-slate-800 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:focus-visible:outline-indigo-400 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

// ===== MEMBUAT SATU LINK =====
function createLinkItem(link) {
    const item = document.createElement("li");
    const anchor = document.createElement("a");

    anchor.href = link.url;
    anchor.className = CARD_CLASSES;

    // Website dibuka di tab baru
    if (link.url.startsWith("http")) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
    }

    // Membuat ikon
    const icon = document.createElement("span");
    icon.textContent = link.icon;

    // Memasukkan ikon dan judul ke dalam anchor
    anchor.appendChild(icon);
    anchor.appendChild(
        document.createTextNode(link.title)
    );

    // Memasukkan anchor ke dalam li
    item.appendChild(anchor);

    return item;
}

// ===== MENAMPILKAN LINK =====
const linkList = document.querySelector("#link-list");

function renderLinks(category) {
    // Kosongkan daftar lama
    linkList.innerHTML = "";

    // Menampilkan link sesuai kategori
    links.forEach(function (link) {
        if (
            category === "semua" ||
            link.category === category
        ) {
            linkList.appendChild(createLinkItem(link));
        }
    });
}

// ===== MULAI =====
renderLinks("semua");
