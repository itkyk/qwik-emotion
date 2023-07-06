import { jsx as _jsx } from "@builder.io/qwik/jsx-runtime";
import { extractCritical } from "@emotion/server";
import { renderToString } from "@builder.io/qwik/server";
import { component$ } from "@builder.io/qwik";
const createEmotionRoot = async (Root, options, props) => {
    const render = await renderToString(_jsx(Root, {}), options);
    const { css } = extractCritical(render.html);
    return component$(() => _jsx(Root, Object.assign({ emotion: { css } }, props)));
};
export default createEmotionRoot;
