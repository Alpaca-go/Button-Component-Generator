export const defaultButtonConfig = {
  text: "Get Started",

  size: {
    widthMode: "auto",
    width: 160,
    height: 48,
    paddingX: 24,
    paddingY: 12,
    borderRadius: 999,
  },

  typography: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0,
  },

  colors: {
    textColor: "#ffffff",
    backgroundColor: "#7c3aed",
    hoverEnabled: true,
    hoverTextColor: "#ffffff",
    hoverBackgroundColor: "#6d28d9",
  },

  border: {
    width: 1,
    color: "#8b5cf6",
  },

  shadow: {
    enabled: true,
    x: 0,
    y: 10,
    blur: 24,
    spread: 0,
    color: "rgba(124, 58, 237, 0.35)",
    hoverY: 14,
    hoverBlur: 32,
  },

  interaction: {
    transitionDuration: 200,
    hoverScale: 1.04,
    cursor: "pointer",
  },

  content: {
    iconEnabled: false,
    iconText: "->",
    iconPosition: "right",
    iconGap: 8,
    iconSlideEnabled: true,
    iconSlideDistance: 8,

    textSwapEnabled: false,
    hoverText: "Let's Go",
    textSwapAnimation: "slide-up",
    textSwapDuration: 250,
  },

  state: {
    disabledEnabled: false,
    disabledOpacity: 0.5,

    loadingEnabled: false,
    loadingPreview: false,
    loadingType: "spinner",
    loadingText: "Loading...",
  },

  effects: {
    press: {
      enabled: true,
      depth: 4,
      scale: 0.98,
    },

    shine: {
      enabled: true,
      trigger: "hover",
      color: "rgba(255, 255, 255, 0.55)",
      width: 60,
      duration: 650,
      angle: -20,
    },

    autoShine: {
      enabled: false,
      color: "rgba(255, 255, 255, 0.55)",
      width: 60,
      duration: 2800,
      angle: -20,
      delayRatio: 0.45,
    },

    gradient: {
      animatedEnabled: false,
      colors: ["#7c3aed", "#2563eb", "#ec4899", "#7c3aed"],
      duration: 4000,
      direction: 90,
    },

    borderFlow: {
      enabled: false,
      colors: ["#7c3aed", "#06b6d4", "#ec4899", "#7c3aed"],
      duration: 4000,
      width: 2,
      direction: 90,
    },

    neon: {
      enabled: false,
      color: "rgba(124, 58, 237, 0.6)",
      blur: 32,
      intensity: 0.6,
      hoverIntensity: 0.9,
    },

    glow: {
      enabled: false,
      color: "rgba(124, 58, 237, 0.45)",
      blur: 32,
    },

    glass: {
      enabled: false,
      opacity: 0.12,
      blur: 16,
      borderOpacity: 0.22,
      highlightEnabled: true,
      highlightOpacity: 0.22,
    },

    fillHover: {
      enabled: false,
      direction: "left",
      color: "#ffffff",
      duration: 400,
      opacity: 1,
    },

    pulse: {
      enabled: false,
      color: "rgba(124, 58, 237, 0.6)",
      duration: 2400,
      minBlur: 12,
      maxBlur: 36,
    },

    threeD: {
      enabled: false,
      depth: 6,
      bottomColor: "#4c1d95",
      pressDepth: 6,
    },

    drawBorder: {
      enabled: false,
      color: "#ffffff",
      duration: 500,
      width: 1,
    },
  },
};
