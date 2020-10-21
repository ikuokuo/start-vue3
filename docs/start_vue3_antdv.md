# Start Vue 3 and Ant Design

## Create via Vite

```zsh
yarn create vite-app my-site
cd my-site
yarn
yarn dev
```

Run:

```zsh
❯ yarn dev
yarn run v1.22.10
warning package.json: No license field
$ vite
vite v1.0.0-rc.4
[vite] Optimizable dependencies detected:
vue

  Dev server running at:
  > Local:    http://localhost:3000/
  > Network:  http://192.168.1.100:3000/
```

Visit:

![](start_vue3_antdv/1_create.png)

## Changes from Vue 2

* [Migration Guide](https://v3.vuejs.org/guide/migration/introduction.html)

## Vite Config

* [Vite - Config File](https://github.com/vitejs/vite#config-file)

```js
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

module.exports = {
  alias: {
    '/@/': pathResolve('src'),
  },
  optimizeDeps: {
    include: [
      '@ant-design/icons-vue',
    ],
  },
}
```

## Preparation

<!--
eslint --init
yarn add -D eslint eslint-plugin-vue
-->

### TypeScript

![](https://img.shields.io/npm/v/typescript)

```zsh
yarn add -D typescript
```

* [Vue3 - TypeScript](https://v3.vuejs.org/guide/typescript-support.html)
* [Vite - TypeScript](https://github.com/vitejs/vite#typescript)

### [Vue Router](https://github.com/vuejs/vue-router-next)

![](https://img.shields.io/npm/v/vue-router/next.svg)

```zsh
yarn add vue-router@next
```

### [Vuex](https://github.com/vuejs/vuex/tree/4.0)

![](https://img.shields.io/npm/v/vuex/next.svg)

```zsh
yarn add vuex@@next
```

### [Ant Design Vue](https://github.com/vueComponent/ant-design-vue/)

![](https://img.shields.io/npm/v/ant-design-vue/next.svg)

```zsh
yarn add ant-design-vue@next
# import on demand
yarn add -D babel-plugin-import

# https://github.com/vueComponent/ant-design-vue/issues/2798
yarn add @ant-design/colors
```

<!--
yarn add @ant-design/icons-vue
-->

`.babelrc`:

```json
{
  "plugins": [
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
  ]
}
```

### Others

```zsh
yarn add -D sass
```

## Go Coding

### Use main.ts

* Rename `main.js` to `main.ts`
* Edit `index.html`, replace `/src/main.js` with `/src/main.ts`

    ```html
    ...
    <body>
      <div id="app"></div>
      <script type="module" src="/src/main.ts"></script>
    </body>
    </html>
    ```

### Use vue-router


## References

* [Vue 3 - Docs](https://v3.vuejs.org/guide/)
* [Ant Design Vue - Docs](https://2x.antdv.com/)
* [Vue Vben Admin](https://github.com/anncwb/vue-vben-admin)
