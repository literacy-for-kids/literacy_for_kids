// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    'framework',
    'how-to-use',
    {
      type: 'category',
      label: 'Literacies',
      items: [
        'literacies/decision',
        'literacies/computer',
        'literacies/media',
        'literacies/financial',
        'literacies/civic',
      ],
    },
  ],
};

export default sidebars;
