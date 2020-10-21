import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

module.exports = {
  alias: {
    "/@/": pathResolve("src"),
  },
  optimizeDeps: {
    include: ["@ant-design/icons-vue"],
  },
  // otherwise, may assets 404 or visit with index.html
  base: "/start-vue3/",
  assetsDir: "",
};
