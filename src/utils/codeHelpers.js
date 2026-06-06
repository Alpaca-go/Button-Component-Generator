export function getBoxShadow(config, hover = false) {
  if (!config.shadowEnabled) {
    return "none";
  }

  const y = hover ? config.hoverShadowY : config.shadowY;
  const blur = hover ? config.hoverShadowBlur : config.shadowBlur;
  return `${config.shadowX}px ${y}px ${blur}px ${config.shadowSpread}px ${config.shadowColor}`;
}

export function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function escapeJsString(text) {
  return String(text).replaceAll("\\", "\\\\").replaceAll('"', '\\"');
}
