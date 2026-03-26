import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const literacies = [
  {
    icon: '🧠',
    title: 'Decision Literacy',
    description:
      'How to think clearly, evaluate choices, and understand consequences.',
    href: 'https://zcohen-nerd.github.io/decision_literacy_for_kids/',
  },
  {
    icon: '💻',
    title: 'Computer Literacy',
    description:
      'How computers work and how to use them responsibly.',
    href: 'https://zcohen-nerd.github.io/computer_literacy_for_kids/',
  },
  {
    icon: '📰',
    title: 'Media Literacy',
    description:
      'How to evaluate information, recognize bias, and understand algorithms.',
    href: 'https://zcohen-nerd.github.io/media_literacy_for_kids/',
  },
  {
    icon: '💰',
    title: 'Financial Literacy',
    description:
      'How money works, how spending decisions affect the future, and how to build healthy financial habits.',
    href: 'https://zcohen-nerd.github.io/financial_literacy_for_kids/',
  },
  {
    icon: '🏛',
    title: 'Civic Literacy',
    description:
      'How societies organize themselves and how citizens shape their communities.',
    href: 'https://zcohen-nerd.github.io/civic_literacy_for_kids/',
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
      description="Open-source curricula for ages 8–12 that help children understand decision-making, technology, information, money, and civic life.">
      <header className="hero hero--primary" style={{padding: '4rem 0'}}>
        <div className="container">
          <h1 className="hero__title">Literacy for Kids</h1>
          <p className="hero__subtitle">
            A collection of open-source curricula designed to help children ages
            8–12 understand the systems that shape the modern world.
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
        <section style={sectionStyle}>
          <div className="container">
            <h2>What This Project Is</h2>
            <p>
              Literacy for Kids is a collection of short curricula that teach
              foundational life literacies in a simple, discussion-friendly way.
            </p>
            <div className="row">
              <div className="col col--3 margin-bottom--md">
                <strong>Modular</strong>
                <p>Use one literacy on its own or combine several over time.</p>
              </div>
              <div className="col col--3 margin-bottom--md">
                <strong>Short lessons</strong>
                <p>Most lessons fit into a 10–20 minute block.</p>
              </div>
              <div className="col col--3 margin-bottom--md">
                <strong>Discussion based</strong>
                <p>Lessons are built around questions, examples, and reflection.</p>
              </div>
              <div className="col col--3 margin-bottom--md">
                <strong>Flexible</strong>
                <p>They work for parents, teachers, and community educators.</p>
              </div>
            </div>
          </div>
        </section>

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

        <section style={sectionStyle}>
          <div className="container">
            <h2>Why These Literacies Matter</h2>
            <p>
              Modern life requires understanding several overlapping systems:
              technology, information, money, decision making, and governance.
            </p>
            <p>
              Children are rarely taught how these systems work in a clear,
              age-appropriate way. This project helps fill that gap with short,
              approachable curricula that make those systems easier to talk
              about.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <div className="container">
            <h2>Open Source Curriculum</h2>
            <p>
              All of the curricula are open source, free to use, adaptable, and
              hosted on GitHub.
            </p>
            <p>
              Educators, families, and community groups are encouraged to use
              them as they are or adapt them to fit their learners.
            </p>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Link className="button button--primary" to="/docs/how-to-use">
                How to use these curricula
              </Link>
              <a
                className="button button--secondary"
                href="https://github.com/zcohen-nerd"
                target="_blank"
                rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
