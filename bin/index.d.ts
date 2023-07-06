import { RenderToStringOptions } from "@builder.io/qwik/server";
import { Component } from "@builder.io/qwik";
export interface QwikEmotionProps {
    emotion?: {
        css: string;
    };
}
interface RootComponentProps {
    emotion?: {
        css: string;
    };
    [index: string | number | symbol]: any;
}
declare const createEmotionRoot: (Root: Component<RootComponentProps>, options: RenderToStringOptions, props: Record<string | symbol | number, any>) => Promise<Component<{}>>;
export default createEmotionRoot;
