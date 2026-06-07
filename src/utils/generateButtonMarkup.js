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

function isLiquidGalaxyEnabled(config) {
  return Boolean(config.effects?.liquidGalaxy?.enabled);
}

function isAnimateEnabled(config, key) {
  return Boolean(config.animateUi?.enabled && config.animateUi?.[key]?.enabled);
}

function getThemeIcon(config) {
  const { themeToggler } = config.animateUi;
  if (themeToggler.mode === "dark") {
    return themeToggler.darkIcon;
  }

  if (themeToggler.mode === "system") {
    return themeToggler.systemIcon;
  }

  return themeToggler.lightIcon;
}

function getContentHtml(config, loading = config.state.loadingPreview) {
  if (isLiquidGalaxyEnabled(config)) {
    const star = config.effects.liquidGalaxy.starEnabled
      ? `<span class="generated-button__galaxy-star" aria-hidden="true">${escapeHtml(
          config.effects.liquidGalaxy.starText
        )}</span>`
      : "";

    return `<span class="generated-button__galaxy-label">${escapeHtml(config.text)}</span>
      ${star}`;
  }

  if (isAnimateEnabled(config, "copy")) {
    const { copy } = config.animateUi;
    return `<span class="generated-button__copy-icon" aria-hidden="true">${escapeHtml(
      copy.copiedPreview ? copy.successIcon : copy.copyIcon
    )}</span>`;
  }

  if (isAnimateEnabled(config, "githubStars")) {
    const { githubStars } = config.animateUi;
    return `<span class="generated-button__github-logo">${escapeHtml(githubStars.logoText)}</span>
      <span class="generated-button__github-value">${escapeHtml(githubStars.value)}</span>
      <span class="generated-button__github-star" aria-hidden="true">${escapeHtml(
        githubStars.starIcon
      )}</span>`;
  }

  if (isAnimateEnabled(config, "iconParticles")) {
    return `<span class="generated-button__icon-core">${escapeHtml(
      config.animateUi.iconParticles.iconText
    )}</span>
      <span class="generated-button__particles" aria-hidden="true"></span>`;
  }

  if (isAnimateEnabled(config, "themeToggler")) {
    return `<span class="generated-button__theme-icon">${escapeHtml(getThemeIcon(config))}</span>`;
  }

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
  const contentClass = config.content.textSwapEnabled && !isAnimateEnabled(config, "flip")
    ? "generated-button__content generated-button__content--swap"
    : "generated-button__content";
  const flipLayer = isAnimateEnabled(config, "flip")
    ? `  <span class="generated-button__flip generated-button__flip--${config.animateUi.flip.from}">
    <span class="generated-button__flip-face generated-button__flip-front">${escapeHtml(
      config.animateUi.flip.frontText
    )}</span>
    <span class="generated-button__flip-face generated-button__flip-back">${escapeHtml(
      config.animateUi.flip.backText
    )}</span>
  </span>`
    : "";
  const layers = [
    isLiquidGalaxyEnabled(config)
      ? `  <span class="generated-button__galaxy-halo" aria-hidden="true"></span>
  <span class="generated-button__galaxy-liquid" aria-hidden="true"></span>
  <span class="generated-button__galaxy-core" aria-hidden="true"></span>`
      : "",
    needsFillLayer(config) ? `  <span class="generated-button__fill"></span>` : "",
    needsShineLayer(config) ? `  <span class="generated-button__shine"></span>` : "",
    needsHighlightLayer(config) ? `  <span class="generated-button__highlight"></span>` : "",
    isAnimateEnabled(config, "themeToggler")
      ? `  <span class="generated-button__theme-reveal" aria-hidden="true"></span>`
      : "",
    config.animateUi?.enabled && config.animateUi.ripple.enabled
      ? `  <span class="generated-button__ripple" aria-hidden="true"></span>`
      : "",
    flipLayer,
    !isAnimateEnabled(config, "flip")
      ? `  <span class="${contentClass}">
      ${getContentHtml(config, loading)}
  </span>`
      : "",
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
  if (isLiquidGalaxyEnabled(config)) {
    const star = config.effects.liquidGalaxy.starEnabled
      ? `<span className="generated-button__galaxy-star" aria-hidden="true">${escapeHtml(
          config.effects.liquidGalaxy.starText
        )}</span>`
      : "";

    return `<>
          <span className="generated-button__galaxy-label">{children}</span>
          ${star}
        </>`;
  }

  if (isAnimateEnabled(config, "copy")) {
    const { copy } = config.animateUi;
    return `<span className="generated-button__copy-icon" aria-hidden="true">{copied ? "${escapeJsString(
      copy.successIcon
    )}" : "${escapeJsString(copy.copyIcon)}"}</span>`;
  }

  if (isAnimateEnabled(config, "githubStars")) {
    const { githubStars } = config.animateUi;
    return `<>
          <span className="generated-button__github-logo">${escapeHtml(githubStars.logoText)}</span>
          <span className="generated-button__github-value">${escapeHtml(githubStars.value)}</span>
          <span className="generated-button__github-star" aria-hidden="true">${escapeHtml(
            githubStars.starIcon
          )}</span>
        </>`;
  }

  if (isAnimateEnabled(config, "iconParticles")) {
    return `<>
          <span className="generated-button__icon-core">${escapeHtml(
            config.animateUi.iconParticles.iconText
          )}</span>
          <span className="generated-button__particles" aria-hidden="true" />
        </>`;
  }

  if (isAnimateEnabled(config, "themeToggler")) {
    return `<>
          <span className="generated-button__theme-icon">${escapeHtml(getThemeIcon(config))}</span>
        </>`;
  }

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
  const contentClass = config.content.textSwapEnabled && !isAnimateEnabled(config, "flip")
    ? "generated-button__content generated-button__content--swap"
    : "generated-button__content";
  const flipLayer = isAnimateEnabled(config, "flip")
    ? `      <span className="generated-button__flip generated-button__flip--${config.animateUi.flip.from}">
        <span className="generated-button__flip-face generated-button__flip-front">${escapeHtml(
          config.animateUi.flip.frontText
        )}</span>
        <span className="generated-button__flip-face generated-button__flip-back">${escapeHtml(
          config.animateUi.flip.backText
        )}</span>
      </span>`
    : "";
  const layers = [
    isLiquidGalaxyEnabled(config)
      ? `      <span className="generated-button__galaxy-halo" aria-hidden="true" />
      <span className="generated-button__galaxy-liquid" aria-hidden="true" />
      <span className="generated-button__galaxy-core" aria-hidden="true" />`
      : "",
    needsFillLayer(config) ? `      <span className="generated-button__fill" />` : "",
    needsShineLayer(config) ? `      <span className="generated-button__shine" />` : "",
    needsHighlightLayer(config) ? `      <span className="generated-button__highlight" />` : "",
    isAnimateEnabled(config, "themeToggler")
      ? `      <span className="generated-button__theme-reveal" aria-hidden="true" />`
      : "",
    config.animateUi?.enabled && config.animateUi.ripple.enabled
      ? `      <span className="generated-button__ripple" aria-hidden="true" />`
      : "",
    flipLayer,
    !isAnimateEnabled(config, "flip")
      ? `      <span className="${contentClass}">
        ${getReactContent(config)}
      </span>`
      : "",
  ].filter(Boolean);

  const buttonOnClick = isAnimateEnabled(config, "copy")
    ? `onClick={(event) => {
        onClick?.(event);
        onCopiedChange?.(!copied);
      }}`
    : "onClick={onClick}";
  const button = `<button className="generated-button" disabled={disabled || loading} ${buttonOnClick}>
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

export function getReactExtraProps(config) {
  return isAnimateEnabled(config, "copy")
    ? `  copied = false,
  onCopiedChange,`
    : "";
}
