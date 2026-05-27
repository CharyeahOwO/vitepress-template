import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '云端自留地',
  description: '一份看着像正经文档，实际上满纸吐槽的赛博存活指南。',
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
      { text: '关于', link: '/about/muling' },
      { text: '核心设施', link: '/projects/luoyin-yunshu' },
      { text: '避坑指南', link: '/guide/survival' }
    ],
    sidebar: [
      {
        text: '档案室',
        collapsed: false,
        items: [
          { text: '研究对象：慕棱', link: '/about/muling' },
          { text: '关于本站', link: '/about/site' }
        ]
      },
      {
        text: '核心基础设施',
        collapsed: false,
        items: [
          { text: '洛音云枢 (API Gateway)', link: '/projects/luoyin-yunshu' },
          { text: 'OpenClaw 与 Miya', link: '/projects/openclaw-miya' },
          { text: '拾光物语 (Blog)', link: '/projects/shiguang' }
        ]
      },
      {
        text: '操作手册（伪）',
        collapsed: false,
        items: [
          { text: '赛博生存指南', link: '/guide/survival' },
          { text: '技术栈全景图', link: '/notes/stack' },
          { text: '事故与更新日志', link: '/notes/changelog' }
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
      message: '代码可以写得烂，但态度必须嚣张。',
      copyright: 'Copyright © 2026 慕棱 & Miya'
    }
  }
})
