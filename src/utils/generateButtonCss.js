import { getAnimateUiSize, getAnimateUiVariant } from "./animateUiButtonStyles";
import { defaultButtonConfig } from "../config/defaultButtonConfig";

function buildShadow(...shadows) {
  const visibleShadows = shadows.filter((shadow) => shadow && shadow !== "none");
  return visibleShadows.length > 0 ? visibleShadows.join(",\n    ") : "none";
}

function getBaseShadow(config) {
  const { shadow } = config;
  return shadow.enabled
    ? `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
    : "none";
}

function getHoverShadow(config) {
  const { shadow } = config;
  return shadow.enabled
    ? `${shadow.x}px ${shadow.hoverY}px ${shadow.hoverBlur}px ${shadow.spread}px ${shadow.color}`
    : "none";
}

function getGlowShadow(config) {
  const { glow } = config.effects;
  return glow.enabled ? `0 0 ${glow.blur}px ${glow.color}` : "none";
}

function getNeonShadow(config, hover = false) {
  const { neon } = config.effects;
  if (!neon.enabled) {
    return "none";
  }

  const intensity = hover ? neon.hoverIntensity : neon.intensity;
  return `0 0 ${Math.round(neon.blur * 0.38)}px color-mix(in srgb, ${neon.color} ${Math.round(
    intensity * 100
  )}%, transparent),
    0 0 ${neon.blur}px color-mix(in srgb, ${neon.color} ${Math.round(
    intensity * 65
  )}%, transparent)`;
}

function getThreeDShadow(config, pressed = false) {
  const { threeD } = config.effects;
  if (!threeD.enabled) {
    return "none";
  }

  const depth = pressed ? Math.max(threeD.depth - threeD.pressDepth, 0) : threeD.depth;
  return `0 ${depth}px 0 ${threeD.bottomColor}`;
}

function getBackground(config) {
  const { colors, effects, animateUi } = config;
  if (animateUi.enabled && animateUi.liquid.enabled) {
    return `linear-gradient(${animateUi.liquid.fillColor} 0 0) no-repeat calc(200% - var(--generated-liquid-width, -1%)) 100% / 200% var(--generated-liquid-height, ${animateUi.liquid.fillHeight}px), ${animateUi.liquid.backgroundColor}`;
  }

  if (animateUi.enabled) {
    return getAnimateUiVariant(animateUi.variant).background;
  }

  if (effects.glass.enabled) {
    return `rgba(255, 255, 255, ${effects.glass.opacity})`;
  }

  if (effects.gradient.animatedEnabled) {
    return `linear-gradient(${effects.gradient.direction}deg, ${effects.gradient.colors.join(", ")})`;
  }

  return colors.backgroundColor;
}

function getFillTransform(direction, active = false) {
  if (direction === "center") {
    return active ? "scale(1)" : "scale(0)";
  }

  if (direction === "top" || direction === "bottom") {
    return active ? "scaleY(1)" : "scaleY(0)";
  }

  if (direction === "diagonal") {
    return active ? "translateX(0) skewX(-18deg)" : "translateX(-120%) skewX(-18deg)";
  }

  return active ? "scaleX(1)" : "scaleX(0)";
}

function getFillOrigin(direction) {
  const origins = {
    left: "left center",
    right: "right center",
    top: "center top",
    bottom: "center bottom",
    center: "center",
    diagonal: "left center",
  };

  return origins[direction] || origins.left;
}

function getButtonAnimations(config) {
  const animations = [];

  if (config.effects.gradient.animatedEnabled) {
    animations.push(`buttonGradientMove ${config.effects.gradient.duration}ms ease infinite`);
  }

  if (config.effects.pulse.enabled) {
    animations.push(`pulseGlow ${config.effects.pulse.duration}ms ease-in-out infinite`);
  }

  return animations.length > 0 ? `  animation: ${animations.join(", ")};\n` : "";
}

function getLiquidGalaxyCss(config) {
  const liquidGalaxy = config.effects.liquidGalaxy ?? defaultButtonConfig.effects.liquidGalaxy;
  if (!liquidGalaxy.enabled) {
    return "";
  }

  return `
.generated-button__galaxy-halo {
  position: absolute;
  inset: -${Math.round(liquidGalaxy.blur * 1.6)}px;
  z-index: 0;
  border-radius: inherit;
  background:
    radial-gradient(circle at 18% 18%, ${liquidGalaxy.haloColor}, transparent 34%),
    radial-gradient(circle at 82% 72%, ${liquidGalaxy.glowColor}, transparent 36%),
    linear-gradient(135deg, ${liquidGalaxy.orbitColorA}, ${liquidGalaxy.orbitColorB}, ${liquidGalaxy.orbitColorC});
  filter: blur(${liquidGalaxy.blur}px);
  opacity: ${liquidGalaxy.opacity};
  pointer-events: none;
  animation: liquidGalaxyDrift ${liquidGalaxy.speed}ms linear infinite;
}

.generated-button__galaxy-liquid {
  position: absolute;
  inset: ${liquidGalaxy.ringWidth}px;
  z-index: 1;
  border-radius: inherit;
  background:
    radial-gradient(circle at 24% 50%, ${liquidGalaxy.orbitColorA} 0 7%, transparent 22%),
    radial-gradient(circle at 72% 34%, ${liquidGalaxy.orbitColorC} 0 6%, transparent 20%),
    radial-gradient(circle at 58% 78%, ${liquidGalaxy.orbitColorB} 0 8%, transparent 24%),
    conic-gradient(from 120deg, ${liquidGalaxy.orbitColorA}, ${liquidGalaxy.orbitColorB}, ${liquidGalaxy.orbitColorC}, ${liquidGalaxy.orbitColorA});
  filter: blur(${Math.max(liquidGalaxy.blur * 0.32, 2)}px);
  opacity: ${Math.min(liquidGalaxy.opacity + 0.08, 1)};
  mix-blend-mode: screen;
  pointer-events: none;
  animation: liquidGalaxySpin ${liquidGalaxy.speed}ms linear infinite;
}

.generated-button__galaxy-core {
  position: absolute;
  inset: ${liquidGalaxy.ringWidth + 1}px;
  z-index: 2;
  border-radius: inherit;
  background: ${liquidGalaxy.coreColor};
  pointer-events: none;
}

.generated-button__galaxy-label,
.generated-button__galaxy-star {
  position: relative;
  z-index: 4;
  transition:
    color ${config.interaction.transitionDuration}ms ease,
    transform ${config.interaction.transitionDuration}ms ease,
    opacity ${config.interaction.transitionDuration}ms ease;
}

.generated-button__galaxy-star {
  margin-left: ${config.content.iconGap}px;
  color: ${liquidGalaxy.orbitColorA};
  filter: drop-shadow(0 0 8px ${liquidGalaxy.glowColor});
}

.generated-button:hover:not(:disabled) .generated-button__galaxy-halo,
.generated-button:hover:not(:disabled) .generated-button__galaxy-liquid {
  animation-duration: ${liquidGalaxy.hoverSpeed}ms;
}

.generated-button:hover:not(:disabled) .generated-button__galaxy-label,
.generated-button:hover:not(:disabled) .generated-button__galaxy-star {
  color: ${liquidGalaxy.textHoverColor};
}

.generated-button:hover:not(:disabled) .generated-button__galaxy-star {
  transform: translateX(3px) rotate(18deg) scale(1.12);
}
`;
}

function getLoadingCss(config) {
  if (!config.state.loadingEnabled) {
    return "";
  }

  return `
.generated-button__loading {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.generated-button__loader {
  display: inline-block;
}

.generated-button__loading--spinner .generated-button__loader {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 999px;
  animation: buttonSpinner 750ms linear infinite;
}

.generated-button__loading--dots .generated-button__loader {
  width: 1.1em;
  height: 0.3em;
  border-radius: 999px;
  background: currentColor;
  box-shadow:
    -0.45em 0 0 currentColor,
    0.45em 0 0 currentColor;
  animation: buttonDots 900ms ease-in-out infinite;
}

.generated-button__loading--progress .generated-button__loader {
  width: 2.2em;
  height: 0.35em;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, currentColor 24%, transparent);
}

.generated-button__loading--progress .generated-button__loader::after {
  content: "";
  display: block;
  width: 45%;
  height: 100%;
  border-radius: inherit;
  background: currentColor;
  animation: buttonProgress 1100ms ease-in-out infinite;
}
`;
}

export function generateButtonCss(config) {
  const { size, typography, colors, border, shadow, interaction, content, state, effects, animateUi } = config;
  const liquidGalaxy = effects.liquidGalaxy ?? defaultButtonConfig.effects.liquidGalaxy;
  const liquidGalaxyEnabled = liquidGalaxy.enabled;
  const animateEnabled = animateUi.enabled;
  const animateVariant = getAnimateUiVariant(animateUi.variant);
  const animateSize = getAnimateUiSize(animateUi.size);
  const resolvedHeight = animateEnabled ? animateSize.height : size.height;
  const resolvedPaddingX = animateEnabled ? animateSize.paddingX : size.paddingX;
  const resolvedPaddingY = animateEnabled ? animateSize.paddingY : size.paddingY;
  const resolvedRadius = animateEnabled ? animateSize.radius : size.borderRadius;
  const resolvedFontSize = animateEnabled ? animateSize.fontSize : typography.fontSize;
  const widthLine = animateEnabled && animateSize.iconOnly
    ? `  width: ${resolvedHeight}px;\n`
    : size.widthMode === "fixed"
      ? `  width: ${size.width}px;\n`
      : "";
  const background = getBackground(config);
  const normalShadow = buildShadow(
    getThreeDShadow(config),
    liquidGalaxyEnabled
      ? `0 0 ${Math.round(liquidGalaxy.blur * 1.9)}px ${liquidGalaxy.glowColor}`
      : animateEnabled ? animateVariant.shadow : getBaseShadow(config),
    getGlowShadow(config),
    getNeonShadow(config)
  );
  const hoverShadow = buildShadow(
    getThreeDShadow(config),
    liquidGalaxyEnabled
      ? `0 0 ${Math.round(liquidGalaxy.blur * 2.4)}px ${liquidGalaxy.glowColor}`
      : animateEnabled ? animateVariant.shadow : getHoverShadow(config),
    getGlowShadow(config),
    getNeonShadow(config, true)
  );
  const activeDepth = effects.threeD.enabled ? effects.threeD.pressDepth : effects.press.depth;
  const activeScale = effects.press.enabled || effects.threeD.enabled ? effects.press.scale : 1;
  const activeShadow = buildShadow(
    getThreeDShadow(config, true),
    shadow.enabled
      ? `${shadow.x}px ${Math.max(shadow.y - activeDepth, 0)}px ${Math.max(
          shadow.blur - 8,
          0
        )}px ${shadow.spread}px ${shadow.color}`
      : "none",
    getGlowShadow(config),
    getNeonShadow(config, true)
  );
  const hoverBackgroundLine =
    colors.hoverEnabled && !effects.gradient.animatedEnabled && !effects.glass.enabled && !liquidGalaxyEnabled
      ? `  background: ${animateEnabled ? animateVariant.hoverBackground : colors.hoverBackgroundColor};\n`
      : "";
  const animationLine = getButtonAnimations(config);
  const borderColor = effects.glass.enabled
    ? `rgba(255, 255, 255, ${effects.glass.borderOpacity})`
    : liquidGalaxyEnabled
      ? `rgba(255, 255, 255, ${liquidGalaxy.borderOpacity})`
      : animateEnabled
        ? animateVariant.border
        : border.color;
  const buttonBorderWidth = effects.borderFlow.enabled ? 0 : liquidGalaxyEnabled ? liquidGalaxy.ringWidth : border.width;
  const liquidCss = animateEnabled && animateUi.liquid.enabled
    ? `
.generated-button {
  --generated-liquid-width: -1%;
  --generated-liquid-height: ${animateUi.liquid.fillHeight}px;
  transition:
    color ${animateUi.liquid.delay}ms ease,
    background ${animateUi.liquid.delay}ms ease,
    background-position ${animateUi.liquid.delay}ms ease,
    box-shadow ${interaction.transitionDuration}ms ease,
    transform ${interaction.transitionDuration}ms ease;
}

.generated-button:hover:not(:disabled) {
  --generated-liquid-width: 100%;
  --generated-liquid-height: 100%;
}
`
    : "";
  const rippleCss = animateEnabled && animateUi.ripple.enabled
    ? `
.generated-button__ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: ${animateUi.ripple.color};
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
}

