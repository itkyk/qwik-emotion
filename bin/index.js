import { jsx as _jsx } from "@builder.io/qwik/jsx-runtime";
import { extractCritical } from "@emotion/server";
import { renderToString } from "@builder.io/qwik/server";
const createEmotionRoot = async (Root, options) => {
    const render = await renderToString(_jsx(Root, {}), options);
    const { css, ids } = extractCritical(render.html);
    return { css, ids };
};
export default createEmotionRoot;
