---
layout: page
title: Android ADB Desktop App
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
    href: 'https://apps.microsoft.com/detail/9n9zrstf5fjj?hl=en-US',
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
    title: 'Screencast',
    desc: 'High-quality, low-latency casting, control with keyboard and mouse, record and capture.',
    image: '/screencast.png',
  },
  {
    title: 'File',
    desc: 'Browse directories, view, upload, and download files.',
    image: '/file.png',
  },
  {
    title: 'Application',
    desc: 'Install/uninstall apps, clear data, start/stop application, and export APKs.',
    image: '/application.png',
  },
  {
    title: 'Process',
    desc: 'View processes in real time and end abnormal ones with one click.',
    image: '/process.png',
  },
  {
    title: 'Performance',
    desc: 'Real-time CPU, memory, and FPS monitoring.',
    image: '/performance.png',
  },
  {
    title: 'Terminal',
    desc: 'ADB shell–like experience with multi-session support.',
    image: '/shell.png',
  },
  {
    title: 'Layout Inspector',
    desc: 'Inspect layout info and save with one click.',
    image: '/layout.png'
  },
  {
    title: 'Screenshot',
    desc: 'One-click screenshots with save and copy.',
    image: '/screencap.png'
  },
  {
    title: 'Logcat',
    desc: 'Graphical logcat with level/tag filters and log export.',
    image: '/logcat.png'
  }
]
</script>

<AppHome 
  title="AYA Android ADB Desktop App" 
  subtitle="AYA is a desktop application for easily controlling android devices, which can be considered as a GUI wrapper for ADB."
  :code="code"
  :version="version"
  :downloads="downloads"
  :features="features"
  :changelogUrl="`https://github.com/liriliri/aya/releases/tag/v${version}`"
/>
