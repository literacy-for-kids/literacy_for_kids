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
  ],
};

export default sidebars;
