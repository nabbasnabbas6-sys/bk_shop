import React from "react";
import logo from "../bk_shop.png";

const icons = {
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.53 0 .18 5.34.18 11.91c0 2.1.55 4.15 1.6 5.96L.08 24l6.28-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.17-3.5-8.42ZM12.1 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.46 4.45-9.9 9.91-9.9a9.83 9.83 0 0 1 7.01 2.9 9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.91 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.73.23 1.39.2 1.91.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="icon-fill" cx="17.5" cy="6.5" r="1" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
    </svg>
  ),
};

const links = [
  {
    label: "Appeler",
    detail: "0659 84 68 50",
    href: "tel:+213659846850",
    icon: icons.phone,
    className: "call",
  },
  {
    label: "Commander sur WhatsApp",
    detail: "Réponse rapide",
    href: "https://wa.me/213555371454?text=Bonjour%20BK%20Shop%20%21%20Je%20souhaite%20passer%20une%20commande%20de%20flocage.%20Pouvez-vous%20m%E2%80%99aider%20%3F",
    icon: icons.whatsapp,
    className: "whatsapp",
  },
  {
    label: "Instagram",
    detail: "@bk13_shop",
    href: "https://www.instagram.com/bk13_shop/",
    icon: icons.instagram,
    className: "instagram",
  },
  {
    label: "Facebook",
    detail: "BK13 Shop",
    href: "https://www.facebook.com/Bkamine13",
    icon: icons.facebook,
    className: "facebook",
  },
];

function App() {
  return (
    <main className="page">
      <div className="backdrop" aria-hidden="true" />
      <section className="contact-card" aria-labelledby="page-title">
        <div className="logo-wrap">
          <img className="logo" src={logo} alt="Logo BK Shop" />
        </div>

        <p className="eyebrow">PERSONNALISATION & FLOCAGE</p>
        <h1 id="page-title">On donne vie à vos idées.</h1>
        <p className="intro">
          Une commande, une question ? Contactez-nous ou retrouvez BK Shop sur
          vos réseaux préférés.
        </p>

        <nav className="actions" aria-label="Contacter BK Shop">
          {links.map((link) => (
            <a
              className={`action ${link.className}`}
              href={link.href}
              key={link.label}
              target={link.className === "instagram" || link.className === "facebook" ? "_blank" : undefined}
              rel={link.className === "instagram" || link.className === "facebook" ? "noreferrer" : undefined}
            >
              <span className="action-icon">{link.icon}</span>
              <span className="action-copy">
                <span className="action-label">{link.label}</span>
                <span className="action-detail">{link.detail}</span>
              </span>
              <span className="action-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <p className="footer-note">
          <span className="status-dot" aria-hidden="true" />
          BK Shop — votre style, votre signature.
        </p>
      </section>
    </main>
  );
}

export default App;
