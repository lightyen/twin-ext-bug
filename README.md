# twin-ext-bug

```
tailwindcss version: 2.0.2
postcss version: 8.2.4
process: /home/oskar/dev/scratch/twin-ext-bug/tailwind.config.js
[Error] resolving config:
 Error: Cannot find module './tailwind.config.custom.js'
Require stack:
- /home/oskar/.vscode-oss/extensions/lightyen.tailwindcss-intellisense-twin-0.3.4/dist/server/server.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:797:17)
    at Module._load (internal/modules/cjs/loader.js:690:27)
    at Function.Module._load (electron/js2c/asar.js:769:28)
    at Module.require (internal/modules/cjs/loader.js:852:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at eval (eval at findConfig (/home/oskar/.vscode-oss/extensions/lightyen.tailwindcss-intellisense-twin-0.3.4/dist/server/server.js:2:456095), <anonymous>:3:22)
    at Tailwind.findConfig (/home/oskar/.vscode-oss/extensions/lightyen.tailwindcss-intellisense-twin-0.3.4/dist/server/server.js:2:456095)
    at Tailwind.load (/home/oskar/.vscode-oss/extensions/lightyen.tailwindcss-intellisense-twin-0.3.4/dist/server/server.js:2:453989)
    at new Tailwind (/home/oskar/.vscode-oss/extensions/lightyen.tailwindcss-intellisense-twin-0.3.4/dist/server/server.js:2:453683)
    at new s.TailwindLanguageService (/home/oskar/.vscode-oss/extensions/lightyen.tailwindcss-intellisense-twin-0.3.4/dist/server/server.js:2:473543) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/oskar/.vscode-oss/extensions/lightyen.tailwindcss-intellisense-twin-0.3.4/dist/server/server.js'
  ]
}
userConfig = false
distConfig = /home/oskar/.vscode-oss/extensions/lightyen.tailwindcss-intellisense-twin-0.3.4/node_modules/tailwindcss/defaultConfig.js
```
