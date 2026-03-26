// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Literacy for Kids',
  tagline:
    'A collection of open-source curricula designed to help children ages 8–12 understand the systems that shape the modern world.',
  url: 'https://zcohen-nerd.github.io',
  baseUrl: '/literacy_for_kids/',
  organizationName: 'zcohen-nerd',
  projectName: 'literacy_for_kids',
  onBrokenLinks: 'throw',
  favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/zcohen-nerd/literacy_for_kids/tree/main/',
        },
        blog: false,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Literacy for Kids',
        items: [
          {to: '/docs/intro', label: 'Introduction', position: 'left'},
          {to: '/docs/framework', label: 'Framework', position: 'left'},
          {to: '/docs/how-to-use', label: 'How to Use', position: 'left'},
          {
            href: 'https://github.com/zcohen-nerd',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Literacy for Kids',
            items: [
              {
                label: 'Open Source Educational Curriculum',
                to: '/docs/intro',
              },
              {
                label: 'GitHub Repository',
                href: 'https://github.com/zcohen-nerd',
              },
              {
                label: 'All curricula are free to use and adapt.',
                to: '/docs/how-to-use',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Literacy for Kids.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
