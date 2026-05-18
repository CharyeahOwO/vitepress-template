---
outline: deep
---

# 运行时 API 示例

VitePress 提供了运行时 API，可以在 Markdown 或 Vue 组件中读取站点、主题、页面和 frontmatter 数据。

下面这个示例会在页面中输出当前站点数据，适合调试主题配置或确认页面元信息。

```md
<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 当前页面

<pre>{{ page }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 当前站点

<pre>{{ site }}</pre>

## 主题配置

<pre>{{ theme }}</pre>

## 页面数据

<pre>{{ page }}</pre>

## Frontmatter

<pre>{{ frontmatter }}</pre>

::: tip 使用建议
如果只是写普通文档，不需要碰运行时 API。只有在做自定义组件、主题扩展或动态展示时再使用它。
:::
