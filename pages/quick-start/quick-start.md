# 项目概览

欢迎来到「拾光文档馆」。这是一个已经整理好的 VitePress 中文文档模板，你可以把它当作项目主页、产品手册、团队知识库，或者一块安静记录想法的地方。

它的目标很简单：少一点配置，多一点内容；少一点杂乱，多一点清楚。

## 安装与启动

进入项目后安装依赖：

```bash
npm install
```

启动本地预览：

```bash
npm run dev
```

构建静态站点：

```bash
npm run build
```

预览构建结果：

```bash
npm run preview
```

::: tip 小提示
平时写文档时开着开发服务器即可，保存 Markdown 文件后页面会自动刷新。
:::

## 页面写作

所有页面都放在 `pages` 目录下。你可以新增任意 Markdown 文件，然后在 `.vitepress/config.mts` 里把它加入导航或侧边栏。

常见写法如下：

```md
# 页面标题

用一两句话说明这个页面解决什么问题。

## 小节标题

- 写清背景
- 给出步骤
- 补充示例
```

## 推荐目录

```text
pages/
├─ index.md
├─ quick-start/
│  └─ quick-start.md
├─ advanced/
│  ├─ custom-theme.md
│  ├─ markdown-extensions.md
│  └─ code-highlighting.md
└─ examples/
   ├─ markdown-examples.md
   └─ api-examples.md
```

## 写作节奏

### 先写结论

读者打开文档时，最想知道的是「这页能帮我解决什么」。把结论放在前面，再展开细节。

### 步骤要短

一个步骤只做一件事。命令、配置、解释分开写，读起来会轻很多。

### 示例要能复制

代码块尽量完整，变量名保持真实，说明文字不要挡在关键步骤前面。

## 发布上线

构建完成后，`dist` 目录就是可以部署的静态文件。你可以把它放到任意静态托管平台，例如 EdgeOne Pages、GitHub Pages、Netlify 或 Vercel。

::: warning 发布前检查
上线前建议跑一次 `npm run build`，确认链接、代码块和 Markdown 语法没有问题。
:::

## 下一步

继续阅读进阶页面，给站点换上自己的色彩、排版和示例内容。
