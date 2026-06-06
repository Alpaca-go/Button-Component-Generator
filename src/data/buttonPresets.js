export const buttonPresets = [
  {
    name: "AI Gradient",
    description: "Flowing violet, blue, and pink gradient for AI actions.",
    config: {
      text: "Generate",
      colors: {
        textColor: "#ffffff",
        backgroundColor: "#7c3aed",
        hoverBackgroundColor: "#6d28d9",
      },
      border: {
        color: "rgba(255, 255, 255, 0.28)",
      },
      shadow: {
        enabled: true,
        y: 12,
        blur: 28,
        color: "rgba(124, 58, 237, 0.34)",
        hoverY: 16,
        hoverBlur: 36,
      },
      effects: {
        gradient: {
          animatedEnabled: true,
          colors: ["#7c3aed", "#2563eb", "#ec4899", "#7c3aed"],
          duration: 4000,
          direction: 90,
        },
        shine: {
          enabled: true,
          color: "rgba(255, 255, 255, 0.45)",
        },
        glow: {
          enabled: true,
          color: "rgba(124, 58, 237, 0.35)",
          blur: 28,
        },
      },
    },
  },
  {
    name: "Neon Glow",
    description: "Bright cyan neon treatment for dark product surfaces.",
    config: {
      text: "Activate",
      colors: {
        backgroundColor: "#061016",
        textColor: "#a5f3fc",
        hoverBackgroundColor: "#083344",
        hoverTextColor: "#ecfeff",
      },
      border: {
        color: "#22d3ee",
      },
      shadow: {
        enabled: false,
      },
      effects: {
        neon: {
          enabled: true,
          color: "rgba(34, 211, 238, 0.7)",
          blur: 42,
          intensity: 0.65,
          hoverIntensity: 0.95,
        },
        shine: {
          enabled: true,
          color: "rgba(165, 243, 252, 0.48)",
        },
      },
    },
  },
  {
    name: "Liquid Glass",
    description: "Translucent glass surface with highlight and blur.",
    config: {
      text: "Explore",
      colors: {
        textColor: "#ffffff",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        hoverBackgroundColor: "rgba(255, 255, 255, 0.18)",
      },
      border: {
        width: 1,
        color: "rgba(255, 255, 255, 0.22)",
      },
      shadow: {
        enabled: true,
        y: 16,
        blur: 38,
        color: "rgba(15, 23, 42, 0.32)",
      },
      effects: {
        glass: {
          enabled: true,
          opacity: 0.12,
          blur: 18,
          borderOpacity: 0.24,
          highlightEnabled: true,
          highlightOpacity: 0.24,
        },
        shine: {
          enabled: true,
          color: "rgba(255, 255, 255, 0.38)",
        },
      },
    },
  },
  {
    name: "Cyber Border",
    description: "Animated gradient border with a sci-fi glow.",
    config: {
      text: "Connect",
      colors: {
        textColor: "#ffffff",
        backgroundColor: "#0f1020",
        hoverBackgroundColor: "#111827",
      },
      effects: {
        borderFlow: {
          enabled: true,
          colors: ["#7c3aed", "#06b6d4", "#ec4899", "#7c3aed"],
          duration: 3600,
          width: 2,
          direction: 90,
        },
        neon: {
          enabled: true,
          color: "rgba(6, 182, 212, 0.45)",
          blur: 28,
          intensity: 0.5,
          hoverIntensity: 0.85,
        },
      },
    },
  },
  {
    name: "Game Press",
    description: "Chunky 3D button with tactile click depth.",
    config: {
      text: "Press Start",
      colors: {
        backgroundColor: "#f59e0b",
        textColor: "#211400",
        hoverBackgroundColor: "#fbbf24",
        hoverTextColor: "#211400",
      },
      border: {
        color: "#fcd34d",
      },
      typography: {
        fontWeight: 800,
      },
      shadow: {
        enabled: true,
        y: 10,
        blur: 18,
        color: "rgba(146, 64, 14, 0.24)",
      },
      effects: {
        threeD: {
          enabled: true,
          depth: 7,
          bottomColor: "#92400e",
          pressDepth: 7,
        },
        press: {
          enabled: true,
          depth: 7,
          scale: 0.98,
        },
        shine: {
          enabled: false,
        },
      },
    },
  },
  {
    name: "Shine Hover",
    description: "Clean blue CTA with a fast hover sweep.",
    config: {
      text: "Scan Now",
      colors: {
        backgroundColor: "#2563eb",
        textColor: "#ffffff",
        hoverBackgroundColor: "#1d4ed8",
      },
      border: {
        color: "#60a5fa",
      },
      shadow: {
        enabled: true,
        y: 10,
        blur: 24,
        color: "rgba(37, 99, 235, 0.32)",
      },
      effects: {
        shine: {
          enabled: true,
          color: "rgba(255, 255, 255, 0.58)",
          width: 58,
          duration: 600,
          angle: -22,
        },
      },
    },
  },
  {
    name: "Soft SaaS",
    description: "Subtle blue button for calm dashboards.",
    config: {
      text: "Continue",
      colors: {
        backgroundColor: "#dbeafe",
        textColor: "#1d4ed8",
        hoverBackgroundColor: "#bfdbfe",
        hoverTextColor: "#1e40af",
      },
      border: {
        color: "#bfdbfe",
      },
      size: {
        borderRadius: 14,
      },
      shadow: {
        enabled: true,
        y: 8,
        blur: 18,
        color: "rgba(59, 130, 246, 0.18)",
      },
      effects: {
        shine: {
          enabled: false,
        },
      },
    },
  },
  {
    name: "Dark Minimal",
    description: "Restrained neutral button with a crisp hover.",
    config: {
      text: "Continue",
      colors: {
        backgroundColor: "#111827",
        textColor: "#ffffff",
        hoverBackgroundColor: "#1f2937",
      },
      border: {
        color: "#374151",
      },
      size: {
        borderRadius: 10,
      },
      shadow: {
        enabled: false,
      },
      effects: {
        shine: {
          enabled: false,
        },
      },
    },
  },
  {
    name: "Luxury Outline",
    description: "Minimal outline button with draw-border hover.",
    config: {
      text: "View Details",
      colors: {
        backgroundColor: "transparent",
        textColor: "#f8fafc",
        hoverBackgroundColor: "rgba(255, 255, 255, 0.05)",
      },
      border: {
        width: 1,
        color: "rgba(255, 255, 255, 0.28)",
      },
      shadow: {
        enabled: false,
      },
      effects: {
        drawBorder: {
          enabled: true,
          color: "#f8fafc",
          duration: 520,
          width: 1,
        },
        shine: {
          enabled: false,
        },
      },
    },
  },
  {
    name: "Download Slide Icon",
    description: "Icon slides in on hover for download actions.",
    config: {
      text: "Download",
      colors: {
        backgroundColor: "#0f766e",
        textColor: "#ecfeff",
        hoverBackgroundColor: "#0d9488",
      },
      content: {
        iconEnabled: true,
        iconText: "v",
        iconPosition: "right",
        iconGap: 10,
        iconSlideEnabled: true,
        iconSlideDistance: 10,
      },
      effects: {
        shine: {
          enabled: true,
          color: "rgba(204, 251, 241, 0.45)",
        },
      },
    },
  },
  {
    name: "Magic Fill",
    description: "Hover fill animation with text swap for playful CTAs.",
    config: {
      text: "Get Started",
      colors: {
        backgroundColor: "transparent",
        textColor: "#ffffff",
        hoverTextColor: "#111827",
      },
      border: {
        color: "#ffffff",
      },
      content: {
        textSwapEnabled: true,
        hoverText: "Let's Go",
        textSwapAnimation: "slide-up",
      },
      effects: {
        fillHover: {
          enabled: true,
          direction: "left",
          color: "#ffffff",
          duration: 420,
          opacity: 1,
        },
        shine: {
          enabled: false,
        },
      },
    },
  },
  {
    name: "Pulse CTA",
    description: "Always-on pulsing glow for high priority actions.",
    config: {
      text: "Join Waitlist",
      colors: {
        backgroundColor: "#7c3aed",
        textColor: "#ffffff",
        hoverBackgroundColor: "#6d28d9",
      },
      effects: {
        pulse: {
          enabled: true,
          color: "rgba(124, 58, 237, 0.6)",
          duration: 2400,
          minBlur: 14,
          maxBlur: 42,
        },
        autoShine: {
          enabled: true,
          color: "rgba(255, 255, 255, 0.48)",
          duration: 3000,
        },
      },
    },
  },
  {
    name: "Loading Generate",
    description: "React-ready loading state with spinner support.",
    config: {
      text: "Generate",
      colors: {
        backgroundColor: "#4f46e5",
        textColor: "#ffffff",
        hoverBackgroundColor: "#4338ca",
      },
      state: {
        loadingEnabled: true,
        loadingPreview: true,
        loadingType: "spinner",
        loadingText: "Generating...",
      },
      effects: {
        shine: {
          enabled: false,
        },
        glow: {
          enabled: true,
          color: "rgba(79, 70, 229, 0.35)",
          blur: 26,
        },
      },
    },
  },
];
