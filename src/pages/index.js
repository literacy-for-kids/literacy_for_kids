import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import LiteracyNavbar from '@theme/LiteracyNavbar';
import LiteracyFooter from '@theme/LiteracyFooter';
import ecosystem from 'literacy-site-theme/ecosystem';
import styles from './styles.module.css';

const {hub, curricula: themeCurricula} = ecosystem;

/* ── Data ── */

const curricula = themeCurricula.map((c) => ({
  icon: c.icon,
  title: c.label,
  href: c.href,
  tagline: c.tagline,
  bestFor: c.bestFor,
  firstUse: c.firstUse,
  setting: c.setting,
  style: c.style,
}));

const rolePathways = [
  {
    icon: '🏠',
    title: 'Parents & Caregivers',
    description:
      'Start with a topic your child is already curious about. Each curriculum has short lessons (10–20 min) you can use one-on-one at home — no prep needed.',
  },
  {
    icon: '🏫',
    title: 'Teachers & Classrooms',
    description:
      'Ready-to-use, discussion-based lessons designed for group settings. Pick whichever topic complements your current unit or student interest.',
  },
  {
    icon: '📚',
    title: 'Clubs, Homeschool & Libraries',
    description:
      'Modular and flexible — use any topic, any lesson, in any order. Great for enrichment programs, co-ops, and reading groups.',
  },
];

const topicPathways = themeCurricula.map((c) => ({
  label: c.topicLabel,
  curriculum: c.label,
  href: c.href,
  icon: c.icon,
}));

const frameworkNodes = themeCurricula.map((c) => ({
  icon: c.icon,
  title: c.label.replace(' Literacy', ''),
  covers: c.frameworkCovers,
}));

const connections = [
  {
    pair: '💻 ＋ 📰',
    text: 'Understanding how technology works helps kids think critically about the media and content they encounter online.',
  },
  {
    pair: '🧠 ＋ 💰',
    text: 'Stronger reasoning skills lead to better choices about money, spending, and value.',
  },
  {
    pair: '🏛 ＋ 🧠',
    text: 'Civic participation — from classroom rules to community decisions — builds on clear thinking about tradeoffs and consequences.',
  },
];

const sharedToolkits = [
  {
    icon: '🧰',
    title: 'Coping Skills Toolkit',
    href: '/docs/toolkits/coping-skills',
    tagline:
      'Short lessons that help kids notice stress signals, pause before reacting, calm their body, check their thoughts, ask for help, and recover after hard moments.',
    pairsWith:
      'Pairs especially well with Emotional & Social, Decision, Health Systems, Media, Civic, and Legal Literacy.',
  },
  {
    icon: '💬',
    title: 'Communication Toolkit',
    href: '/docs/toolkits/communication',
    tagline:
      'Short lessons that help kids listen actively, ask clearer questions, explain their thinking, disagree respectfully, ask for help, use feedback, and repair misunderstandings.',
    pairsWith:
      'Pairs especially well with Civic, Legal, Emotional & Social, Decision, Media, Computer, and Financial Literacy.',
  },
];

const usageExamples = [
  {
    icon: '🏠',
    title: 'A parent at home',
    description:
      'Pick a topic your child is curious about — like how ads work or what happens to saved money. Use one lesson per week at the dinner table or before bed. Each takes 15–20 minutes and needs nothing beyond the lesson page. Start a conversation, not a lecture.',
  },
  {
    icon: '🏫',
    title: 'A teacher in the classroom',
    description:
      'Choose one curriculum as a 3–6 week mini-unit alongside your existing subjects. Media Literacy pairs well with current events. Decision Literacy fits social-emotional learning. Run one lesson per session and let discussion carry the learning.',
  },
  {
    icon: '📚',
    title: 'A club or library facilitator',
    description:
      'Run a weekly discussion group around one curriculum. Kids read through a lesson together, then talk about it. Works for after-school programs, homeschool co-ops, and library groups. No special training needed — the lessons guide the conversation.',
  },
];

