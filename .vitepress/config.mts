import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '拾光文档馆',
  description: '一个温柔、清爽、可直接使用的中文 VitePress 文档站。',
  lang: 'zh-CN',
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quick-start/quick-start' },
      { text: '写作示例', link: '/examples/markdown-examples' },
      { text: '进阶玩法', link: '/advanced/custom-theme' }
    ],
    sidebar: [
      {
        text: '启程',
        collapsed: false,
        items: [
          { text: '项目概览', link: '/quick-start/quick-start' },
          { text: '安装与启动', link: '/quick-start/quick-start#安装与启动' },
          { text: '页面写作', link: '/quick-start/quick-start#页面写作' },
          { text: '发布上线', link: '/quick-start/quick-start#发布上线' }
        ]
      },
      {
        text: '进阶玩法',
        collapsed: false,
        items: [
          { text: '定制主题', link: '/advanced/custom-theme' },
          { text: 'Markdown 扩展', link: '/advanced/markdown-extensions' },
          { text: '代码高亮', link: '/advanced/code-highlighting' }
        ]
      },
      {
        text: '示例集',
        collapsed: false,
        items: [
          { text: 'Markdown 示例', link: '/examples/markdown-examples' },
          { text: '运行时 API', link: '/examples/api-examples' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/TencentEdgeOne/pages-templates/tree/main/examples/vitepress-template'
      }
    ],
    footer: {
      message: '用 Markdown 写下清楚的想法。',
      copyright: 'Copyright © 2026 拾光文档馆'
    }
  }
})
