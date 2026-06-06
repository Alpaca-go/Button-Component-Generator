function buildShadow(...shadows) {
  const visibleShadows = shadows.filter((shadow) => shadow && shadow !== "none");
  return visibleShadows.length > 0 ? visibleShadows.join(",\n    ") : "none";
}

function getBaseShadow(shadow) {
  return shadow.enabled
    ? `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
    : "none";
}

function getHoverShadow(shadow) {
  return shadow.enabled
    ? `${shadow.x}px ${shadow.hoverY}px ${shadow.hoverBlur}px ${shadow.spread}px ${shadow.color}`
    : "none";
}

function getPressedShadow(shadow, effects) {
  return shadow.enabled
    ? `${shadow.x}px ${Math.max(shadow.y - effects.pressDepth, 0)}px ${Math.max(
        shadow.blur - 8,
        0
      )}px ${shadow.spread}px ${shadow.color}`
    : "none";
}

function getGlowShadow(effects) {
  return effects.glowEnabled ? `0 0 ${effects.glowBlur}px ${effects.glowColor}` : "none";
}

function getBackground(colors, effects) {
  if (effects.animatedGradientEnabled) {
    return `linear-gradient(${effects.gradientDirection}deg, ${effects.gradientColors.join(", ")})`;
  }

  return colors.backgroundColor;
}

export function generateButtonCss(config) {
  const { size, typography, colors, border, shadow, interaction, effects } = config;
  const widthLine = size.widthMode === "fixed" ? `  width: ${size.width}px;\n` : "";
  const background = getBackground(colors, effects);
  const baseShadow = getBaseShadow(shadow);
  const hoverShadow = getHoverShadow(shadow);
  const pressedShadow = getPressedShadow(shadow, effects);
  const glowShadow = getGlowShadow(effects);
  const normalShadow = buildShadow(baseShadow, glowShadow);
  const hoverBoxShadow = buildShadow(hoverShadow, glowShadow);
  const activeBoxShadow = buildShadow(pressedShadow, glowShadow);
  const backgroundSize = effects.animatedGradientEnabled ? "300% 100%" : "100% 100%";
  const gradientAnimation = effects.animatedGradientEnabled
    ? `  animation: buttonGradientMove ${effects.gradientDuration}ms ease infinite;\n`
    : "";
  const hoverBackgroundLine =
    colors.hoverEnabled && !effects.animatedGradientEnabled
      ? `  background: ${colors.hoverBackgroundColor};\n`
      : "";
  const hoverBlock = colors.hoverEnabled
    ? `
.generated-button:hover:not(:disabled) {
${hoverBackgroundLine}  color: ${colors.hoverTextColor};
  box-shadow: ${hoverBoxShadow};
  transform: translateY(0) scale(${interaction.hoverScale});
}
`
    : "";
  const pressBlock = effects.pressEnabled
    ? `
.generated-button:active:not(:disabled) {
  box-shadow: ${activeBoxShadow};
  transform: translateY(${effects.pressDepth}px) scale(${effects.pressScale});
}
`
    : "";
  const shineCss = effects.shineEnabled
    ? `
.generated-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -80%;
  z-index: 0;
  width: ${effects.shineWidth}%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    ${effects.shineColor},
    transparent
  );
  pointer-events: none;
  transform: skewX(${effects.shineAngle}deg);
}

.generated-button:hover:not(:disabled)::before {
  animation: buttonShineMove ${effects.shineDuration}ms ease;
}

@keyframes buttonShineMove {
  0% {
    left: -80%;
  }

  100% {
    left: 130%;
  }
}
`
    : "";
  const gradientKeyframes = effects.animatedGradientEnabled
    ? `
@keyframes buttonGradientMove {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
`
    : "";

  return `.generated-button {
${widthLine}  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${size.height}px;
  padding: ${size.paddingY}px ${size.paddingX}px;
  overflow: hidden;
  border: ${border.borderWidth}px solid ${border.borderColor};
  border-radius: ${size.borderRadius}px;
  color: ${colors.textColor};
  background: ${background};
  background-size: ${backgroundSize};
  box-shadow: ${normalShadow};
  cursor: ${interaction.disabledEnabled ? "not-allowed" : interaction.cursor};
  font-size: ${typography.fontSize}px;
  font-weight: ${typography.fontWeight};
  letter-spacing: ${typography.letterSpacing}px;
  line-height: 1;
  text-decoration: none;
  transform: translateY(0) scale(1);
  transition:
    color ${interaction.transitionDuration}ms ease,
    background ${interaction.transitionDuration}ms ease,
    box-shadow ${interaction.transitionDuration}ms ease,
    transform ${interaction.transitionDuration}ms ease;
${gradientAnimation}}

.generated-button__content {
  position: relative;
  z-index: 1;
}
${hoverBlock}${pressBlock}
.generated-button:disabled {
  opacity: ${interaction.disabledOpacity};
  cursor: not-allowed;
}
${shineCss}${gradientKeyframes}`;
}
