export function createButtonStyle(config, options = {}) {
  const { isHover = false } = options;
  const hoverActive = isHover && config.hoverEnabled && !config.disabledEnabled;
  const widthStyle = config.widthMode === "fixed" ? `${config.width}px` : "auto";

  const baseShadow = config.shadowEnabled
    ? `${config.shadowX}px ${config.shadowY}px ${config.shadowBlur}px ${config.shadowSpread}px ${config.shadowColor}`
    : "none";

  const hoverShadow = config.shadowEnabled
    ? `${config.shadowX}px ${config.hoverShadowY}px ${config.hoverShadowBlur}px ${config.shadowSpread}px ${config.shadowColor}`
    : "none";

  return {
    width: widthStyle,
    minHeight: `${config.height}px`,
    padding: `${config.paddingY}px ${config.paddingX}px`,
    borderRadius: `${config.borderRadius}px`,
    fontSize: `${config.fontSize}px`,
    fontWeight: config.fontWeight,
    letterSpacing: `${config.letterSpacing}px`,
    color: hoverActive ? config.hoverTextColor : config.textColor,
    background: hoverActive ? config.hoverBackgroundColor : config.backgroundColor,
    border: `${config.borderWidth}px solid ${config.borderColor}`,
    boxShadow: hoverActive ? hoverShadow : baseShadow,
    transform: hoverActive ? `scale(${config.hoverScale})` : "scale(1)",
    opacity: config.disabledEnabled ? config.disabledOpacity : 1,
    cursor: config.disabledEnabled ? "not-allowed" : config.cursor,
    transition: `all ${config.transitionDuration}ms ease`,
  };
}
