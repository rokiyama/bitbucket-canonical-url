import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Bitbucket canonical URL",
  description: "Canonize Bitbucket URL on clicking icon",
  version: "1.0.0",
  action: {
    default_title: "Bitbucket canonical URL",
  },
  permissions: ["tabs"],
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["https://bitbucket.org/*"],
      js: ["src/content.ts"],
      run_at: "document_end",
    },
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