.generated-button:active:not(:disabled) .generated-button__ripple,
.generated-button[data-ripple-preview="true"] .generated-button__ripple {
  animation: generatedRipple ${animateUi.ripple.duration}ms ease-out;
}
`
    : "";
  const flipCss = animateEnabled && animateUi.flip.enabled
    ? `
.generated-button {
  display: inline-grid;
  place-items: center;
  perspective: 1000px;
}

.generated-button__flip {
  grid-area: 1 / 1;
  position: relative;
  z-index: 4;
  display: inline-grid;
  place-items: center;
}

.generated-button__flip-face {
  grid-area: 1 / 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${resolvedHeight}px;
  padding: ${resolvedPaddingY}px ${resolvedPaddingX}px;
  border-radius: ${resolvedRadius}px;
  backface-visibility: hidden;
  transition:
    opacity ${animateUi.flip.duration}ms cubic-bezier(.2,.8,.2,1),
    transform ${animateUi.flip.duration}ms cubic-bezier(.2,.8,.2,1);
}

.generated-button__flip-back {
  color: ${animateUi.flip.backTextColor};
  background: ${animateUi.flip.backBackgroundColor};
  opacity: 0;
}

.generated-button:hover:not(:disabled) .generated-button__flip-front {
  opacity: 0;
}