const designPrinciples = [
  {
    title: 'Short, modular lessons',
    text: 'Each lesson takes 10–20 minutes and works independently. Use one lesson, a handful, or a full sequence — pick what fits your time.',
  },
  {
    title: 'Discussion over memorization',
    text: 'Lessons are built around questions and conversation, not quizzes or recall. The goal is thinking, not test prep.',
  },
  {
    title: 'Real-world systems kids already encounter',
    text: 'Every topic connects to things children interact with daily — screens, ads, money, rules, choices. Nothing abstract or theoretical.',
  },
  {
    title: 'Age-appropriate for 8–12',
    text: 'Language, examples, and complexity are calibrated for upper-elementary learners. No oversimplification, no jargon.',
  },
  {
    title: 'No expertise required from adults',
    text: 'Parents and educators do not need to be subject-matter experts. The lessons guide the conversation and provide the context you need.',
  },
  {
    title: 'Flexible across settings',
    text: 'Designed to work at home, in classrooms, in clubs, in libraries, and in homeschool — with no adaptation required.',
  },
];

const faqItems = [
  {
    question: 'Do I need to use all the curricula?',
    answer:
      'No. Each curriculum is independent. Start with whichever topic matters most for your learners and add more if you want to. There is no required sequence.',
  },
  {
    question: 'Where should I start?',
    answer:
      'Start with whatever your child or students are most curious about. If kids are asking about ads or online video, try Media Literacy. If they are starting to handle money, try Financial Literacy. The "Start Here" section at the top of this page can help you choose.',
  },
  {
    question: 'What age range are these designed for?',
    answer:
      'The curricula are designed for children ages 8–12 (roughly grades 3–6). The language and examples are age-appropriate, but the topics are relevant enough that older or younger learners can also benefit with light adjustment.',
  },
  {
    question: 'Do I need to be an expert to teach these?',
    answer:
      'No. The lessons provide the background you need and are designed around discussion, not lecture. Your job is to read the lesson, ask the questions, and listen. You do not need specialized training in any of the topics.',
  },
  {
    question: 'Can I adapt the lessons for my setting?',
    answer:
      'Yes — they are designed for it. You can rearrange lessons, skip ones that do not fit, add your own examples, or translate the materials. The curricula are a starting point you can make your own.',
  },
  {
    question: 'Are these really free?',
    answer:
      'Yes. Every curriculum is open source and available at no cost. No login, no paywall, no restrictions. You can also fork the materials on GitHub and build your own version.',
  },
];

const contributorPaths = [
  {
    title: 'Use as-is',
    text: 'Open any curriculum site and start using the lessons directly. No signup or download needed.',
  },
  {
    title: 'Adapt locally',
    text: 'Rearrange lessons, add your own examples, or adjust the pacing to fit your classroom, family, or group.',
  },
  {
    title: 'Fork and remix',
    text: 'Fork a curriculum repository on GitHub to create your own version — translated, restructured, or extended for a new context.',
  },
  {
    title: 'Contribute back',
    text: 'Spot a typo, have a better example, or want to improve a lesson? Open an issue or pull request on any curriculum repo.',
  },
];

/* ── Page ── */

