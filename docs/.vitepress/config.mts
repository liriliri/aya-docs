import { defineConfig } from "vitepress";

const editLinkPattern =
  "https://github.com/liriliri/aya-docs/edit/master/docs/:path";

export default defineConfig({
  title: "AYA",
  description: "AYA Documentation",
  lastUpdated: true,
  outDir: "../dist",
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    logo: {
      src: "/logo.png",
      width: 48,
      height: 48,
    },
    nav: [{ text: "Guide", link: "/guide/" }],
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
      themeConfig: {
        outlineTitle: "在这一页上",
        nav: [{ text: "指南", link: "/zh/guide/" }],
        editLink: {
          pattern: editLinkPattern,
          text: "提出修改意见",
        },
        lastUpdatedText: "修改日期",
      },
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
