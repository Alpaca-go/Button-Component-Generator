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

  animateUi: {
    enabled: false,
    variant: "default",
    size: "default",
    copy: {
      enabled: false,
      copiedPreview: false,
      copyIcon: "Copy",
      successIcon: "Done",
      delay: 3000,
    },
    githubStars: {
      enabled: false,
      username: "imskyleen",
      repo: "animate-ui",
      value: "12.4k",
      logoText: "GitHub",
      starIcon: "*",
      particlesEnabled: true,
    },
    flip: {
      enabled: false,
      from: "top",
      frontText: "Front",
      backText: "Back",
      duration: 450,
      backBackgroundColor: "#e5e7eb",
      backTextColor: "#111827",
    },
    liquid: {
      enabled: false,
      delay: 300,
      fillHeight: 3,
      fillColor: "#0f172a",
      backgroundColor: "#e5e7eb",
    },
    ripple: {
      enabled: false,
      color: "rgba(255, 255, 255, 0.45)",
      scale: 10,
      duration: 600,
      preview: true,
    },
    iconParticles: {
      enabled: false,
      iconText: "+",
      particleColor: "#f59e0b",
      particleCount: 8,
    },
    themeToggler: {
      enabled: false,
      mode: "light",
      direction: "ltr",
      lightIcon: "Sun",
      darkIcon: "Moon",
      systemIcon: "System",
      revealColor: "#0f172a",
    },
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

    liquidGalaxy: {
      enabled: false,
      coreColor: "#030712",
      textHoverColor: "#facc15",
      glowColor: "rgba(250, 204, 21, 0.55)",
      haloColor: "rgba(255, 255, 255, 0.22)",
      orbitColorA: "#facc15",
      orbitColorB: "#fb923c",
      orbitColorC: "#ffffff",
      blur: 18,
      opacity: 0.82,
      speed: 4200,
      hoverSpeed: 1900,
      scale: 1.04,
      starText: "*",
      starEnabled: true,
      borderOpacity: 0.28,
      ringWidth: 2,
    },
  },
};
