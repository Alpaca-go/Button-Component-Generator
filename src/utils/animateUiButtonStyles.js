export const animateUiVariants = [
  { label: "Default", value: "default" },
  { label: "Accent", value: "accent" },
  { label: "Destructive", value: "destructive" },
  { label: "Outline", value: "outline" },
  { label: "Secondary", value: "secondary" },
  { label: "Ghost", value: "ghost" },
  { label: "Link", value: "link" },
];

export const animateUiSizes = [
  { label: "Default", value: "default" },
  { label: "Small", value: "sm" },
  { label: "Large", value: "lg" },
  { label: "Icon", value: "icon" },
  { label: "Icon Small", value: "icon-sm" },
  { label: "Icon Large", value: "icon-lg" },
];

export const animateUiSizeMap = {
  default: { height: 36, paddingX: 16, paddingY: 8, radius: 6, fontSize: 14, iconOnly: false },
  sm: { height: 32, paddingX: 12, paddingY: 6, radius: 6, fontSize: 13, iconOnly: false },
  lg: { height: 40, paddingX: 24, paddingY: 10, radius: 6, fontSize: 14, iconOnly: false },
  icon: { height: 36, paddingX: 0, paddingY: 0, radius: 6, fontSize: 14, iconOnly: true },
  "icon-sm": { height: 32, paddingX: 0, paddingY: 0, radius: 6, fontSize: 13, iconOnly: true },
  "icon-lg": { height: 40, paddingX: 0, paddingY: 0, radius: 6, fontSize: 15, iconOnly: true },
};

export const animateUiVariantMap = {
  default: {
    text: "#f8fafc",
    background: "#0f172a",
    hoverText: "#ffffff",
    hoverBackground: "#1e293b",
    border: "transparent",
    shadow: "0 1px 2px rgba(15, 23, 42, 0.18)",
    underline: false,
  },
  accent: {
    text: "#111827",
    background: "#e5e7eb",
    hoverText: "#111827",
    hoverBackground: "#d1d5db",
    border: "transparent",
    shadow: "0 1px 2px rgba(17, 24, 39, 0.12)",
    underline: false,
  },
  destructive: {
    text: "#ffffff",
    background: "#dc2626",
    hoverText: "#ffffff",
    hoverBackground: "#b91c1c",
    border: "transparent",
    shadow: "0 1px 2px rgba(127, 29, 29, 0.22)",
    underline: false,
  },
  outline: {
    text: "#111827",
    background: "#ffffff",
    hoverText: "#111827",
    hoverBackground: "#f3f4f6",
    border: "#d1d5db",
    shadow: "0 1px 2px rgba(17, 24, 39, 0.08)",
    underline: false,
  },
  secondary: {
    text: "#1f2937",
    background: "#f1f5f9",
    hoverText: "#111827",
    hoverBackground: "#e2e8f0",
    border: "transparent",
    shadow: "0 1px 2px rgba(15, 23, 42, 0.08)",
    underline: false,
  },
  ghost: {
    text: "#111827",
    background: "transparent",
    hoverText: "#111827",
    hoverBackground: "#f3f4f6",
    border: "transparent",
    shadow: "none",
    underline: false,
  },
  link: {
    text: "#2563eb",
    background: "transparent",
    hoverText: "#1d4ed8",
    hoverBackground: "transparent",
    border: "transparent",
    shadow: "none",
    underline: true,
  },
};

export function getAnimateUiVariant(variant) {
  return animateUiVariantMap[variant] || animateUiVariantMap.default;
}

export function getAnimateUiSize(size) {
  return animateUiSizeMap[size] || animateUiSizeMap.default;
}
