# 前言

本文档不仅是 AYA 软件的使用手册，还适合刚入门想要玩转 Android 的新手通过 AYA 学习 ADB（安卓调试桥）相关知识。 

## ADB

[ADB](https://developer.android.com/tools/adb?hl=zh-cn) 是 google 为 Android 系统开发的核心调试工具，伴随初代 Android 一同发布。通过 ADB，我们可以获取到 Android 设备的各种信息，也可以控制 Android 设备的诸多功能。无论是 Android 应用的开发、调试和性能分析，还是现有的各种云测真机调试平台，都离不开 ADB 的底层支持。

普通用户如果想要使用 ADB，首先要下载安装 Android 的 [SDK 平台工具](https://developer.android.com/tools/releases/platform-tools?hl=zh-cn)，紧接着再通过 USB 或无线连接需要调试的 Android 设备，最后再在终端里输入命令执行指定操作，比如执行 `adb install eruda-android.apk` 为设备安装指定应用。

## AYA

AYA 是一款内置 ADB 并基于其功能编写用户界面的桌面应用。相比于原始的 ADB 命令行输入，AYA 安装傻瓜，功能齐全，全图形化界面，一键操作，极大地提高用户效率。

![screenshot](/screenshot.png)

通过阅读接下来的文档，你可以学习到如何通过 AYA 来对 Android 设备进行管理控制。
