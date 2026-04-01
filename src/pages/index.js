import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import EcosystemLinks from '@theme/EcosystemLinks';
import LiteracyNavbar from '@theme/LiteracyNavbar';
import LiteracyFooter from '@theme/LiteracyFooter';

const literacies = [
  {
    icon: '🧠',
    title: 'Decision Literacy',
    description:
      'Learning how to think clearly, evaluate choices, and understand consequences.',
    href: 'https://literacy-for-kids.github.io/decision_literacy_for_kids/',
  },
  {
    icon: '💻',
    title: 'Computer Literacy',
    description:
      'Understanding how computers work and how to use technology responsibly.',
    href: 'https://literacy-for-kids.github.io/computer_literacy_for_kids/',
  },
  {
    icon: '📰',
    title: 'Media Literacy',
    description:
      'Understanding how information spreads and how to evaluate sources.',
    href: 'https://literacy-for-kids.github.io/media_literacy_for_kids/',
  },
  {
    icon: '💰',
    title: 'Financial Literacy',
    description:
      'Learning how money works and how to make responsible financial decisions.',
    href: 'https://literacy-for-kids.github.io/financial_literacy_for_kids/',
  },
  {
    icon: '🏛',
    title: 'Civic Literacy',
    description:
      'Understanding how societies organize themselves and how citizens shape communities.',
    href: 'https://literacy-for-kids.github.io/civic_literacy_for_kids/',
  },
];

const sectionStyle = {
  padding: '3rem 0',
};

const cardStyle = {
  border: '1px solid var(--ifm-toc-border-color)',
  borderRadius: '16px',
  padding: '1.5rem',
  height: '100%',
  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
  backgroundColor: 'var(--ifm-background-surface-color)',
};

export default function Home() {
  return (
    <Layout
      title="Literacy for Kids"
      description="Open-source curricula helping children ages 8–12 understand the systems that shape the modern world.">
      <LiteracyNavbar />

      {/* Hero Section */}
      <header className="hero hero--primary" style={{padding: '4rem 0'}}>
        <div className="container">
          <h1 className="hero__title">Literacy for Kids</h1>
          <p className="hero__subtitle">
            Open-source curricula helping children ages 8–12 understand the
            systems that shape the modern world.
          </p>
          <p style={{fontSize: '1.1rem', maxWidth: '640px'}}>
            Children interact with complex systems every day — technology,
            media, money, decisions, and civic life — but schools rarely explain
            how those systems work. These curricula provide that understanding
            through short, discussion-based lessons designed for parents,
            teachers, and community educators.
          </p>
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Explore the project
            </Link>
            <Link className="button button--outline button--lg" to="/docs/framework">
              See the framework
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* The Five Literacies */}
        <section style={sectionStyle}>
          <div className="container">
            <h2>The Five Literacies</h2>
            <div className="row">
              {literacies.map((literacy) => (
                <div className="col col--4 margin-bottom--lg" key={literacy.title}>
                  <div style={cardStyle}>
                    <h3>
                      <span aria-hidden="true">{literacy.icon}</span>{' '}
                      {literacy.title}
                    </h3>
                    <p>{literacy.description}</p>
                    <a
                      className="button button--primary"
                      href={literacy.href}
                      target="_blank"
                      rel="noopener noreferrer">
                      Visit curriculum
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the Literacies Connect */}
        <section style={sectionStyle}>
          <div className="container">
            <h2>How the Literacies Connect</h2>
            <p>
              Together, these five literacies help children understand the modern
              systems that shape daily life:
            </p>
            <ul>
              <li><strong>Technology</strong> — how the tools around us work</li>
              <li><strong>Information</strong> — how knowledge and media spread</li>
              <li><strong>Decision making</strong> — how to think clearly and choose wisely</li>
              <li><strong>Economics</strong> — how money and trade affect our lives</li>
              <li><strong>Governance</strong> — how communities organize and make shared rules</li>
            </ul>
            <p>
              The literacies reinforce each other — better decision-making
              supports everything else, and understanding technology helps
              students think critically about media. But each curriculum also
              stands on its own, so you can start with whichever fits your
              learners best.
            </p>
          </div>
        </section>

        {/* Explore the Curricula — uses the shared theme component */}
        <EcosystemLinks />

        {/* Open Source */}
        <section style={sectionStyle}>
          <div className="container">
            <h2>Open Source Curricula</h2>
            <p>
              All curricula are open source, free to use, and adaptable.
              Educators, families, and community groups are encouraged to use
              them as-is or modify them to fit their learners.
            </p>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Link className="button button--primary" to="/docs/using-the-curricula">
                How to use these curricula
              </Link>
              <a
                className="button button--secondary"
                href="https://github.com/literacy-for-kids"
                target="_blank"
                rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <LiteracyFooter />
    </Layout>
  );
}
