function slugifyPresetName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const presetMetadata = {
  "AI Gradient": {
    sourceName: "Local Rebuilt Presets",
    category: "Gradient",
    tags: ["gradient", "ai", "glow", "cta", "animated"],
  },
  "Neon Glow": {
    sourceName: "Uiverse",
    category: "Neon",
    tags: ["neon", "dark", "cyber", "glow"],
  },
  "Liquid Glass": {
    sourceName: "Local Rebuilt Presets",
    category: "Glass",
    tags: ["glass", "blur", "premium", "dark"],
  },
  "Cyber Border": {
    sourceName: "Aceternity UI Buttons",
    category: "Animated Border",
    tags: ["border", "gradient", "cyber", "animated"],
  },
  "Game Press": {
    sourceName: "Uiverse",
    category: "3D",
    tags: ["3d", "game", "press", "bold"],
  },
  "Shine Hover": {
    sourceName: "Local Rebuilt Presets",
    category: "Shimmer",
    tags: ["shine", "hover", "blue", "cta"],
  },
  "Soft SaaS": {
    sourceName: "shadcn/ui Button",
    category: "Soft",
    tags: ["saas", "soft", "secondary", "dashboard"],
  },
  "Dark Minimal": {
    sourceName: "Local Rebuilt Presets",
    category: "Minimal",
    tags: ["dark", "minimal", "neutral"],
  },
  "Luxury Outline": {
    sourceName: "Aceternity UI Buttons",
    category: "Outline",
    tags: ["outline", "draw-border", "luxury"],
  },
  "Download Slide Icon": {
    sourceName: "Local Rebuilt Presets",
    category: "Icon",
    tags: ["icon", "download", "slide", "hover"],
  },
  "Magic Fill": {
    sourceName: "Uiverse",
    category: "Hover Fill",
    tags: ["fill", "text-swap", "hover", "playful"],
  },
  "Pulse CTA": {
    sourceName: "CodePen Buttons",
    category: "Glow",
    tags: ["pulse", "glow", "cta", "animated"],
  },
  "Loading Generate": {
    sourceName: "shadcn/ui Button",
    category: "Loading",
    tags: ["loading", "spinner", "react", "ai"],
  },
  "Animate UI Button": {
    sourceName: "Animate UI Buttons",
    category: "Design System",
    tags: ["animate-ui", "variant", "size", "base"],
  },
  "Animate UI Copy": {
    sourceName: "Animate UI Buttons",
    category: "Icon",
    tags: ["animate-ui", "copy", "icon", "state"],
  },
  "Animate UI Flip": {
    sourceName: "Animate UI Buttons",
    category: "Flip",
    tags: ["animate-ui", "flip", "hover", "motion"],
  },
  "Animate UI Stars": {
    sourceName: "Animate UI Buttons",
    category: "Social",
    tags: ["animate-ui", "github", "stars", "social"],
  },
  "Animate UI Icon": {
    sourceName: "Animate UI Buttons",
    category: "Icon",
    tags: ["animate-ui", "icon", "particles"],
  },
  "Animate UI Liquid": {
    sourceName: "Animate UI Buttons",
    category: "Hover Fill",
    tags: ["animate-ui", "liquid", "hover", "fill"],
  },
  "Animate UI Ripple": {
    sourceName: "Animate UI Buttons",
    category: "Ripple",
    tags: ["animate-ui", "ripple", "tap", "interaction"],
  },
  "Animate UI Theme": {
    sourceName: "Animate UI Buttons",
    category: "Theme",
    tags: ["animate-ui", "theme", "toggle", "icon"],
  },
  "21st Liquid CTA": {
    sourceName: "21st.dev Community",
    category: "Liquid Galaxy",
    tags: ["21st-dev", "liquid", "glow", "cta", "animated"],
  },
};

const sourceUrls = {
  "Local Rebuilt Presets": "",
  Uiverse: "https://uiverse.io/",
  "Aceternity UI Buttons": "https://ui.aceternity.com/components/tailwindcss-buttons",
  "Animate UI Buttons": "https://animate-ui.com/docs/components/buttons/button",
  "21st.dev Community": "https://21st.dev/community/components/ui-layouts/button-1/default",
  "shadcn/ui Button": "https://ui.shadcn.com/docs/components/button",
  "Material UI Button": "https://mui.com/material-ui/react-button/",
  "Bootstrap Buttons": "https://getbootstrap.com/docs/5.0/components/buttons/",
  "Apple HIG Buttons": "https://developer.apple.com/design/human-interface-guidelines/buttons",
};

