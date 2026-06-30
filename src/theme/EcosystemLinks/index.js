import React from 'react';
import styles from './styles.module.css';

const ecosystemLinks = [
  {
    label: 'Literacy for Kids',
    description: 'Project Hub',
    href: 'https://www.literacy-for-kids.com/',
  },
  {
    label: 'Decision Literacy',
    description: 'Reasoning and choices',
    href: 'https://decision.literacy-for-kids.com/',
  },
  {
    label: 'Computer Literacy',
    description: 'Understanding technology',
    href: 'https://computer.literacy-for-kids.com/',
  },
  {
    label: 'Media Literacy',
    description: 'Understanding information',
    href: 'https://media.literacy-for-kids.com/',
  },
  {
    label: 'Financial Literacy',
    description: 'Understanding money',
    href: 'https://financial.literacy-for-kids.com/',
  },
  {
    label: 'Civic Literacy',
    description: 'Understanding governance',
    href: 'https://civic.literacy-for-kids.com/',
  },
];

export default function EcosystemLinks() {
  return (
    <section className={styles.ecosystem}>
      <div className="container">
        <h2 className={styles.ecosystemTitle}>Part of the Literacy for Kids Ecosystem</h2>
        <p className={styles.ecosystemSubtitle}>
          Open-source curricula for children ages 8–12, designed to help kids
          understand the systems that shape modern life.
        </p>
        <div className={styles.ecosystemGrid}>
          {ecosystemLinks.map((link) => (
            <a
              key={link.href}
              className={styles.ecosystemCard}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{link.label}</strong>
              <span>{link.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
