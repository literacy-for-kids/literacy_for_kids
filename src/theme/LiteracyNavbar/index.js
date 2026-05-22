import React from 'react';
import styles from './styles.module.css';
import ecosystem from 'literacy-site-theme/ecosystem';

const {hub, curricula: themeCurricula} = ecosystem;

const navbarLinks = [
  {label: hub.label, href: hub.href},
  ...themeCurricula.map((c) => ({
    label: c.label.replace(' Literacy', ''),
    href: c.href,
  })),
];

export default function LiteracyNavbar() {
  return (
    <nav className={styles.literacyNavbar}>
      <div className="container">
        <ul className={styles.navList}>
          {navbarLinks.map((link) => (
            <li key={link.href} className={styles.navItem}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
