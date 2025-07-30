# 贡献指南

## 开发设置

开发 aya 需要 [Node.js](https://nodejs.org/zh-cn) 以及 Android SDK 工具。

在克隆仓库后，运行以下命令：

```bash
# 拉取子模块。
git submodule update --init --recursive
# 安装 npm 依赖。
npm install
# 下载 adb 工具。
npm run adb
```

## 常用的 NPM 脚本

```bash
# 构建运行在设备上的服务端。
npm run server
# 监视并自动重新构建。
npm run dev
# 启动开发调试。
npm start
# 生成构建产物到 dist 目录。
npm run build
# 打包应用到 release 目录。
npm run pack
```

## 项目结构

- **src**: 客户端源码
- **server**: 服务端源码
