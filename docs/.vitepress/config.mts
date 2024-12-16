import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AYA",
  description: "AYA Documentation",
  lastUpdated: true,
  outDir: "../dist",
  themeConfig: {
    logo: {
      src: "/logo.png",
      width: 48,
      height: 48,
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/liriliri/aya",
      },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    zh: {
      label: "中文",
      lang: "zh",
    },
  },
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-1J1Y3KN46R",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1J1Y3KN46R');`,
    ],
  ],
});