.generated-button:hover:not(:disabled) .generated-button__flip-back {
  opacity: 1;
  transform: translate(0, 0) rotateX(0deg) rotateY(0deg);
}

.generated-button__flip--top .generated-button__flip-back {
  transform: translateY(-50%) rotateX(90deg);
}

.generated-button__flip--top:hover,
.generated-button:hover:not(:disabled) .generated-button__flip--top .generated-button__flip-front {
  transform: translateY(50%) rotateX(90deg);
}

.generated-button__flip--bottom .generated-button__flip-back {
  transform: translateY(50%) rotateX(90deg);
}

.generated-button:hover:not(:disabled) .generated-button__flip--bottom .generated-button__flip-front {
  transform: translateY(-50%) rotateX(90deg);
}

.generated-button__flip--left .generated-button__flip-back {
  transform: translateX(-50%) rotateY(90deg);
}

.generated-button:hover:not(:disabled) .generated-button__flip--left .generated-button__flip-front {
  transform: translateX(50%) rotateY(90deg);
}

.generated-button__flip--right .generated-button__flip-back {
  transform: translateX(50%) rotateY(90deg);
}

.generated-button:hover:not(:disabled) .generated-button__flip--right .generated-button__flip-front {
  transform: translateX(-50%) rotateY(90deg);
}
`
    : "";
  const copyCss = animateEnabled && animateUi.copy.enabled
    ? `
