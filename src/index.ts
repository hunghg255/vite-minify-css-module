import { UserConfig } from 'vite';
import { createCounter } from './core/createCounter';
import { createUnplugin } from 'unplugin';
import { PluginOptions } from './core/types';
import CleanCSS from 'clean-css';

const unpluginFactory = (options?: PluginOptions): any => {
  const next = createCounter(options?.dictionary);
  const map: Map<string, string> = new Map();
  const cleanCSS = new CleanCSS(options?.cleanCSS);

  return {
    name: 'vite-minify-css-module',
    apply: 'build',
    generateBundle(_, bundle) {
      for (const key in bundle) {
        const chunk = bundle[key];

        if (
          chunk.type === 'asset' &&
          chunk.fileName.endsWith('.css') &&
          options?.cleanCSS
        ) {
          chunk.source = cleanCSS.minify(chunk.source as string).styles;
        }
      }
    },
    config: (): UserConfig => ({
      css: {
        modules: {
          generateScopedName: (name: string, fileName: string, css) => {
            const key = `${fileName} ${name}`;

            let hash = map.get(key);
            if (!hash) {
              map.set(key, (hash = next()));
            }

            return hash;
          },
        },
      },
    }),
  };
};

export const VitePluginResizeImage =
  /* #__PURE__ */ createUnplugin(unpluginFactory);

export default VitePluginResizeImage;
