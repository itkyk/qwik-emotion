# Qwik with EmotionJS

This library uses emotionJS with Qwik to get css data as strings.  
Since emotion is executed server-side, it does not affect the speed of browser rendering.

## Getting Started

### Install
```bash
npm install qwik-emotion
```

## Inject

```tsx
/* root.tsx */

// Import props type
import {QwikEmotionProps} from "qwik-emotion";

export default component$((props: QwikEmotionProps) => {

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8"/>
        <link rel="manifest" href="/manifest.json"/>
        <RouterHead/>
        {/* Add new line */}
        <style data-emotion="css" dangerouslySetInnerHTML={props.emotion?.css}></style>
      </head>
      <body lang="en">
      <RouterOutlet/>
      <ServiceWorkerRegister/>
      </body>
    </QwikCityProvider>
  );
});
```

```tsx
/* entry.ssr.tsx */
import createEmotionRoot from "qwik-emotion";

export default async function (opts: RenderToStreamOptions) {
  // Extract css information
  const {css} = await createEmotionRoot(Root, opts);
  return renderToStream( <Root emotion={{css}} />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "en-us",
      ...opts.containerAttributes,
    },
  });
}
```

```tsx
/* index.tsx */
import {component$} from "@builder.io/qwik";
import {css} from "@emotion/css";

export default component$(() => {
  const style = css({
    color: "red"
  });
  return (
    <p class={style}>Hello, Emotion.</p>
  )
})
```

## Advanced
### @emotion/babel-plugin

#### install npm
```bash
npm i -D vite-plugin-babel @emotion/babel-plugin @babel/preset-typescript
```

```typescript
/* vite.config.ts */
import babelPlugin from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    babelPlugin({
      filter: /\.tsx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: ["@emotion/babel-plugin"]
      },
      loader:(path) => {
        if (extname(path) === '.tsx') {
          return 'tsx';
        }
      }
    })
  ]
})
```