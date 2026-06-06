export const buttonPresets = [
  {
    name: "Purple Glow",
    description: "Rounded primary action with a soft violet shadow.",
    config: {
      text: "Get Started",
      colors: {
        backgroundColor: "#7c3aed",
        textColor: "#ffffff",
        hoverBackgroundColor: "#6d28d9",
        hoverTextColor: "#ffffff",
      },
      border: {
        borderColor: "#8b5cf6",
      },
      size: {
        borderRadius: 999,
      },
      shadow: {
        enabled: true,
        y: 10,
        blur: 24,
        color: "rgba(124, 58, 237, 0.35)",
        hoverY: 14,
        hoverBlur: 32,
      },
      interaction: {
        hoverScale: 1.04,
      },
      effects: {
        shineEnabled: false,
      },
    },
  },
  {
    name: "Minimal Dark",
    description: "Compact neutral button for dark product surfaces.",
    config: {
      text: "Continue",
      colors: {
        backgroundColor: "#111827",
        textColor: "#ffffff",
        hoverBackgroundColor: "#1f2937",
        hoverTextColor: "#ffffff",
      },
      border: {
        borderColor: "#374151",
      },
      size: {
        borderRadius: 12,
      },
      shadow: {
        enabled: false,
      },
      interaction: {
        hoverScale: 1.02,
      },
      effects: {
        shineEnabled: false,
        glowEnabled: false,
      },
    },
  },
  {
    name: "Soft Blue",
    description: "Calm secondary action with a low-contrast blue fill.",
    config: {
      text: "Download",
      colors: {
        backgroundColor: "#dbeafe",
        textColor: "#1d4ed8",
        hoverBackgroundColor: "#bfdbfe",
        hoverTextColor: "#1e40af",
      },
      border: {
        borderColor: "#bfdbfe",
      },
      size: {
        borderRadius: 16,
      },
      shadow: {
        enabled: true,
        y: 8,
        blur: 20,
        color: "rgba(59, 130, 246, 0.2)",
        hoverY: 10,
        hoverBlur: 24,
      },
      interaction: {
        hoverScale: 1.03,
      },
      effects: {
        pressDepth: 2,
        shineEnabled: false,
      },
    },
  },
  {
    name: "Outline Button",
    description: "Transparent fill with a clear border and crisp hover.",
    config: {
      text: "View Details",
      colors: {
        backgroundColor: "transparent",
        textColor: "#e5e7eb",
        hoverBackgroundColor: "#ffffff",
        hoverTextColor: "#111827",
      },
      border: {
        borderWidth: 1,
        borderColor: "#6b7280",
      },
      size: {
        borderRadius: 10,
      },
      shadow: {
        enabled: false,
      },
      interaction: {
        hoverScale: 1.01,
      },
      effects: {
        pressDepth: 2,
        shineEnabled: false,
      },
    },
  },
  {
    name: "Glass Button",
    description: "Light translucent button for layered dark previews.",
    config: {
      text: "Explore",
      colors: {
        backgroundColor: "rgba(255, 255, 255, 0.16)",
        textColor: "#ffffff",
        hoverBackgroundColor: "rgba(255, 255, 255, 0.24)",
        hoverTextColor: "#ffffff",
      },
      border: {
        borderColor: "rgba(255, 255, 255, 0.35)",
      },
      size: {
        borderRadius: 18,
      },
      shadow: {
        enabled: true,
        y: 12,
        blur: 30,
        color: "rgba(15, 23, 42, 0.28)",
        hoverY: 16,
        hoverBlur: 36,
      },
      interaction: {
        hoverScale: 1.03,
      },
      effects: {
        shineEnabled: true,
        shineColor: "rgba(255, 255, 255, 0.42)",
        glowEnabled: false,
      },
    },
  },
  {
    name: "Neon Button",
    description: "High-energy cyan accent with a glowing treatment.",
    config: {
      text: "Launch",
      colors: {
        backgroundColor: "#06b6d4",
        textColor: "#061016",
        hoverBackgroundColor: "#22d3ee",
        hoverTextColor: "#061016",
      },
      border: {
        borderColor: "#67e8f9",
      },
      size: {
        borderRadius: 999,
      },
      typography: {
        fontWeight: 800,
      },
      shadow: {
        enabled: true,
        y: 0,
        blur: 28,
        color: "rgba(34, 211, 238, 0.45)",
        hoverY: 0,
        hoverBlur: 42,
      },
      interaction: {
        hoverScale: 1.05,
      },
      effects: {
        glowEnabled: true,
        glowColor: "rgba(34, 211, 238, 0.45)",
        glowBlur: 28,
        shineEnabled: true,
      },
    },
  },
  {
    name: "Press Button",
    description: "Tactile press motion with a short, game-like shadow.",
    config: {
      text: "Press Start",
      colors: {
        backgroundColor: "#f59e0b",
        textColor: "#211400",
        hoverBackgroundColor: "#fbbf24",
        hoverTextColor: "#211400",
      },
      border: {
        borderColor: "#fcd34d",
      },
      size: {
        borderRadius: 14,
      },
      typography: {
        fontWeight: 800,
      },
      shadow: {
        enabled: true,
        y: 12,
        blur: 0,
        color: "rgba(146, 64, 14, 0.55)",
        hoverY: 14,
        hoverBlur: 0,
      },
      interaction: {
        hoverScale: 1.02,
      },
      effects: {
        pressEnabled: true,
        pressDepth: 8,
        pressScale: 0.97,
        shineEnabled: false,
        glowEnabled: false,
      },
    },
  },
  {
    name: "Shine Hover",
    description: "Clean tech button with a fast highlight sweep.",
    config: {
      text: "Scan Now",
      colors: {
        backgroundColor: "#2563eb",
        textColor: "#ffffff",
        hoverBackgroundColor: "#1d4ed8",
        hoverTextColor: "#ffffff",
      },
      border: {
        borderColor: "#60a5fa",
      },
      shadow: {
        enabled: true,
        y: 10,
        blur: 24,
        color: "rgba(37, 99, 235, 0.32)",
        hoverY: 12,
        hoverBlur: 30,
      },
      effects: {
        pressEnabled: true,
        pressDepth: 3,
        pressScale: 0.98,
        shineEnabled: true,
        shineColor: "rgba(255, 255, 255, 0.58)",
        shineWidth: 58,
        shineDuration: 600,
        shineAngle: -22,
        animatedGradientEnabled: false,
        glowEnabled: false,
      },
    },
  },
  {
    name: "AI Gradient",
    description: "Continuous blue-violet-pink gradient for AI products.",
    config: {
      text: "Generate",
      colors: {
        textColor: "#ffffff",
        backgroundType: "gradient",
        backgroundColor: "#7c3aed",
        hoverBackgroundColor: "#6d28d9",
        hoverTextColor: "#ffffff",
      },
      border: {
        borderColor: "rgba(255, 255, 255, 0.26)",
      },
      shadow: {
        enabled: true,
        y: 12,
        blur: 28,
        color: "rgba(124, 58, 237, 0.32)",
        hoverY: 16,
        hoverBlur: 36,
      },
      effects: {
        animatedGradientEnabled: true,
        gradientColors: ["#7c3aed", "#2563eb", "#ec4899", "#7c3aed"],
        gradientDuration: 4000,
        gradientDirection: 90,
        shineEnabled: true,
        shineColor: "rgba(255, 255, 255, 0.45)",
        shineWidth: 60,
        shineDuration: 700,
        shineAngle: -20,
        pressEnabled: true,
        pressDepth: 3,
        pressScale: 0.98,
        glowEnabled: true,
        glowColor: "rgba(124, 58, 237, 0.35)",
        glowBlur: 28,
      },
    },
  },
  {
    name: "Neon Glow",
    description: "Strong glow treatment for gaming and sci-fi actions.",
    config: {
      text: "Activate",
      colors: {
        backgroundColor: "#111827",
        textColor: "#a7f3d0",
        hoverBackgroundColor: "#064e3b",
        hoverTextColor: "#ecfdf5",
      },
      border: {
        borderColor: "#34d399",
      },
      typography: {
        fontWeight: 800,
      },
      shadow: {
        enabled: true,
        y: 0,
        blur: 18,
        color: "rgba(52, 211, 153, 0.28)",
        hoverY: 0,
        hoverBlur: 28,
      },
      effects: {
        pressEnabled: true,
        pressDepth: 3,
        pressScale: 0.97,
        shineEnabled: true,
        shineColor: "rgba(167, 243, 208, 0.48)",
        shineWidth: 70,
        shineDuration: 720,
        shineAngle: -18,
        glowEnabled: true,
        glowColor: "rgba(52, 211, 153, 0.72)",
        glowBlur: 46,
      },
    },
  },
];
