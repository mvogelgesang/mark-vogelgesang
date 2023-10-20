import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://mvogelgesang.com",
  integrations: [
    mdx({
      extendDefaultPlugins: true,
      syntaxHighlight: "prism",
    }),
    sitemap(),
    partytown(),
    compress(),
  ],
});
