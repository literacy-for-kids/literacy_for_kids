import React from 'react';
import styles from './styles.module.css';

const navbarLinks = [
  {
    label: 'Literacy for Kids',
    href: 'https://literacy-for-kids.github.io/literacy_for_kids/',
  },
  {
    label: 'Decision',
    href: 'https://literacy-for-kids.github.io/decision_literacy_for_kids/',
  },
  {
    label: 'Computer',
    href: 'https://literacy-for-kids.github.io/computer_literacy_for_kids/',
  },
  {
    label: 'Media',
    href: 'https://literacy-for-kids.github.io/media_literacy_for_kids/',
  },
  {
    label: 'Financial',
    href: 'https://literacy-for-kids.github.io/financial_literacy_for_kids/',
  },
  {
    label: 'Civic',
    href: 'https://literacy-for-kids.github.io/civic_literacy_for_kids/',
  },
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
