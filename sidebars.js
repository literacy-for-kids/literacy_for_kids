// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'About the Project',
      collapsed: false,
      items: [
        'intro',
        'framework',
        'ecosystem-overview',
        'repository-map',
      ],
    },
    {
      type: 'category',
      label: 'Using the Curricula',
      collapsed: false,
      items: [
        'using-the-curricula',
        'implementation-pathways',
        'curriculum-adoption-checklist',
        'ecosystem-skills-overview',
      ],
    },
    {
      type: 'category',
      label: 'For Facilitators',
      collapsed: false,
      items: [
        'privacy-and-student-data',
        'interactive-activity-specs',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: false,
      items: [
        'contributor-guide',
        'content-style-guide',
        'technical-style-guide',
        'accessibility-notes',
      ],
    },
    {
      type: 'category',
      label: 'Open Source',
      collapsed: false,
      items: [
        'open-source',
      ],
    },
    {
      type: 'category',
      label: 'Shared Toolkits',
      collapsed: false,
      link: {type: 'doc', id: 'toolkits/shared-toolkits-intro'},
      items: [
        'toolkits/shared-toolkits-intro',
        {
          type: 'category',
          label: 'Coping Skills Toolkit',
          collapsed: true,
          link: {type: 'doc', id: 'toolkits/coping-skills/coping-skills-intro'},
          items: [
            'toolkits/coping-skills/coping-skills-intro',
            'toolkits/coping-skills/coping-lesson-01-system-signals',
            'toolkits/coping-skills/coping-lesson-02-pause-button',
            'toolkits/coping-skills/coping-lesson-03-grounding',
            'toolkits/coping-skills/coping-lesson-04-breathing',
            'toolkits/coping-skills/coping-lesson-05-body-reset',
            'toolkits/coping-skills/coping-lesson-06-thought-bugs',
            'toolkits/coping-skills/coping-lesson-07-asking-for-help',
            'toolkits/coping-skills/coping-lesson-08-coping-menu',
            'toolkits/coping-skills/coping-printables',
          ],
        },
        {
          type: 'category',
          label: 'Communication Toolkit',
          collapsed: true,
          link: {type: 'doc', id: 'toolkits/communication/communication-intro'},
          items: [
            'toolkits/communication/communication-intro',
            'toolkits/communication/communication-lesson-01-listening-is-active',
            'toolkits/communication/communication-lesson-02-clarifying-questions',
            'toolkits/communication/communication-lesson-03-explain-your-thinking',
            'toolkits/communication/communication-lesson-04-disagree-without-attacking',
            'toolkits/communication/communication-lesson-05-ask-for-help',
            'toolkits/communication/communication-lesson-06-feedback-is-information',
            'toolkits/communication/communication-lesson-07-repair-after-misunderstanding',
            'toolkits/communication/communication-lesson-08-build-your-communication-toolbox',
            'toolkits/communication/communication-printables',
          ],
        },
        {
          type: 'category',
          label: 'Problem Solving Toolkit',
          collapsed: true,
          link: {type: 'doc', id: 'toolkits/problem-solving/problem-solving-intro'},
          items: [
            'toolkits/problem-solving/problem-solving-intro',
            'toolkits/problem-solving/problem-solving-lesson-01-what-problem',
            'toolkits/problem-solving/problem-solving-lesson-02-facts-guesses-missing',
            'toolkits/problem-solving/problem-solving-lesson-03-break-into-parts',
            'toolkits/problem-solving/problem-solving-lesson-04-brainstorm-options',
            'toolkits/problem-solving/problem-solving-lesson-05-safe-step',
            'toolkits/problem-solving/problem-solving-lesson-06-observe',
            'toolkits/problem-solving/problem-solving-lesson-07-adjust',
            'toolkits/problem-solving/problem-solving-lesson-08-checklist',
            'toolkits/problem-solving/problem-solving-printables',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
