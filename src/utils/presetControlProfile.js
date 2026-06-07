const optionalOffPatch = {
  content: {
    iconEnabled: false,
    textSwapEnabled: false,
  },
  state: {
    loadingEnabled: false,
    loadingPreview: false,
  },
  animateUi: {
    enabled: false,
    copy: { enabled: false },
    githubStars: { enabled: false },
    flip: { enabled: false },
    liquid: { enabled: false },
    ripple: { enabled: false },
    iconParticles: { enabled: false },
    themeToggler: { enabled: false },
  },
  effects: {
    press: { enabled: false },
    shine: { enabled: false },
    autoShine: { enabled: false },
    gradient: { animatedEnabled: false },
    borderFlow: { enabled: false },
    neon: { enabled: false },
    glow: { enabled: false },
    glass: { enabled: false },
    fillHover: { enabled: false },
    pulse: { enabled: false },
    threeD: { enabled: false },
    drawBorder: { enabled: false },
    liquidGalaxy: { enabled: false },
  },
};

function hasEnabled(value) {
  return Boolean(value?.enabled);
}

export function getPresetBasePatch() {
  return optionalOffPatch;
}

export function getPresetControlProfile(preset) {
  if (!preset) {
    return null;
  }

  const config = preset.config || {};
  const effects = config.effects || {};
  const animateUi = config.animateUi || {};
  const content = config.content || {};
  const state = config.state || {};
  const tags = new Set((preset.tags || []).map((tag) => tag.toLowerCase()));
  const category = preset.category?.toLowerCase() || "";
  const isAnimatePreset = Boolean(
    animateUi.enabled || tags.has("animate-ui") || preset.sourceName === "Animate UI Buttons"
  );

  return {
    icon: Boolean(content.iconEnabled || tags.has("icon")),
    textSwap: Boolean(content.textSwapEnabled || tags.has("text-swap")),
    gradient: Boolean(effects.gradient?.animatedEnabled || tags.has("gradient")),
    glass: Boolean(hasEnabled(effects.glass) || tags.has("glass")),
    borderFlow: Boolean(hasEnabled(effects.borderFlow) || tags.has("border")),
    drawBorder: Boolean(hasEnabled(effects.drawBorder) || tags.has("draw-border")),
    shine: Boolean(hasEnabled(effects.shine) || tags.has("shine")),
    fillHover: Boolean(hasEnabled(effects.fillHover) || tags.has("fill")),
    press: Boolean(hasEnabled(effects.press) || tags.has("press")),
    threeD: Boolean(hasEnabled(effects.threeD) || tags.has("3d")),
    neon: Boolean(hasEnabled(effects.neon) || tags.has("neon")),
    glow: Boolean(hasEnabled(effects.glow) || tags.has("glow")),
    pulse: Boolean(hasEnabled(effects.pulse) || tags.has("pulse")),
    autoShine: Boolean(hasEnabled(effects.autoShine)),
    liquidGalaxy: Boolean(hasEnabled(effects.liquidGalaxy) || category === "liquid galaxy"),
    animateBase: isAnimatePreset,
    animateCopy: Boolean(hasEnabled(animateUi.copy) || (isAnimatePreset && tags.has("copy"))),
    animateStars: Boolean(hasEnabled(animateUi.githubStars) || (isAnimatePreset && tags.has("stars"))),
    animateFlip: Boolean(hasEnabled(animateUi.flip) || (isAnimatePreset && tags.has("flip"))),
    animateLiquid: Boolean(hasEnabled(animateUi.liquid) || (isAnimatePreset && tags.has("liquid"))),
    animateRipple: Boolean(hasEnabled(animateUi.ripple) || (isAnimatePreset && tags.has("ripple"))),
    animateParticles: Boolean(hasEnabled(animateUi.iconParticles) || (isAnimatePreset && tags.has("particles"))),
    animateTheme: Boolean(hasEnabled(animateUi.themeToggler) || (isAnimatePreset && tags.has("theme"))),
    loading: Boolean(state.loadingEnabled || category === "loading" || tags.has("loading")),
  };
}
