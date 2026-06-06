import { escapeHtml } from "./codeHelpers";
import { generateButtonCss } from "./generateButtonCss";

export function generateHtmlCssCode(config) {
  return `<button class="generated-button"${config.interaction.disabledEnabled ? " disabled" : ""}>
  <span class="generated-button__content">${escapeHtml(config.text)}</span>
</button>

<style>
${generateButtonCss(config)}
</style>`;
}
