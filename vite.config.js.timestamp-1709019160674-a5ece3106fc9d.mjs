// vite.config.js
import { sveltekit } from "file:///I:/00-projects/revanced-website/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { imagetools } from "file:///I:/00-projects/revanced-website/node_modules/vite-imagetools/dist/index.js";
import path from "path";
var config = {
  plugins: [sveltekit(), imagetools()],
  resolve: {
    alias: {
      $images: path.resolve("./images"),
      $data: path.resolve("./src/data"),
      $layout: path.resolve("./src/layout"),
      $util: path.resolve("./src/util")
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJJOlxcXFwwMC1wcm9qZWN0c1xcXFxyZXZhbmNlZC13ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJJOlxcXFwwMC1wcm9qZWN0c1xcXFxyZXZhbmNlZC13ZWJzaXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9JOi8wMC1wcm9qZWN0cy9yZXZhbmNlZC13ZWJzaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcclxuaW1wb3J0IHsgaW1hZ2V0b29scyB9IGZyb20gJ3ZpdGUtaW1hZ2V0b29scyc7XHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdHBsdWdpbnM6IFtzdmVsdGVraXQoKSwgaW1hZ2V0b29scygpXSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczoge1xyXG5cdFx0XHQkaW1hZ2VzOiBwYXRoLnJlc29sdmUoJy4vaW1hZ2VzJyksXHJcblx0XHRcdCRkYXRhOiBwYXRoLnJlc29sdmUoJy4vc3JjL2RhdGEnKSxcclxuXHRcdFx0JGxheW91dDogcGF0aC5yZXNvbHZlKCcuL3NyYy9sYXlvdXQnKSxcclxuXHRcdFx0JHV0aWw6IHBhdGgucmVzb2x2ZSgnLi9zcmMvdXRpbCcpXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFSLFNBQVMsaUJBQWlCO0FBQy9TLFNBQVMsa0JBQWtCO0FBRTNCLE9BQU8sVUFBVTtBQUdqQixJQUFNLFNBQVM7QUFBQSxFQUNkLFNBQVMsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0FBQUEsRUFDbkMsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sU0FBUyxLQUFLLFFBQVEsVUFBVTtBQUFBLE1BQ2hDLE9BQU8sS0FBSyxRQUFRLFlBQVk7QUFBQSxNQUNoQyxTQUFTLEtBQUssUUFBUSxjQUFjO0FBQUEsTUFDcEMsT0FBTyxLQUFLLFFBQVEsWUFBWTtBQUFBLElBQ2pDO0FBQUEsRUFDRDtBQUNEO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
