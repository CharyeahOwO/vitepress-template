import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'New API 文档',
  description: 'New API 统一模型网关的部署、接入与使用文档。',
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
      { text: '快速开始', link: '/guide/what-is-new-api' },
      { text: '部署', link: '/deploy/docker' },
      { text: '使用', link: '/usage/token-and-models' },
      { text: '排障', link: '/troubleshooting/common-issues' }
    ],
    sidebar: [
      {
        text: '开始之前',
        collapsed: false,
        items: [
          { text: '什么是 New API', link: '/guide/what-is-new-api' },
          { text: '核心概念', link: '/guide/concepts' },
          { text: '推荐使用流程', link: '/guide/workflow' }
        ]
      },
      {
        text: '部署与维护',
        collapsed: false,
        items: [
          { text: 'Docker 部署', link: '/deploy/docker' },
          { text: '环境变量', link: '/deploy/env' },
          { text: '升级与备份', link: '/deploy/upgrade' }
        ]
      },
      {
        text: '日常使用',
        collapsed: false,
        items: [
          { text: '令牌与模型', link: '/usage/token-and-models' },
          { text: '渠道配置', link: '/usage/channels' },
          { text: '客户端接入', link: '/usage/clients' }
        ]
      },
      {
        text: '排障',
        collapsed: false,
        items: [
          { text: '常见问题', link: '/troubleshooting/common-issues' },
          { text: '日志与请求排查', link: '/troubleshooting/logs' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/QuantumNous/new-api'
      }
    ],
    footer: {
      message: 'New API 是开源统一模型网关，请根据自身业务场景合理部署和使用。',
      copyright: 'Copyright © 2026 New API Docs'
    }
  }
})
