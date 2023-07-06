import { extractCritical } from "@emotion/server";
import { renderToString } from "@builder.io/qwik/server";
const createEmotionRoot = async (Root, options) => {
    const render = await renderToString(<Root />, options);
    const { css, ids } = extractCritical(render.html);
    return { css, ids };
};
export default createEmotionRoot;
