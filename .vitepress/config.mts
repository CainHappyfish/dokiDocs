import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Doki-UI Docs",
  description: "A simple personal component lib.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/docs/components.md' },
    ],

    sidebar: [
      {
        text: '基础组件',
        items: [
          { text: '按钮', link: '/docs/basic/buttons.md' },
          { text: '链接', link: '/docs/basic/links.md' },
          { text: '自动填充输入框', link: '/docs/basic/autoFillInput.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
