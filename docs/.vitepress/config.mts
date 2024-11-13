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
});