.generated-button__copy-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: copyIconPop 250ms ease;
}
`
    : "";
  const githubStarsCss = animateEnabled && animateUi.githubStars.enabled
    ? `
.generated-button__github-logo,
.generated-button__github-value,
.generated-button__github-star {
  display: inline-flex;
  align-items: center;
}

.generated-button__github-star {
  color: #eab308;
  filter: drop-shadow(0 0 8px rgba(234, 179, 8, 0.35));
}

.generated-button:hover:not(:disabled) .generated-button__github-star {
  animation: githubStarPop 560ms ease;
}
`
    : "";
  const particlesCss = animateEnabled && animateUi.iconParticles.enabled
    ? `
.generated-button__icon-core {
  position: relative;
  z-index: 4;
}

.generated-button__particles {
  position: absolute;
  inset: 50% auto auto 50%;
  z-index: 3;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: ${animateUi.iconParticles.particleColor};
  opacity: 0;
  pointer-events: none;
  box-shadow:
    0 -18px 0 ${animateUi.iconParticles.particleColor},
    14px -12px 0 ${animateUi.iconParticles.particleColor},
    18px 0 0 ${animateUi.iconParticles.particleColor},
    13px 13px 0 ${animateUi.iconParticles.particleColor},
    0 18px 0 ${animateUi.iconParticles.particleColor},
    -13px 13px 0 ${animateUi.iconParticles.particleColor},
    -18px 0 0 ${animateUi.iconParticles.particleColor},
    -14px -12px 0 ${animateUi.iconParticles.particleColor};
}

