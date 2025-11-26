---
layout: page
title: Android ADB 桌面应用
---
<script setup>
import AppHome from '@share/components/AppHome.vue'
import code from '@theme/lib/code'

const version = "1.14.0"

const downloads = [
  {
    key: 'windows',
    name: 'Microsoft Store',
    ext: '.appx',
    href: 'https://apps.microsoft.com/detail/9n9zrstf5fjj?hl=zh-CN',
  },
  {
    key: 'windows_x64',
    name: 'Windows',
    ext: '.exe',
    href: `https://release.liriliri.io/aya/AYA-${version}-win-x64.exe`,
  }, 
  {
    key: 'mac',
    name: 'macOS Apple silicon',
    ext: '.dmg',
    href: `https://release.liriliri.io/aya/AYA-${version}-mac-arm64.dmg `,
  },
  {
    key: 'mac_x64',
    name: 'macOS Intel chip ',
    ext: '.dmg',
    href: `https://release.liriliri.io/aya/AYA-${version}-mac-x64.dmg`,
  },
  {
    key: 'linux',
    name: 'Linux',
    ext: '.AppImage',
    href: `https://release.liriliri.io/aya/AYA-${version}-linux-x86_64.AppImage`,
  }
]

const features = [
  {
    title: '屏幕镜像',
    desc: '高清低延迟投屏，支持键鼠操控、录屏与截图。',
    image: '/screencast.png',
  },
  {
    title: '文件管理',
    desc: '目录浏览、查看上传下载文件。',
    image: '/file.png',
  },
  {
    title: '应用管理',
    desc: '安装卸载应用、清除数据、启停与 APK 导出一应俱全。',
    image: '/application.png',
  },
  {
    title: '进程管理',
    desc: '实时查看进程信息，占用异常一键结束。',
    image: '/process.png',
  },
  {
    title: '性能监控',
    desc: '实时监控 CPU、内存、和帧率。',
    image: '/performance.png',
  },
  {
    title: '终端',
    desc: '类似 adb shell，支持多会话。',
    image: '/shell.png',
  },
  {
    title: '界面布局',
    desc: '查看布局信息，一键保存。',
    image: '/layout.png'
  },
  {
    title: '截屏',
    desc: '一键截屏，支持保存复制。',
    image: '/screencap.png'
  },
  {
    title: '日志查看',
    desc: '图形化 logcat，按级别、标签进行过滤，支持导出日志。',
    image: '/logcat.png'
  }
]
</script>

<AppHome 
  title="AYA Android ADB 桌面应用" 
  subtitle="AYA 是一个用于简化对安卓设备操作控制的桌面应用程序，可以看作是 ADB 的图形用户界面。"
  :code="code"
  :version="version"
  :downloads="downloads"
  :features="features"
  :changelogUrl="`https://github.com/liriliri/aya/releases/tag/v${version}`"
/>
