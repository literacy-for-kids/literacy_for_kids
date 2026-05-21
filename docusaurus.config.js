// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const footerConfig = require('literacy-site-theme/footerConfig');
const {hub, curricula} = require('literacy-site-theme/ecosystem');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Literacy for Kids',
  tagline:
    'Open-source curricula helping children ages 8–12 understand the systems that shape the modern world.',
  url: 'https://literacy-for-kids.github.io',
  baseUrl: '/literacy_for_kids/',
  organizationName: 'literacy-for-kids',
  projectName: 'literacy_for_kids',
  onBrokenLinks: 'throw',
  favicon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📚</text></svg>',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: ['literacy-site-theme'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/literacy-for-kids/literacy_for_kids/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
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
          {to: '/docs/using-the-curricula', label: 'Using the Curricula', position: 'left'},
          {to: '/docs/open-source', label: 'Open Source', position: 'left'},
          {
            type: 'dropdown',
            label: 'Curricula',
            position: 'left',
            items: [
              {label: 'Hub', href: hub.href},
              ...curricula.map((c) => ({
                label: c.label.replace(' Literacy', ''),
                href: c.href,
              })),
            ],
          },
          {
            href: 'https://github.com/literacy-for-kids',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: footerConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