.generated-button:active:not(:disabled) .generated-button__particles,
.generated-button:hover:not(:disabled) .generated-button__particles {
  animation: iconParticles ${Math.max(animateUi.ripple.duration, 520)}ms ease-out;
}
`
    : "";
  const themeCss = animateEnabled && animateUi.themeToggler.enabled
    ? `
.generated-button__theme-reveal {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: ${animateUi.themeToggler.revealColor};
  pointer-events: none;
  transform: ${animateUi.themeToggler.direction === "ttb" || animateUi.themeToggler.direction === "btt" ? "scaleY(0)" : "scaleX(0)"};
  transform-origin: ${
    animateUi.themeToggler.direction === "rtl"
      ? "right center"
      : animateUi.themeToggler.direction === "ttb"
        ? "center top"
        : animateUi.themeToggler.direction === "btt"
          ? "center bottom"
          : "left center"
  };
  transition: transform ${interaction.transitionDuration + 180}ms ease;
}

.generated-button:hover:not(:disabled) .generated-button__theme-reveal {
  transform: scale(1);
}

.generated-button__theme-icon {
  position: relative;
  z-index: 4;
}
`
    : "";
  const fillHoverCss = effects.fillHover.enabled
    ? `
.generated-button__fill {
  position: absolute;
  inset: ${effects.fillHover.direction === "diagonal" ? "-30%" : "0"};
  z-index: 0;
  background: color-mix(in srgb, ${effects.fillHover.color} ${Math.round(
        effects.fillHover.opacity * 100
      )}%, transparent);
  pointer-events: none;
  transform: ${getFillTransform(effects.fillHover.direction)};
  transform-origin: ${getFillOrigin(effects.fillHover.direction)};
  transition: transform ${effects.fillHover.duration}ms ease;
}

.generated-button:hover:not(:disabled) .generated-button__fill {
  transform: ${getFillTransform(effects.fillHover.direction, true)};
}
`
    : "";
  const shineCss = effects.shine.enabled || effects.autoShine.enabled
    ? `
.generated-button__shine {
  position: absolute;
  top: 0;
  left: -80%;
  z-index: 1;
  width: ${effects.autoShine.enabled ? effects.autoShine.width : effects.shine.width}%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    ${effects.autoShine.enabled ? effects.autoShine.color : effects.shine.color},
    transparent
  );
  pointer-events: none;
  transform: skewX(${effects.autoShine.enabled ? effects.autoShine.angle : effects.shine.angle}deg);
  ${
    effects.autoShine.enabled
      ? `animation: autoShine ${effects.autoShine.duration}ms ease-in-out infinite;`
      : ""
  }
}

${
  effects.shine.enabled && !effects.autoShine.enabled
    ? `.generated-button:hover:not(:disabled) .generated-button__shine {
  animation: buttonShineMove ${effects.shine.duration}ms ease;
}
`
    : ""
}
`
    : "";
  const highlightCss = effects.glass.enabled && effects.glass.highlightEnabled
    ? `
.generated-button__highlight {
  position: absolute;
  inset: 1px;
  z-index: 2;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, ${effects.glass.highlightOpacity}),
    transparent
  );
  pointer-events: none;
}
`
    : "";
  const iconCss = content.iconEnabled
    ? `
.generated-button__icon {
  display: inline-flex;
  align-items: center;
  transition:
    opacity ${interaction.transitionDuration}ms ease,
    transform ${interaction.transitionDuration}ms ease;
  ${
    content.iconSlideEnabled
      ? `opacity: 0;
  transform: translateX(${content.iconPosition === "right" ? "-" : ""}${content.iconSlideDistance}px);`
      : ""
  }
}

