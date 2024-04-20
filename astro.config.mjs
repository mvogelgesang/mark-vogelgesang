import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
// https://astro.build/config
import compress from "astro-compress";
import astroExpressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://mvogelgesang.com",
  integrations: [
    astroExpressiveCode({
      // You can set configuration options here
      themes: ["github-dark"],
      styleOverrides: {
        // You can also override styles
        borderRadius: "0.5rem",
      },
      defaultProps: { wrap: false },
    }),
    mdx({
      extendDefaultPlugins: true,
    }),
    sitemap(),
    partytown(),
    compress(),
  ],
});
