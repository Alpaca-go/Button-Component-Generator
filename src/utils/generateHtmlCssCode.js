import { generateButtonCss } from "./generateButtonCss";
import { generateButtonMarkup } from "./generateButtonMarkup";

export function generateHtmlCssCode(config) {
  return `${generateButtonMarkup(config)}

<style>
${generateButtonCss(config)}
</style>`;
}
