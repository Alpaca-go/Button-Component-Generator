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

function isSparkAuraEnabled(config) {
  return Boolean(config.effects?.sparkAura?.enabled);
}

function isSparkAuraParticlesEnabled(config) {
  return Boolean(isSparkAuraEnabled(config) && config.effects?.sparkAura?.particleEnabled);
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

function getSparkAuraIconHtml(classNameAttribute = 'class="generated-button__sparkle-icon"') {
  return `<svg ${classNameAttribute} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" />
        <path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" />
        <path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" />
      </svg>`;
}

function getSparkParticleVars(index, count, config) {
  const sparkAura = config.effects.sparkAura;
  const spread = sparkAura.particleSpread;
  const center = 50;
  const angle = (Math.PI * 2 * index) / Math.max(count, 1);
  const orbit = 26 + (index % 4) * 10 + (spread - 120) * 0.08;
  const x = center + Math.cos(angle) * orbit;
  const y = center + Math.sin(angle) * orbit;
  const sizeRatio = count <= 1 ? 0 : index / (count - 1);
  const size = sparkAura.particleSizeMin + (sparkAura.particleSizeMax - sparkAura.particleSizeMin) * sizeRatio;
  const alpha = sparkAura.particleOpacityMin + (sparkAura.particleOpacityMax - sparkAura.particleOpacityMin) * (1 - ((index % 5) / 4));
  const duration = sparkAura.particleDurationMin + (sparkAura.particleDurationMax - sparkAura.particleDurationMin) * ((index % 7) / 6);
  const delay = ((index % 9) / 9) * duration;
  const originAngle = angle + Math.PI / 3;
  const originRadius = orbit + 40;
  const originX = center + Math.cos(originAngle) * originRadius;
  const originY = center + Math.sin(originAngle) * originRadius;

  return {
    x: x.toFixed(2),
    y: y.toFixed(2),
    size: size.toFixed(2),
    alpha: alpha.toFixed(2),
    duration: duration.toFixed(2),
    delay: delay.toFixed(2),
    originX: `${originX.toFixed(2)}%`,
    originY: `${originY.toFixed(2)}%`,
  };
}

function getSparkParticleStyleString(vars) {
  return `--x:${vars.x};--y:${vars.y};--size:${vars.size};--alpha:${vars.alpha};--duration:${vars.duration};--delay:${vars.delay};--origin-x:${vars.originX};--origin-y:${vars.originY};`;
}

function getSparkParticleHtml(config, classNameAttribute = 'class="generated-button__spark-particle"') {
  if (!isSparkAuraParticlesEnabled(config)) {
    return "";
  }

  return Array.from({ length: config.effects.sparkAura.particleCount }, (_entry, index) => {
    const style = getSparkParticleStyleString(
      getSparkParticleVars(index, config.effects.sparkAura.particleCount, config)
    );

    return `    <span ${classNameAttribute} style="${style}">\n      ${getSparkAuraIconHtml('class="generated-button__spark-particle-icon"')}\n    </span>`;
  }).join("\n");
}

function getSparkParticleStyleObjectString(vars) {
  return `{{ "--x": "${vars.x}", "--y": "${vars.y}", "--size": "${vars.size}", "--alpha": "${vars.alpha}", "--duration": "${vars.duration}", "--delay": "${vars.delay}", "--origin-x": "${vars.originX}", "--origin-y": "${vars.originY}" }}`;
}

function getSparkParticleReactJsx(config) {
  if (!isSparkAuraParticlesEnabled(config)) {
    return "";
  }

  return Array.from({ length: config.effects.sparkAura.particleCount }, (_entry, index) => {
    const vars = getSparkParticleVars(index, config.effects.sparkAura.particleCount, config);
    return `      <span className="generated-button__spark-particle" style=${getSparkParticleStyleObjectString(vars)}>
        ${getSparkAuraIconHtml('className="generated-button__spark-particle-icon"')}
      </span>`;
  }).join("\n");
}

function getContentHtml(config, loading = config.state.loadingPreview) {
  if (config.state.loadingEnabled && loading) {
    return `<span class="generated-button__loading generated-button__loading--${config.state.loadingType}">
      <span class="generated-button__loader" aria-hidden="true"></span>
      <span class="generated-button__loading-text">${escapeHtml(config.state.loadingText)}</span>
    </span>`;
  }

  if (isSparkAuraEnabled(config)) {
    return `${getSparkAuraIconHtml()}
      <span class="generated-button__spark-text">${escapeHtml(config.text)}</span>`;
  }

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
  const contentClass = config.content.textSwapEnabled && !isAnimateEnabled(config, "flip") && !isSparkAuraEnabled(config)
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
    isSparkAuraEnabled(config)
      ? `  <span class="generated-button__spark-sweep" aria-hidden="true"></span>
  <span class="generated-button__spark-backdrop" aria-hidden="true"></span>`
      : "",
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
  const wrappedButton = hasBorderWrapper(config)
    ? `<div class="generated-button-border-wrapper">
  ${button.replaceAll("\n", "\n  ")}
</div>`
    : button;

  if (!isSparkAuraEnabled(config)) {
    return wrappedButton;
  }

  const particleMarkup = getSparkParticleHtml(config);

  return `<div class="generated-button-spark-wrap">
  ${wrappedButton.replaceAll("\n", "\n  ")}
  <span class="generated-button__spark-bodydrop" aria-hidden="true"></span>
  ${isSparkAuraParticlesEnabled(config)
    ? `<span class="generated-button__spark-particles" aria-hidden="true">
${particleMarkup}
  </span>`
    : ""}
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

  if (isSparkAuraEnabled(config)) {
    return `<>
          ${getSparkAuraIconHtml('className="generated-button__sparkle-icon"')}
          <span className="generated-button__spark-text">{children}</span>
        </>`;
  }

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
  const contentClass = config.content.textSwapEnabled && !isAnimateEnabled(config, "flip") && !isSparkAuraEnabled(config)
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
    isSparkAuraEnabled(config)
      ? `      <span className="generated-button__spark-sweep" aria-hidden="true" />
      <span className="generated-button__spark-backdrop" aria-hidden="true" />`
      : "",
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
  const wrappedButton = hasBorderWrapper(config)
    ? `<div className="generated-button-border-wrapper">
    ${button.replaceAll("\n", "\n    ")}
  </div>`
    : button;

  if (!isSparkAuraEnabled(config)) {
    return wrappedButton;
  }

  const particles = getSparkParticleReactJsx(config);

  return `<div className="generated-button-spark-wrap">
    ${wrappedButton.replaceAll("\n", "\n    ")}
    <span className="generated-button__spark-bodydrop" aria-hidden="true" />
${isSparkAuraParticlesEnabled(config)
    ? `    <span className="generated-button__spark-particles" aria-hidden="true">
${particles}
    </span>`
    : ""}
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
