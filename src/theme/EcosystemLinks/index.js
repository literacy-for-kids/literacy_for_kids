import React from 'react';
import styles from './styles.module.css';

const ecosystemLinks = [
  {
    label: 'Literacy for Kids',
    description: 'Project Hub',
    href: 'https://literacy-for-kids.github.io/literacy_for_kids/',
  },
  {
    label: 'Decision Literacy',
    description: 'Reasoning and choices',
    href: 'https://literacy-for-kids.github.io/decision_literacy_for_kids/',
  },
  {
    label: 'Computer Literacy',
    description: 'Understanding technology',
    href: 'https://literacy-for-kids.github.io/computer_literacy_for_kids/',
  },
  {
    label: 'Media Literacy',
    description: 'Understanding information',
    href: 'https://literacy-for-kids.github.io/media_literacy_for_kids/',
  },
  {
    label: 'Financial Literacy',
    description: 'Understanding money',
    href: 'https://literacy-for-kids.github.io/financial_literacy_for_kids/',
  },
  {
    label: 'Civic Literacy',
    description: 'Understanding governance',
    href: 'https://literacy-for-kids.github.io/civic_literacy_for_kids/',
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
