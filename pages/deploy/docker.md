# Docker 部署

Docker 是部署 New API 最常见的方式。它适合个人服务器、轻量云主机和小团队环境。

::: warning 注意
下面是通用部署说明。不同版本的镜像、环境变量和数据库要求可能会变化，实际部署时请以你正在使用的 New API 版本为准。
:::

## 准备环境

服务器建议准备：

- Docker；
- Docker Compose；
- 一个可访问的域名；
- 反向代理或面板；
- 持久化数据目录。

如果只是本地测试，可以先不用域名，直接通过端口访问。

## 基础 Compose 示例

下面是一个基础结构示例，用于说明服务组成。正式使用前请根据实际镜像、版本和环境变量调整。

```yaml
services:
  new-api:
    image: calciumion/new-api:latest
    container_name: new-api
    restart: always
    ports:
      - "3000:3000"
    volumes:
      - ./data:/data
    environment:
      - TZ=Asia/Shanghai
```

启动：

```bash
docker compose up -d
```

查看日志：

```bash
docker compose logs -f new-api
```

## 反向代理

建议通过 Nginx、Caddy、1Panel、EdgeOne 或其他反代入口暴露服务。

常见反代目标：

```text
http://127.0.0.1:3000
```

如果客户端需要流式输出，反代层要确保不要缓存 SSE 响应，也不要过早断开连接。

## 部署后检查

部署完成后建议检查：

- 后台页面是否能打开；
- 管理员账号是否能登录；
- 数据目录是否持久化；
- 反代是否支持流式响应；
- HTTPS 证书是否正常；
- 日志里是否有数据库或权限错误。

## 常见坑

### 数据目录没挂载

没有挂载数据目录时，容器重建可能导致数据丢失。正式使用前一定要确认数据持久化。

### 反代缓存流式响应

如果流式输出卡住、一次性吐出或中途断开，优先检查反代缓冲和超时配置。

### 端口冲突

如果 `3000` 被占用，可以改成其他宿主机端口：

```yaml
ports:
  - "3001:3000"
```
