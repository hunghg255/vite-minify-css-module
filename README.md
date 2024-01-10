<p align="center">
<a href="https://www.npmjs.com/package/vite-minify-css-module" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/bi:plugin.svg?color=%23a985ff" alt="logo" width='100'/></a>
</p>

<p align="center">
  A plugin minify css module for <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vitejs</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-minify-css-module" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/vite-minify-css-module.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/vite-minify-css-module" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/vite-minify-css-module.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=vite-minify-css-module" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/vite-minify-css-module" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/vite-minify-css-module/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/vite-minify-css-module/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/vite-minify-css-module" alt="License" /></a>
</p>

## 🌈 Features

- 🍰 Minify css module class name
- 🍰 Support clean-css options

## 📦 Installation

```bash
npm i vite-minify-css-module@latest -D
```

## support vite and rollup.

<details>
<summary>Basic</summary><br>

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import MinifyCssModule from 'vite-minify-css-module/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    MinifyCssModule({
      cleanCSS: {
        level: {
          2: {
            mergeSemantically: true,
            restructureRules: true,
          },
        },
      },
    }),
  ],
});
```

<br></details>

## 🌸 DefaultConfiguration

```typescript
export interface PluginOptions {
  dictionary?: string;
  clearnCSS?: OptionsOutput;
}
```

## How does it work?

By default, when using css modules, you end up with hashes or other long class-names in your bundled css files:

```css
@keyframes _close-card_pzatx_1 {
  /* CSS HERE */
}

._card_pzatx_32 {
  /* CSS HERE */
}

._back_pzatx_49 ._content_pzatx_70 ._close_pzatx_74 {
  /* CSS HERE */
}
```

By using this module, the smalles possible classname will be used for each "id":

```css
@keyframes a {
  /* CSS HERE */
}

.v {
  /* CSS HERE */
}

.c .s .w {
  /* CSS HERE */
}
```
