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
      items: [
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
      ],
    },
  ],
};

export default sidebars;
