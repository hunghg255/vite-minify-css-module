import { UserConfig } from 'vite';
import { createCounter } from './core/createCounter';
import { createUnplugin } from 'unplugin';
import { PluginOptions } from './core/types';

const unpluginFactory = (options?: PluginOptions): any => {
  const next = createCounter(options?.dictionary);
  const map: Map<string, string> = new Map();

  return {
    name: 'vite-minify-css-module',
    apply: 'build',
    config: (): UserConfig => ({
      css: {
        modules: {
          generateScopedName: (name: string, fileName: string) => {
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
