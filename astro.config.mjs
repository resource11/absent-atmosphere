import { defineConfig, sharpImageService } from "astro/config";
// import image from "@astrojs/image";
// import image from "@astrojs/image/sharp";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify/functions";
// import netlify from "@astrojs/netlify/edge-functions"

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: "prism",
    gfm: true,
  },
  integrations: [
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),

    mdx({
      drafts: true,
    }),
    react(),
    solid(),
  ],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  output: "server",
  adapter: netlify(),
});
