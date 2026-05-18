# 代码高亮

代码示例是技术文档最常见的内容。清楚的高亮、稳定的命名和完整的上下文，会让读者更愿意复制并尝试。

## JavaScript

```js
function formatTitle(title) {
  return `《${title.trim()}》`
}

console.log(formatTitle('拾光文档馆'))
```

## TypeScript

```ts
interface Article {
  title: string
  summary: string
  tags: string[]
}

const article: Article = {
  title: '如何写一页清楚的文档',
  summary: '先讲目标，再给步骤，最后补充边界。',
  tags: ['写作', '文档', 'VitePress']
}
```

## Vue

```vue
<template>
  <button class="publish-button" @click="publish">
    发布文档
  </button>
</template>

<script setup lang="ts">
function publish() {
  console.log('文档已准备发布')
}
</script>

<style scoped>
.publish-button {
  border: 0;
  border-radius: 8px;
  padding: 10px 16px;
  color: white;
  background: #0f766e;
}
</style>
```

## CSS

```css
.doc-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 20px;
  background: var(--vp-c-bg);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}
```

## Diff

```diff
- title: 'vitepress-template'
+ title: '拾光文档馆'
```

## 行高亮

```ts{5}
const checklist = [
  '确认导航中文化',
  '检查首页信息',
  '运行构建命令',
  '发布到静态托管平台'
]
```

## 实用原则

- 代码块必须能说明问题。
- 示例变量名尽量接近真实业务。
- 高亮只标关键行，不要整段都标。
- 命令行示例保持短小，避免混入无关输出。
