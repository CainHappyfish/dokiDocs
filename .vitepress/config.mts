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
          { text: '级联选择器', link: '/docs/basic/cascader.md' },
          { text: '复选框', link: '/docs/basic/checkbox.md' },
          { text: '单选框', link: '/docs/basic/radio.md' },
          { text: '手风琴选择器', link: '/docs/basic/accordionSelector.md' },
        ]
      },
      {
        text: '数据',
        items: [
          { text: '头像', link: '/docs/data/avatar.md' },
          { text: '图像', link: '/docs/data/image.md' },
          { text: '走马灯', link: '/docs/data/carousel.md' },
          { text: '手风琴', link: '/docs/data/accordion.md' },
          { text: '分页器', link: '/docs/data/pagination.md' },
          { text: '标签', link: '/docs/data/tags.md' },
          { text: '滑块', link: '/docs/data/slider.md' },
          { text: '虚拟列表', link: '/docs/data/virtualList.md' },
          { text: '进度条', link: '/docs/data/progress.md' },
          { text: '文件上传', link: '/docs/data/upload.md' },
          { text: '输入框', link: '/docs/data/input.md' },
          { text: '表格', link: '/docs/data/table.md' },
        ]
      },
      {
        text: '布局 & 导航',
        items: [
          {text: '卡片', link: '/docs/layout/card'},
          {text: '多栏布局', link: '/docs/layout/layout'},
          {text: '面包屑', link: '/docs/layout/breadcrumb'},
          {text: '页头', link: '/docs/layout/pageHeader'},
          {text: '导航', link: '/docs/layout/navigation'},
          {text: '下拉菜单', link: '/docs/layout/dropdown'},
          {text: '回到顶部', link: '/docs/layout/backTop'},
          {text: '步骤条', link: '/docs/layout/steps'},
          {text: '分割线', link: '/docs/layout/divider'},
        ]
      },
      {
        text: '反馈',
        items: [
          {text: '提示', link: '/docs/feedback/alert'},
          {text: '对话框', link: '/docs/feedback/dialog'},
          {text: '消息提示', link: '/docs/feedback/message'},
          {text: '消息弹窗', link: '/docs/feedback/messageBox'},
          {text: '通知', link: '/docs/feedback/notification'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