export default function Home() {
  return (
    <Layout
      title="Literacy for Kids"
      description="Open-source curricula helping children ages 8–12 understand the systems that shape the modern world.">
      <LiteracyNavbar />

      {/* ── Hero: What is this project? ── */}
      <header className="hero hero--primary" style={{padding: '4rem 0'}}>
        <div className="container">
          <h1 className="hero__title">Literacy for Kids</h1>
          <p className="hero__subtitle">
            Open-source curricula helping children ages 8–12 understand the
            systems that shape the modern world.
          </p>
          <p style={{fontSize: '1.1rem', maxWidth: '640px'}}>
            Short, discussion-based lessons on decisions, technology, media,
            money, civic life, emotional intelligence, law, environmental
            systems, and health — designed for parents, teachers, and
            community educators.
          </p>
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
            <a className="button button--secondary button--lg" href="#start-here">
              Find the right curriculum
            </a>
            <Link className="button button--outline button--lg" to="/docs/intro">
              Learn about the project
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ── Start Here: How to choose ── */}
        <section className={styles.startHere} id="start-here">
          <div className="container">
            <h2>Start Here</h2>
            <p className={styles.sectionSubtitle}>
              Choose by your role or by the topic that matters most right now.
            </p>

            <h3 className={styles.subheading}>I'm a…</h3>
            <div className={styles.roleGrid}>
              {rolePathways.map((role) => (
                <div className={styles.roleCard} key={role.title}>
                  <h4>
                    <span aria-hidden="true">{role.icon}</span> {role.title}
                  </h4>
                  <p>{role.description}</p>
                  <a className={styles.roleCardLink} href="#compare">
                    Compare curricula ↓
                  </a>
                </div>
              ))}
            </div>

            <h3 className={styles.subheading}>I'm interested in…</h3>
            <div className={styles.topicGrid}>
              {topicPathways.map((topic) => (
                <a
                  key={topic.href}
                  className={styles.topicCard}
                  href={topic.href}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className={styles.topicIcon} aria-hidden="true">
                    {topic.icon}
                  </span>
                  <span className={styles.topicLabel}>{topic.label}</span>
                  <span className={styles.topicCurriculum}>
                    {topic.curriculum} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Framework: How the literacies connect ── */}
        <section className={styles.framework} id="framework">
          <div className="container">
            <h2>How the Literacies Fit Together</h2>
            <p className={styles.sectionSubtitle}>
              Each curriculum covers one part of how the modern world works.
              Together, they help kids build a connected understanding of the
              systems they already interact with every day.
            </p>

            <div className={styles.frameworkGrid}>
              {frameworkNodes.map((node) => (
                <div className={styles.frameworkNode} key={node.title}>
                  <span
                    className={styles.frameworkNodeIcon}
                    aria-hidden="true">
                    {node.icon}
                  </span>
                  <div className={styles.frameworkNodeTitle}>{node.title}</div>
                  <div className={styles.frameworkNodeCovers}>
                    {node.covers}
                  </div>
                </div>
              ))}
            </div>

            <h3 className={styles.subheading}>
              They reinforce each other
            </h3>
            <div className={styles.connectionsGrid}>
              {connections.map((conn) => (
                <div className={styles.connectionCallout} key={conn.pair}>
                  <span
                    className={styles.connectionPair}
                    aria-hidden="true">
                    {conn.pair}
                  </span>
                  <span>{conn.text}</span>
                </div>
              ))}
            </div>

            <p className={styles.frameworkNote}>
              There is no required sequence. Start with whichever topic fits
              your learners, and add more over time. Each curriculum works on
              its own, and connections between them happen naturally.
            </p>
            <Link className="button button--secondary" to="/docs/framework">
              Read the full framework
            </Link>
          </div>
        </section>

        {/* ── Shared Toolkits: cross-curriculum life skills ── */}
        <section className={styles.inPractice} id="toolkits">
          <div className="container">
            <h2>Shared Toolkits</h2>
            <p className={styles.sectionSubtitle}>
              Some skills support every curriculum. Shared toolkits are short,
              practical add-ons that work alongside any topic — at home, in a
              classroom, or in a club.
            </p>
            <p style={{maxWidth: '720px', marginBottom: '2rem'}}>
              Decision-making, media use, social conflict, rules, money, health,
              and environmental worry all involve emotion — and all of them run
              on communication. The Coping Skills Toolkit gives kids everyday
              tools for noticing stress signals, pausing before reacting, and
              recovering after hard moments. The Communication Toolkit helps kids
              listen, ask, explain, disagree, get help, use feedback, and repair
              misunderstandings. Both support the work in every literacy: kids
              are learning how systems work, and their own stress response and
              the way they understand each other are two of the systems they use
              every day.
            </p>

            <div className={styles.usageGrid}>
              {sharedToolkits.map((t) => (
                <div className={styles.usageCard} key={t.title}>
                  <h3>
                    <span aria-hidden="true">{t.icon}</span> {t.title}
                  </h3>
                  <p>{t.tagline}</p>
                  <p style={{fontStyle: 'italic', opacity: 0.85}}>
                    {t.pairsWith}
                  </p>
                  <Link className="button button--primary" to={t.href}>
                    Open the toolkit →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Compare: Detailed side-by-side ── */}
        <section className={styles.comparison} id="compare">
          <div className="container">
            <h2>Compare the Curricula</h2>
            <p className={styles.sectionSubtitle}>
              Pick whichever fits your learners — or use more than one over
              time.
            </p>

            <div className={styles.comparisonGrid}>
              {curricula.map((c) => (
                <div className={styles.comparisonCard} key={c.title}>
                  <h3>
                    <span aria-hidden="true">{c.icon}</span> {c.title}
                  </h3>
                  <p className={styles.comparisonTagline}>{c.tagline}</p>

                  <div className={styles.comparisonField}>
                    <span className={styles.comparisonLabel}>Age range</span>
                    Ages 8–12
                  </div>
                  <div className={styles.comparisonField}>
                    <span className={styles.comparisonLabel}>Best for</span>
                    {c.bestFor}
                  </div>
                  <div className={styles.comparisonField}>
                    <span className={styles.comparisonLabel}>
                      Good first use
                    </span>
                    {c.firstUse}
                  </div>
                  <div className={styles.comparisonField}>
                    <span className={styles.comparisonLabel}>
                      Typical setting
                    </span>
                    {c.setting}
                  </div>
                  <div className={styles.comparisonField}>
                    <span className={styles.comparisonLabel}>
                      Discussion style
                    </span>
                    {c.style}
                  </div>

                  <div className={styles.comparisonCta}>
                    <a
                      className="button button--primary button--block"
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer">
                      Explore {c.title} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── In Practice: What using this looks like ── */}
        <section className={styles.inPractice} id="in-practice">
          <div className="container">
            <h2>What This Looks Like in Practice</h2>
            <p className={styles.sectionSubtitle}>
              These curricula are designed to fit into the time and settings you
              already have. Here are three common ways to get started.
            </p>

            <div className={styles.usageGrid}>
              {usageExamples.map((ex) => (
                <div className={styles.usageCard} key={ex.title}>
                  <h3>
                    <span aria-hidden="true">{ex.icon}</span> {ex.title}
                  </h3>
                  <p>{ex.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Design Principles: How the lessons are built ── */}
        <section className={styles.designPrinciples} id="design">
          <div className="container">
            <h2>How the Lessons Are Built</h2>
            <p className={styles.sectionSubtitle}>
              The curricula share a set of design principles that keep them
              practical, approachable, and consistent across the project.
            </p>

            <div className={styles.principlesGrid}>
              {designPrinciples.map((p) => (
                <div className={styles.principleCard} key={p.title}>
                  <div className={styles.principleTitle}>{p.title}</div>
                  <p className={styles.principleText}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ: Common questions ── */}
        <section className={styles.faq} id="faq">
          <div className="container">
            <h2>Common Questions</h2>
            <p className={styles.sectionSubtitle}>
              Quick answers to the things people usually ask first.
            </p>

            <ul className={styles.faqList}>
              {faqItems.map((item) => (
                <li key={item.question}>
                  <details className={styles.faqItem}>
                    <summary>{item.question}</summary>
                    <p className={styles.faqAnswer}>{item.answer}</p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Contribute: Use, adapt, or contribute ── */}
        <section className={styles.contribute} id="contribute">
          <div className="container">
            <h2>Use, Adapt, or Contribute</h2>
            <p className={styles.sectionSubtitle}>
              These curricula are open source. That means you can use them
              for free, adjust them for your context, or help make them better.
            </p>

            <div className={styles.pathwayGrid}>
              {contributorPaths.map((path) => (
                <div className={styles.pathwayCard} key={path.title}>
                  <h3>{path.title}</h3>
                  <p>{path.text}</p>
                </div>
              ))}
            </div>

            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Link
                className="button button--primary"
                to="/docs/using-the-curricula">
                How to use these curricula
              </Link>
              <Link
                className="button button--secondary"
                to="/docs/open-source">
                Open source details
              </Link>
              <a
                className="button button--outline"
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
