import {extractCritical} from "@emotion/server";
import {renderToString,  RenderToStringOptions} from "@builder.io/qwik/server";
import {Component} from "@builder.io/qwik";

export interface QwikEmotionProps {
  emotion?: {
    css: string;
  }
}

const createEmotionRoot = async (Root: Component<any>, options: RenderToStringOptions) => {
  const render = await renderToString(<Root />, options);
  const { css, ids } = extractCritical(render.html);
  return {css, ids};
}

export default createEmotionRoot;
