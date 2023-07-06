import {extractCritical} from "@emotion/server";
import {renderToString,  RenderToStringOptions} from "@builder.io/qwik/server";
import {Component, component$} from "@builder.io/qwik";

export interface QwikEmotionProps {
  emotion?: {
    css: string;
  }
}

interface RootComponentProps {
  emotion?: {
    css: string
  };
  [index: string | number | symbol]: any;
}

const createEmotionRoot = async (Root: Component<RootComponentProps>, options: RenderToStringOptions, props: Record<string | symbol | number, any>) => {
  const render = await renderToString(<Root />, options);
  const { css } = extractCritical(render.html);
  return component$(() => <Root emotion={{css}} {...props} />)
}

export default createEmotionRoot;