.generated-button:hover:not(:disabled) .generated-button__icon {
  opacity: 1;
  transform: translateX(0);
}
`
    : "";
  const textSwapCss = content.textSwapEnabled
    ? `
.generated-button__content--swap {
  display: grid;
  min-width: max-content;
}

.generated-button__text-default,
.generated-button__text-hover {
  grid-area: 1 / 1;
  transition:
    opacity ${content.textSwapDuration}ms ease,
    transform ${content.textSwapDuration}ms ease;
}

.generated-button__text-hover {
  opacity: 0;
  transform: translateY(${content.textSwapAnimation === "slide-up" ? "70%" : "0"});
}

.generated-button:hover:not(:disabled) .generated-button__text-default {
  opacity: 0;
  transform: translateY(${content.textSwapAnimation === "slide-up" ? "-70%" : "0"});
}

.generated-button:hover:not(:disabled) .generated-button__text-hover {
  opacity: 1;
  transform: translateY(0);
}
`
    : "";
  const borderFlowCss = effects.borderFlow.enabled
    ? `
.generated-button-border-wrapper {
  display: inline-flex;
  padding: ${effects.borderFlow.width}px;
  border-radius: ${size.borderRadius + effects.borderFlow.width}px;
  background: linear-gradient(${effects.borderFlow.direction}deg, ${effects.borderFlow.colors.join(", ")});
  background-size: 300% 100%;
  animation: borderFlow ${effects.borderFlow.duration}ms linear infinite;
}
`
    : "";
  const drawBorderCss = effects.drawBorder.enabled
    ? `
.generated-button::before,
.generated-button::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 3;
  border-radius: inherit;
  pointer-events: none;
  transition: transform ${effects.drawBorder.duration}ms ease;
}

.generated-button::before {
  border-top: ${effects.drawBorder.width}px solid ${effects.drawBorder.color};
  border-bottom: ${effects.drawBorder.width}px solid ${effects.drawBorder.color};
  transform: scaleX(0);
}

.generated-button::after {
  border-left: ${effects.drawBorder.width}px solid ${effects.drawBorder.color};
  border-right: ${effects.drawBorder.width}px solid ${effects.drawBorder.color};
  transform: scaleY(0);
}

.generated-button:hover:not(:disabled)::before {
  transform: scaleX(1);
}

