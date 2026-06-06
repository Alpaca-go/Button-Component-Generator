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
    backgroundType: "solid",
    backgroundColor: "#7c3aed",
    hoverEnabled: true,
    hoverBackgroundColor: "#6d28d9",
    hoverTextColor: "#ffffff",
  },

  border: {
    borderWidth: 1,
    borderColor: "#8b5cf6",
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
    disabledEnabled: false,
    disabledOpacity: 0.5,
    cursor: "pointer",
  },

  effects: {
    pressEnabled: true,
    pressDepth: 4,
    pressScale: 0.98,

    shineEnabled: true,
    shineTrigger: "hover",
    shineColor: "rgba(255, 255, 255, 0.55)",
    shineWidth: 60,
    shineDuration: 650,
    shineAngle: -20,

    animatedGradientEnabled: false,
    gradientColors: ["#7c3aed", "#2563eb", "#ec4899", "#7c3aed"],
    gradientDuration: 4000,
    gradientDirection: 90,

    glowEnabled: false,
    glowColor: "rgba(124, 58, 237, 0.45)",
    glowBlur: 32,
  },
};
