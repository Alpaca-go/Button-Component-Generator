import { escapeHtml, escapeJsString } from "./codeHelpers";

export function needsFillLayer(config) {
  return config.effects.fillHover.enabled;
}

export function needsShineLayer(config) {
  return config.effects.shine.enabled || config.effects.autoShine.enabled;
}

export function needsHighlightLayer(config) {
  return config.effects.glass.enabled && config.effects.glass.highlightEnabled;
}

export function hasBorderWrapper(config) {
  return config.effects.borderFlow.enabled;
}

function getContentHtml(config, loading = config.state.loadingPreview) {
  if (config.state.loadingEnabled && loading) {
    return `<span class="generated-button__loading generated-button__loading--${config.state.loadingType}">
      <span class="generated-button__loader" aria-hidden="true"></span>
      <span class="generated-button__loading-text">${escapeHtml(config.state.loadingText)}</span>
    </span>`;
  }

  const textMarkup = config.content.textSwapEnabled
    ? `<span class="generated-button__text-default">${escapeHtml(config.text)}</span>
      <span class="generated-button__text-hover">${escapeHtml(config.content.hoverText)}</span>`
    : `<span class="generated-button__text">${escapeHtml(config.text)}</span>`;

  const iconMarkup = config.content.iconEnabled
    ? `<span class="generated-button__icon">${escapeHtml(config.content.iconText)}</span>`
    : "";

  return config.content.iconPosition === "left"
    ? `${iconMarkup}
      ${textMarkup}`
    : `${textMarkup}
      ${iconMarkup}`;
}

export function generateButtonInnerHtml(config, options = {}) {
  const loading = options.loading ?? config.state.loadingPreview;
  const contentClass = config.content.textSwapEnabled
    ? "generated-button__content generated-button__content--swap"
    : "generated-button__content";
  const layers = [
    needsFillLayer(config) ? `  <span class="generated-button__fill"></span>` : "",
    needsShineLayer(config) ? `  <span class="generated-button__shine"></span>` : "",
    needsHighlightLayer(config) ? `  <span class="generated-button__highlight"></span>` : "",
    `  <span class="${contentClass}">
      ${getContentHtml(config, loading)}
  </span>`,
  ].filter(Boolean);

  return layers.join("\n");
}

export function generateButtonMarkup(config, options = {}) {
  const disabled = options.disabled ?? config.state.disabledEnabled;
  const loading = options.loading ?? config.state.loadingPreview;
  const disabledAttr = disabled || (config.state.loadingEnabled && loading) ? " disabled" : "";
  const button = `<button class="generated-button"${disabledAttr}>
${generateButtonInnerHtml(config, { loading })}
</button>`;

  if (!hasBorderWrapper(config)) {
    return button;
  }

  return `<div class="generated-button-border-wrapper">
  ${button.replaceAll("\n", "\n  ")}
</div>`;
}

function getReactContent(config) {
  if (config.state.loadingEnabled) {
    return `{loading ? (
          <span className="generated-button__loading generated-button__loading--${config.state.loadingType}">
            <span className="generated-button__loader" aria-hidden="true" />
            <span className="generated-button__loading-text">${escapeHtml(config.state.loadingText)}</span>
          </span>
        ) : (
          ${getReactIdleContent(config)}
        )}`;
  }

  return getReactIdleContent(config);
}

function getReactIdleContent(config) {
  const icon = config.content.iconEnabled
    ? `<span className="generated-button__icon">${escapeHtml(config.content.iconText)}</span>`
    : "";
  const text = config.content.textSwapEnabled
    ? `<>
            <span className="generated-button__text-default">{children}</span>
            <span className="generated-button__text-hover">${escapeHtml(config.content.hoverText)}</span>
          </>`
    : `<span className="generated-button__text">{children}</span>`;

  if (!config.content.iconEnabled) {
    return text;
  }

  return config.content.iconPosition === "left"
    ? `<>
            ${icon}
            ${text}
          </>`
    : `<>
            ${text}
            ${icon}
          </>`;
}

export function generateReactButtonJsx(config) {
  const contentClass = config.content.textSwapEnabled
    ? "generated-button__content generated-button__content--swap"
    : "generated-button__content";
  const layers = [
    needsFillLayer(config) ? `      <span className="generated-button__fill" />` : "",
    needsShineLayer(config) ? `      <span className="generated-button__shine" />` : "",
    needsHighlightLayer(config) ? `      <span className="generated-button__highlight" />` : "",
    `      <span className="${contentClass}">
        ${getReactContent(config)}
      </span>`,
  ].filter(Boolean);

  const button = `<button className="generated-button" disabled={disabled || loading} onClick={onClick}>
${layers.join("\n")}
    </button>`;

  if (!hasBorderWrapper(config)) {
    return button;
  }

  return `<div className="generated-button-border-wrapper">
    ${button.replaceAll("\n", "\n    ")}
  </div>`;
}

export function getReactDefaultChildren(config) {
  return escapeJsString(config.text);
}
