# 客户端接入

大多数支持 OpenAI 兼容接口的客户端，都可以接入 New API。

## 通用配置

常见配置项：

```text
Base URL: https://你的域名/v1
API Key: New API 令牌
Model: 后台支持的模型名
```

如果客户端区分 Chat Completions、Responses 或 Embeddings，需要确认 New API 当前版本和渠道是否支持对应接口。

## OpenAI SDK

使用 OpenAI SDK 时，通常只需要改 `baseURL` 和 `apiKey`。

```ts
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.NEW_API_KEY,
  baseURL: 'https://你的域名/v1'
})
```

然后正常指定模型：

```ts
const completion = await client.chat.completions.create({
  model: '你的模型名',
  messages: [
    { role: 'user', content: '你好' }
  ]
})
```

## 酒馆类客户端

酒馆类客户端通常重点检查：

- Base URL 是否填到 `/v1`；
- API Key 是否是 New API 令牌；
- 模型名是否存在；
- 流式输出是否开启；
- 上下文长度是否超过模型限制。

## Agent / 开发工具

OpenClaw、Claude Code、各类 Agent 框架接入时，除了 Base URL 和 Key，还要关注：

- 工具调用格式；
- 流式响应；
- reasoning 字段兼容性；
- 图片、多模态、文件等扩展能力；
- 超时和重试设置。

如果某个客户端能普通聊天但工具调用失败，通常不是 Key 的问题，而是协议字段或模型能力不匹配。

## 排查顺序

客户端接不通时按这个顺序看：

```text
客户端实际请求地址
  ↓
New API 请求日志
  ↓
令牌权限和余额
  ↓
模型名和渠道
  ↓
上游返回错误
  ↓
反代和网络
```

别一上来就怀疑模型，很多时候只是 URL 多写了一个 `/v1`。
