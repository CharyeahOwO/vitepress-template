# 拾光文档馆

一个已经中文化并轻量美化的 VitePress 文档模板，适合项目说明、产品手册、团队知识库和个人笔记站。

## 特点

- 中文导航、中文首页、中文示例内容
- 清爽的主题色和更柔和的阅读节奏
- 支持本地搜索、侧边栏、目录和提示块
- 保留 VitePress 的标准开发、构建和预览命令

## 开始使用

```bash
npm install
npm run dev
```

构建生产版本：

```bash
npm run build
```

预览构建结果：

```bash
npm run preview
```

## 目录结构

```text
.
├─ .vitepress/
│  ├─ config.mts
│  └─ theme/
│     ├─ index.ts
│     └─ style.css
├─ pages/
│  ├─ index.md
│  ├─ quick-start/
│  ├─ advanced/
│  └─ examples/
├─ package.json
└─ edgeone.json
```

## 写作建议

先把读者要完成的目标写清楚，再给出步骤、代码和注意事项。页面标题保持短，侧边栏名称保持稳定，文档会更容易长期维护。