const rawButtonPresets = [
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
  {
    name: "Animate UI Button",
    description: "Shadcn-inspired base button with variant and size controls.",
    config: {
      text: "Click me",
      animateUi: {
        enabled: true,
        variant: "default",
        size: "default",
      },
      effects: {
        shine: { enabled: false },
      },
    },
  },
  {
    name: "Animate UI Copy",
    description: "Icon-only copy button with copied-state preview.",
    config: {
      text: "Copy",
      animateUi: {
        enabled: true,
        variant: "outline",
        size: "icon",
        copy: {
          enabled: true,
          copiedPreview: false,
          copyIcon: "Copy",
          successIcon: "Done",
        },
      },
      effects: {
        shine: { enabled: false },
      },
    },
  },
  {
    name: "Animate UI Flip",
    description: "Two-face flip button with direction and back-face controls.",
    config: {
      text: "Front",
      animateUi: {
        enabled: true,
        variant: "default",
        size: "default",
        flip: {
          enabled: true,
          from: "top",
          frontText: "Front",
          backText: "Back",
          backBackgroundColor: "#e5e7eb",
          backTextColor: "#111827",
        },
      },
      effects: {
        shine: { enabled: false },
      },
    },
  },
  {
    name: "Animate UI Stars",
    description: "GitHub stars style with repo label, number, and star pop.",
    config: {
      text: "Stars",
      animateUi: {
        enabled: true,
        variant: "outline",
        size: "default",
        githubStars: {
          enabled: true,
          logoText: "GitHub",
          value: "12.4k",
          starIcon: "*",
        },
      },
      effects: {
        shine: { enabled: false },
      },
    },
  },
  {
    name: "Animate UI Icon",
    description: "Icon button with particle burst styling.",
    config: {
      text: "Icon",
      animateUi: {
        enabled: true,
        variant: "secondary",
        size: "icon",
        iconParticles: {
          enabled: true,
          iconText: "+",
          particleColor: "#f59e0b",
        },
      },
      effects: {
        shine: { enabled: false },
      },
    },
  },
  {
    name: "Animate UI Liquid",
    description: "Liquid hover fill button with fill height and delay controls.",
    config: {
      text: "Liquid Button",
      animateUi: {
        enabled: true,
        variant: "ghost",
        size: "default",
        liquid: {
          enabled: true,
          delay: 300,
          fillHeight: 3,
          fillColor: "#0f172a",
          backgroundColor: "#e5e7eb",
        },
      },
      colors: {
        textColor: "#0f172a",
        hoverTextColor: "#ffffff",
      },
      effects: {
        shine: { enabled: false },
      },
    },
  },
  {
    name: "Animate UI Ripple",
    description: "Tap ripple button with configurable ripple color and scale.",
    config: {
      text: "Ripple Button",
      animateUi: {
        enabled: true,
        variant: "default",
        size: "default",
        ripple: {
          enabled: true,
          color: "rgba(255, 255, 255, 0.52)",
          scale: 10,
          duration: 600,
        },
      },
      effects: {
        shine: { enabled: false },
      },
    },
  },
  {
    name: "Animate UI Theme",
    description: "Theme toggler style with reveal direction controls.",
    config: {
      text: "Theme",
      animateUi: {
        enabled: true,
        variant: "outline",
        size: "icon",
        themeToggler: {
          enabled: true,
          mode: "light",
          direction: "ltr",
          lightIcon: "Sun",
          darkIcon: "Moon",
          systemIcon: "System",
          revealColor: "#0f172a",
        },
      },
      effects: {
        shine: { enabled: false },
      },
    },
  },
  {
    name: "Solid Primary",
    description: "Primary solid button merged from shadcn and Bootstrap-style primary patterns.",
    sourceName: "shadcn/ui Button",
    category: "Solid",
    tags: ["solid", "primary", "design-system", "bootstrap"],
    licenseNote: "Merged from similar shadcn/ui and Bootstrap primary button patterns and rebuilt as one configurable local preset.",
    config: {
      text: "Save changes",
      size: { borderRadius: 8, height: 40, paddingX: 18, paddingY: 10 },
      colors: {
        backgroundColor: "#2563eb",
        textColor: "#ffffff",
        hoverBackgroundColor: "#1d4ed8",
      },
      border: { width: 0, color: "transparent" },
      shadow: { enabled: true, y: 2, blur: 6, color: "rgba(37, 99, 235, 0.22)" },
      effects: { shine: { enabled: false } },
    },
  },
  {
    name: "Solid Secondary",
    description: "Neutral secondary action with a quiet surface.",
    sourceName: "shadcn/ui Button",
    category: "Solid",
    tags: ["solid", "secondary", "neutral"],
    config: {
      text: "Cancel",
      size: { borderRadius: 8, height: 40, paddingX: 18 },
      colors: {
        backgroundColor: "#e5e7eb",
        textColor: "#111827",
        hoverBackgroundColor: "#d1d5db",
        hoverTextColor: "#111827",
      },
      border: { width: 0, color: "transparent" },
      shadow: { enabled: false },
      effects: { shine: { enabled: false } },
    },
  },
  {
    name: "Outline Primary",
    description: "Primary outline button merged from Bootstrap-style outline patterns.",
    sourceName: "Bootstrap Buttons",
    category: "Outline",
    tags: ["outline", "primary", "bootstrap", "design-system"],
    licenseNote: "Merged from similar primary outline button patterns and rebuilt as one configurable local preset.",
    config: {
      text: "Learn more",
      size: { borderRadius: 8, height: 40, paddingX: 18 },
      colors: {
        backgroundColor: "transparent",
        textColor: "#2563eb",
        hoverBackgroundColor: "#2563eb",
        hoverTextColor: "#ffffff",
      },
      border: { width: 1, color: "#2563eb" },
      shadow: { enabled: false },
      effects: { shine: { enabled: false } },
    },
  },
  {
    name: "Ghost Button",
    description: "Transparent action for dense toolbars and menus.",
    sourceName: "shadcn/ui Button",
    category: "Ghost",
    tags: ["ghost", "toolbar", "minimal"],
    config: {
      text: "Preview",
      size: { borderRadius: 8, height: 38, paddingX: 14 },
      colors: {
        backgroundColor: "transparent",
        textColor: "#e5e7eb",
        hoverBackgroundColor: "rgba(255, 255, 255, 0.08)",
        hoverTextColor: "#ffffff",
      },
      border: { width: 0, color: "transparent" },
      shadow: { enabled: false },
      effects: { shine: { enabled: false } },
    },
  },
  {
    name: "Link Button",
    description: "Text-like action with link affordance.",
    sourceName: "shadcn/ui Button",
    category: "Link",
    tags: ["link", "text", "navigation"],
    config: {
      text: "View docs",
      size: { height: 32, paddingX: 2, paddingY: 2, borderRadius: 4 },
      typography: { fontWeight: 600 },
      colors: {
        backgroundColor: "transparent",
        textColor: "#60a5fa",
        hoverBackgroundColor: "transparent",
        hoverTextColor: "#93c5fd",
      },
      border: { width: 0, color: "transparent" },
      shadow: { enabled: false },
      interaction: { hoverScale: 1 },
      animateUi: { enabled: true, variant: "link", size: "default" },
      effects: { shine: { enabled: false }, press: { enabled: false } },
    },
  },
  {
    name: "Danger Button",
    description: "High-signal destructive action.",
    sourceName: "Material UI Button",
    category: "Danger",
    tags: ["danger", "destructive", "solid"],
    config: {
      text: "Delete",
      size: { borderRadius: 8, height: 40, paddingX: 18 },
      colors: {
        backgroundColor: "#dc2626",
        textColor: "#ffffff",
        hoverBackgroundColor: "#b91c1c",
      },
      border: { width: 0, color: "transparent" },
      shadow: { enabled: true, y: 8, blur: 18, color: "rgba(220, 38, 38, 0.22)" },
      effects: { shine: { enabled: false } },
    },
  },
  {
    name: "Material Filled",
    description: "Material-inspired filled button with compact elevation.",
    sourceName: "Material UI Button",
    category: "Material",
    tags: ["material", "filled", "elevation"],
    config: {
      text: "Continue",
      size: { borderRadius: 20, height: 40, paddingX: 24 },
      colors: {
        backgroundColor: "#6750a4",
        textColor: "#ffffff",
        hoverBackgroundColor: "#5b4596",
      },
      border: { width: 0, color: "transparent" },
      shadow: { enabled: true, y: 3, blur: 8, color: "rgba(103, 80, 164, 0.25)" },
      effects: { shine: { enabled: false } },
    },
  },
  {
    name: "Material Outlined",
    description: "Material-inspired outlined button for secondary actions.",
    sourceName: "Material UI Button",
    category: "Material",
    tags: ["material", "outlined", "secondary"],
    config: {
      text: "Details",
      size: { borderRadius: 20, height: 40, paddingX: 24 },
      colors: {
        backgroundColor: "transparent",
        textColor: "#d0bcff",
        hoverBackgroundColor: "rgba(208, 188, 255, 0.1)",
        hoverTextColor: "#eaddff",
      },
      border: { width: 1, color: "#938f99" },
      shadow: { enabled: false },
      effects: { shine: { enabled: false } },
    },
  },
  {
    name: "Apple Style",
    description: "Soft Apple-inspired pill button with restrained depth.",
    sourceName: "Apple HIG Buttons",
    category: "Apple-style",
    tags: ["apple", "pill", "soft", "minimal"],
    config: {
      text: "Get",
      size: { borderRadius: 999, height: 36, paddingX: 22, paddingY: 8 },
      typography: { fontWeight: 700 },
      colors: {
        backgroundColor: "#f5f5f7",
        textColor: "#1d1d1f",
        hoverBackgroundColor: "#ffffff",
        hoverTextColor: "#000000",
      },
      border: { width: 1, color: "rgba(0, 0, 0, 0.08)" },
      shadow: { enabled: true, y: 8, blur: 22, color: "rgba(0, 0, 0, 0.16)" },
      effects: { shine: { enabled: false } },
    },
  },
  {
    name: "Brutal Style",
    description: "Bold brutalist button with hard shadow and chunky border.",
    sourceName: "Aceternity UI Buttons",
    category: "Brutal",
    tags: ["brutal", "bold", "shadow", "border"],
    config: {
      text: "Launch",
      size: { borderRadius: 4, height: 48, paddingX: 24 },
      typography: { fontWeight: 800 },
      colors: {
        backgroundColor: "#facc15",
        textColor: "#111827",
        hoverBackgroundColor: "#fde047",
        hoverTextColor: "#111827",
      },
      border: { width: 2, color: "#111827" },
      shadow: {
        enabled: true,
        x: 6,
        y: 6,
        blur: 0,
        spread: 0,
        color: "#111827",
        hoverY: 4,
        hoverBlur: 0,
      },
      effects: { shine: { enabled: false }, press: { enabled: true, depth: 4, scale: 1 } },
    },
  },
  {
    name: "21st Liquid CTA",
    description: "Rebuilt liquid animated CTA inspired by the 21st.dev button.",
    sourceName: "21st.dev Community",
    category: "Liquid Galaxy",
    tags: ["21st-dev", "liquid", "glow", "cta", "animated"],
    difficulty: "medium",
    config: {
      text: "Contact Us",
      size: {
        borderRadius: 999,
        height: 54,
        paddingX: 28,
        paddingY: 14,
      },
      typography: {
        fontSize: 15,
        fontWeight: 700,
      },
      colors: {
        textColor: "#ffffff",
        backgroundColor: "#030712",
        hoverTextColor: "#facc15",
        hoverBackgroundColor: "#030712",
      },
      border: {
        width: 2,
        color: "rgba(255, 255, 255, 0.22)",
      },
      shadow: {
        enabled: false,
      },
      interaction: {
        hoverScale: 1.04,
        transitionDuration: 260,
      },
      content: {
        iconGap: 10,
      },
      effects: {
        press: {
          enabled: true,
          depth: 2,
          scale: 0.98,
        },
        shine: {
          enabled: false,
        },
        liquidGalaxy: {
          enabled: true,
          coreColor: "#030712",
          textHoverColor: "#facc15",
          glowColor: "rgba(250, 204, 21, 0.56)",
          haloColor: "rgba(255, 255, 255, 0.2)",
          orbitColorA: "#facc15",
          orbitColorB: "#fb923c",
          orbitColorC: "#ffffff",
          blur: 18,
          opacity: 0.86,
          speed: 4200,
          hoverSpeed: 1800,
          scale: 1.04,
          starText: "*",
          starEnabled: true,
          borderOpacity: 0.3,
          ringWidth: 2,
        },
      },
    },
  },
];

export const buttonPresets = rawButtonPresets.map((preset, index) => {
  const metadata = presetMetadata[preset.name] || {};
  const sourceName = preset.sourceName || metadata.sourceName || "Local Rebuilt Presets";
  const category = preset.category || metadata.category || "Uncategorized";
  const tags = preset.tags || metadata.tags || [category.toLowerCase()];

  return {
    id: preset.id || `${String(index + 1).padStart(2, "0")}-${slugifyPresetName(preset.name)}`,
    sourceName,
    sourceUrl: preset.sourceUrl ?? sourceUrls[sourceName] ?? "",
    licenseNote:
      preset.licenseNote ||
      "Inspired by public UI button patterns and rebuilt with local buttonConfig. No third-party code copied.",
    category,
    tags,
    difficulty: preset.difficulty || "easy",
    ...preset,
  };
});
