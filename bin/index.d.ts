import { RenderToStringOptions } from "@builder.io/qwik/server";
import { Component } from "@builder.io/qwik";
export interface QwikEmotionProps {
    emotion?: {
        css: string;
    };
}
declare const createEmotionRoot: (Root: Component<any>, options: RenderToStringOptions) => Promise<{
    css: string;
    ids: string[];
}>;
export default createEmotionRoot;
