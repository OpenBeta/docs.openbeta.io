// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenBeta Documentation',
  tagline: 'Open source rock climbing',
  url: 'https://docs.openbeta.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OpenBeta',
  projectName: 'OpenBeta-Docs',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/OpenBeta/docs.openbeta.io/blob/develop'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Docs',
        logo: {
          alt: 'OpenBeta logo',
          src: 'img/OB_logo_sm.png'
        },
        items: [
          { to: '/', label: 'Documentation', position: 'left' },
          {
            type: 'doc',
            docId: 'how-to-contribute/overview',
            position: 'left',
            label: 'How to Contribute'
          },
          {
            href: 'https://openbeta.io',
            label: 'Climbing Route Catalog',
            position: 'left'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [

              {
                label: 'Climbing Route Catalog',
                href: 'https://openbeta.io'
              },
              {
                label: 'OpenBeta.io Home',
                href: 'https://openbeta.io'
              },
              {
                label: 'Blog',
                href: 'https://openbeta.io/blog'
              },
              {
                label: 'Chat Server (Discord) ',
                href: 'https://discord.gg/RFufzsqRmJ'
              },
            ]
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'Climbing data',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus'
              },
              {
                label: 'GraphQL API',
                href: 'https://github.com/OpenBeta/openbeta-graphql'
              },
              {
                label: 'Climb catalog (Frontend)',
                href: 'https://github.com/OpenBeta/open-tacos'
              },
              {
                label: 'Climbing grade library (@openbeta/sandbag)',
                href: 'https://github.com/OpenBeta/sandbag'
              }
            ]
          }
        ],
        copyright: 'Except where otherwise noted, this documentation site is licensed under the <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 license</a>.'
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: '\u{1F506}',
          darkIconStyle: {
            margin: '2px',
          },
          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: '\u{1F4A1}',
          lightIconStyle: {
            margin: '2px',
          },
        },
      },
      image: 'img/usa-heatmap-dark.png',
      algolia: {
        // The application ID provided by Algolia
        appId: 'YWE9NFCDLU',

        // Public API key: it is safe to commit it
        apiKey: '12803c67ca29a29fe77268954d81745e',

        indexName: 'openbeta',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      }
    })
}

module.exports = config
