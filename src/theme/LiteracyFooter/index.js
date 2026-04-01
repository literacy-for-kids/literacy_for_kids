import React from 'react';
import styles from './styles.module.css';

const footerLinks = [
  {
    label: 'Project Hub',
    href: 'https://literacy-for-kids.github.io/literacy_for_kids/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/literacy-for-kids',
  },
];

const curricula = [
  {
    label: 'Decision Literacy',
    href: 'https://literacy-for-kids.github.io/decision_literacy_for_kids/',
  },
  {
    label: 'Computer Literacy',
    href: 'https://literacy-for-kids.github.io/computer_literacy_for_kids/',
  },
  {
    label: 'Media Literacy',
    href: 'https://literacy-for-kids.github.io/media_literacy_for_kids/',
  },
  {
    label: 'Financial Literacy',
    href: 'https://literacy-for-kids.github.io/financial_literacy_for_kids/',
  },
  {
    label: 'Civic Literacy',
    href: 'https://literacy-for-kids.github.io/civic_literacy_for_kids/',
  },
];

export default function LiteracyFooter() {
  return (
    <footer className={styles.literacyFooter}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Literacy for Kids</h3>
            <ul className={styles.footerList}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Curricula</h3>
            <ul className={styles.footerList}>
              {curricula.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          Literacy for Kids — open-source curricula for children ages 8–12
        </div>
      </div>
    </footer>
  );
}