.generated-button:hover:not(:disabled)::after {
  transform: scaleY(1);
}
`
    : "";
  const gradientKeyframes = effects.gradient.animatedEnabled
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
  const pulseKeyframes = effects.pulse.enabled
    ? `
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: ${buildShadow(
      getThreeDShadow(config),
      getBaseShadow(config),
      `0 0 ${effects.pulse.minBlur}px ${effects.pulse.color}`,
      getNeonShadow(config)
    )};
  }

  50% {
    box-shadow: ${buildShadow(
      getThreeDShadow(config),
      getBaseShadow(config),
      `0 0 ${effects.pulse.maxBlur}px ${effects.pulse.color}`,
      getNeonShadow(config, true)
    )};
  }
}
`
    : "";
  const shineKeyframes = effects.shine.enabled
    ? `
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
  const autoShineKeyframes = effects.autoShine.enabled
    ? `
@keyframes autoShine {
  0% {
    left: -80%;
  }

  ${Math.round(effects.autoShine.delayRatio * 100)}%, 100% {
    left: 130%;
  }
}
`
    : "";
  const borderFlowKeyframes = effects.borderFlow.enabled
    ? `
@keyframes borderFlow {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 300% 50%;
  }
}
`
    : "";
  const loadingKeyframes = state.loadingEnabled
    ? `
@keyframes buttonSpinner {
  to {
    transform: rotate(360deg);
  }
}

@keyframes buttonDots {
  0%, 100% {
    opacity: 0.45;
    transform: translateY(0);
  }

  50% {
    opacity: 1;
    transform: translateY(-2px);
  }
}

@keyframes buttonProgress {
  0% {
    transform: translateX(-110%);
  }

  100% {
    transform: translateX(230%);
  }
}
`
    : "";

  return `${borderFlowCss}.generated-button {
${widthLine}  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${resolvedHeight}px;
  padding: ${resolvedPaddingY}px ${resolvedPaddingX}px;
  overflow: hidden;
  border: ${buttonBorderWidth}px solid ${borderColor};
  border-radius: ${resolvedRadius}px;
  color: ${liquidGalaxyEnabled ? colors.textColor : animateEnabled ? animateVariant.text : colors.textColor};
  background: ${liquidGalaxyEnabled ? liquidGalaxy.coreColor : background};
  background-size: ${effects.gradient.animatedEnabled ? "300% 100%" : "100% 100%"};
  box-shadow: ${normalShadow};
  backdrop-filter: ${effects.glass.enabled ? `blur(${effects.glass.blur}px)` : "none"};
  -webkit-backdrop-filter: ${effects.glass.enabled ? `blur(${effects.glass.blur}px)` : "none"};
  cursor: ${state.disabledEnabled ? "not-allowed" : interaction.cursor};
  font-size: ${resolvedFontSize}px;
  font-weight: ${typography.fontWeight};
  letter-spacing: ${typography.letterSpacing}px;
  line-height: 1;
  white-space: nowrap;
  text-decoration: ${animateEnabled && animateVariant.underline ? "underline" : "none"};
  text-underline-offset: 4px;
  transform: translateY(0) scale(1);
  transition:
    color ${interaction.transitionDuration}ms ease,
    background ${interaction.transitionDuration}ms ease,
    border-color ${interaction.transitionDuration}ms ease,
    box-shadow ${interaction.transitionDuration}ms ease,
    transform ${interaction.transitionDuration}ms ease;
${animationLine}}

.generated-button__content {
  position: relative;
  z-index: 4;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${content.iconEnabled ? content.iconGap : 0}px;
}

.generated-button:hover:not(:disabled) {
${hoverBackgroundLine}  color: ${liquidGalaxyEnabled ? liquidGalaxy.textHoverColor : animateEnabled ? animateVariant.hoverText : colors.hoverTextColor};
  box-shadow: ${hoverShadow};
  transform: translateY(0) scale(${liquidGalaxyEnabled ? liquidGalaxy.scale : interaction.hoverScale});
}

.generated-button:active:not(:disabled) {
  box-shadow: ${activeShadow};
  transform: translateY(${activeDepth}px) scale(${activeScale});
}

.generated-button:disabled {
  opacity: ${state.disabledOpacity};
  cursor: not-allowed;
}
${fillHoverCss}${shineCss}${highlightCss}${iconCss}${textSwapCss}${drawBorderCss}${getLoadingCss(
    config
  )}${getLiquidGalaxyCss(config)}${liquidCss}${rippleCss}${flipCss}${copyCss}${githubStarsCss}${particlesCss}${themeCss}${gradientKeyframes}${pulseKeyframes}${shineKeyframes}${autoShineKeyframes}${borderFlowKeyframes}${loadingKeyframes}${liquidGalaxyEnabled ? `
@keyframes liquidGalaxySpin {
  0% {
    transform: rotate(0deg) scale(1.05);
  }

  100% {
    transform: rotate(360deg) scale(1.05);
  }
}

@keyframes liquidGalaxyDrift {
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(180deg) scale(1.08);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
}
` : ""}${animateEnabled && animateUi.ripple.enabled ? `
@keyframes generatedRipple {
  0% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(${animateUi.ripple.scale});
  }
}
` : ""}${animateEnabled && animateUi.copy.enabled ? `
@keyframes copyIconPop {
  0% {
    opacity: 0.45;
    filter: blur(4px);
    transform: scale(0.4);
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }
}
` : ""}${animateEnabled && animateUi.githubStars.enabled ? `
@keyframes githubStarPop {
  0% {
    transform: scale(0.8) rotate(-10deg);
  }

  50% {
    transform: scale(1.35) rotate(12deg);
  }

  100% {
    transform: scale(1) rotate(0);
  }
}
` : ""}${animateEnabled && animateUi.iconParticles.enabled ? `
@keyframes iconParticles {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.2);
  }

  35% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.6);
  }
}
` : ""}`;
}
