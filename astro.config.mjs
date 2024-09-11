import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://roaring-cupcake-009ab8.netlify.app",
  integrations: [preact()],
});