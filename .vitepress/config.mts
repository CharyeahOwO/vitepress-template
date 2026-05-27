import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '慕棱的文档馆',
  description: '关于慕棱、洛音云枢、拾光物语和一些折腾记录。',
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
      { text: '关于慕棱', link: '/about/muling' },
      { text: '项目', link: '/projects/luoyin-yunshu' },
      { text: '记录', link: '/notes/archive' }
    ],
    sidebar: [
      {
        text: '关于',
        collapsed: false,
        items: [
          { text: '关于慕棱', link: '/about/muling' },
          { text: '这里是什么', link: '/about/site' }
        ]
      },
      {
        text: '项目',
        collapsed: false,
        items: [
          { text: '洛音云枢', link: '/projects/luoyin-yunshu' },
          { text: '拾光物语', link: '/projects/shiguang' },
          { text: 'OpenClaw 与 Miya', link: '/projects/openclaw-miya' }
        ]
      },
      {
        text: '记录',
        collapsed: false,
        items: [
          { text: '折腾索引', link: '/notes/archive' },
          { text: '技术栈碎片', link: '/notes/stack' },
          { text: '更新日志', link: '/notes/changelog' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/CharyeahOwO'
      }
    ],
    footer: {
      message: '记录折腾，也记录一点人间。',
      copyright: 'Copyright © 2026 慕棱'
    }
  }
})
