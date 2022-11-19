import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "Bitbucket canonical URL",
  description: "Browser extension that canonize Bitbucket URLs.",
  version: "1.0.0",
  icons: {
    "16": "images/icon16.png",
    "32": "images/icon32.png",
    "48": "images/icon48.png",
    "128": "images/icon128.png",
  },
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
