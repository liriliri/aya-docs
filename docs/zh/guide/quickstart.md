# 快速开始

## 安装

AYA 支持 [Windows x64](https://release.liriliri.io/AYA-1.12.0-win-x64.exe)，[macOS arm64](https://release.liriliri.io/AYA-1.12.0-mac-arm64.dmg)，[macOS x64](https://release.liriliri.io/AYA-1.12.0-mac-x64.dmg) 和 [Linux](https://release.liriliri.io/AYA-1.12.0-linux-x86_64.AppImage) 两个平台，下载安装后直接点击桌面图标开始使用。

:::warning macOS 下出现已损坏提示，可执行 `sudo xattr -r -d com.apple.quarantine /Applications/AYA.app` 解决。
:::

## 连接设备

要使用 AYA 你首先需要在设备上打开 USB 调试功能，通常需要经过以下步骤： 

1. 打开系统设置，进入关于手机
1. 找到软件信息进入，连续点击版本号信息七次后看到类似“您现在处于开发者模式”的提示
1. 接着应该可以在设置中找到开发者选项，进入后开启“USB 调试”
1. 最后连接设备到电脑，打开 AYA 应用
1. 此时设备上会出现“是否允许调试”的对话框，勾选“总是允许”后确认

:::info 后续使用只需要连接设备到电脑即可，无需再重复上述过程。
:::

## 用户界面

AYA 的主界面主要分为顶部的导航栏和剩余的面板展示区域。导航栏左侧是设备选择区域，可以切换当前连接的设备。中间是面板切换选项，包括概览、文件、应用、截屏、日志、终端、布局、进程、性能和网页共十个面板。点击最右侧的 <Icon name="setting"/> 打开设置，这里你可以选择应用的主题、语言和 ADB 位置。
