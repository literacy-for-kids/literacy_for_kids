import React from 'react';
import styles from './styles.module.css';
import ecosystem from 'literacy-site-theme/ecosystem';

const {hub, curricula: themeCurricula} = ecosystem;

const footerLinks = [
  {label: 'Project Hub', href: hub.href},
  {label: 'GitHub', href: 'https://github.com/literacy-for-kids'},
];

const curricula = themeCurricula.map((c) => ({
  label: c.label,
  href: c.href,
}));

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
