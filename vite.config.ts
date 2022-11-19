import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "拡張機能の名前",
  description: "拡張機能の説明",
  version: "1.0.0",
  icons: {
    "16": "icon.png",
    "48": "icon.png",
    "128": "icon.png",
  },
  action: {
    default_popup: "index.html",
  },
  permissions: ["tabs"],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
