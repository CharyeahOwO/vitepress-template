# 定制主题

这个模板已经在默认主题上做了轻量美化。你可以继续调整颜色、字体、按钮、卡片和代码块，让站点更贴近自己的项目气质。

## 主题入口

主题入口位于：

```text
.vitepress/theme/index.ts
```

当前主题继承了 VitePress 默认主题，并加载了自定义样式：

```ts
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme
}
```

## 样式文件

主要视觉样式放在：

```text
.vitepress/theme/style.css
```

你可以在这里修改品牌色、按钮、首页、正文和侧边栏。

```css
:root {
  --vp-c-brand-1: #0f766e;
  --vp-c-brand-2: #0d9488;
  --vp-c-brand-3: #14b8a6;
}
```

## 视觉建议

### 颜色保持克制

一个文档站最重要的是阅读体验。品牌色用来强调行动按钮和链接，正文区域保持干净，会更耐看。

### 间距要稳定

标题、段落、列表、代码块之间保持一致的距离，读者会更容易扫读。

### 页面不要太满

能用表格讲清楚的，就不要堆大段文字；能用步骤表达的，就不要写成长段说明。

## 自定义组件

如果需要更丰富的展示，可以在 `.vitepress/theme/components` 中创建 Vue 组件，再在主题入口注册。

```vue
<template>
  <section class="note-panel">
    <strong>{{ title }}</strong>
    <p>{{ content }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>
```

## 适合加入的内容

- 产品能力卡片
- 常见问题折叠面板
- 发布日志时间线
- 文档状态标签
- 团队规范说明

## 检查清单

- [ ] 首页是否一眼看懂
- [ ] 导航名称是否足够短
- [ ] 移动端是否好读
- [ ] 代码块是否完整
- [ ] 重要链接是否有效
