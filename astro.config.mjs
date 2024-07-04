import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://josephinel6.github.io",
  output: "server",
  adapter: vercel(),
});
