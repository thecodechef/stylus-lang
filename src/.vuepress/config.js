const { description, repository } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Stylus',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: repository,
    editLinks: true,
    docsDir: '',
    editLinkText: 'Edit this on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Documentation',
        link: '/docs/',
      },
      {
        text: 'Repo',
        link: 'https://www.github.com/stylus/stylus'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Documentation',
          collapsable: false,
          children: [
            'overview',
            'using-stylus',
            'selectors',
            'variables',
            'interpolation',
            'operators',
            'mixins',
            'functions',
            'keyword-arguments',
            'built-in-functions',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
