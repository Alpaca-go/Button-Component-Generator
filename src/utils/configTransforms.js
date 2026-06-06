import { defaultButtonConfig } from "../config/defaultButtonConfig";

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function mergeConfig(base, patch) {
  if (!isPlainObject(patch)) {
    return base;
  }

  return Object.entries(patch).reduce((merged, [key, value]) => {
    if (isPlainObject(value) && isPlainObject(merged[key])) {
      return {
        ...merged,
        [key]: mergeConfig(merged[key], value),
      };
    }

    return {
      ...merged,
      [key]: value,
    };
  }, { ...base });
}

export function setConfigValue(config, path, value) {
  const keys = path.split(".");
  const [firstKey, ...restKeys] = keys;

  if (restKeys.length === 0) {
    return {
      ...config,
      [firstKey]: value,
    };
  }

  return {
    ...config,
    [firstKey]: setConfigValue(config[firstKey] || {}, restKeys.join("."), value),
  };
}

function legacyFlatToGrouped(config) {
  const grouped = {
    text: config.text,
    size: {
      widthMode: config.widthMode,
      width: config.width,
      height: config.height,
      paddingX: config.paddingX,
      paddingY: config.paddingY,
      borderRadius: config.borderRadius,
    },
    typography: {
      fontSize: config.fontSize,
      fontWeight: config.fontWeight,
      letterSpacing: config.letterSpacing,
    },
    colors: {
      textColor: config.textColor,
      backgroundType: config.backgroundType,
      backgroundColor: config.backgroundColor,
      hoverEnabled: config.hoverEnabled,
      hoverBackgroundColor: config.hoverBackgroundColor,
      hoverTextColor: config.hoverTextColor,
    },
    border: {
      borderWidth: config.borderWidth,
      borderColor: config.borderColor,
    },
    shadow: {
      enabled: config.shadowEnabled,
      x: config.shadowX,
      y: config.shadowY,
      blur: config.shadowBlur,
      spread: config.shadowSpread,
      color: config.shadowColor,
      hoverY: config.hoverShadowY,
      hoverBlur: config.hoverShadowBlur,
    },
    interaction: {
      transitionDuration: config.transitionDuration,
      hoverScale: config.hoverScale,
      disabledEnabled: config.disabledEnabled,
      disabledOpacity: config.disabledOpacity,
      cursor: config.cursor,
    },
  };

  return JSON.parse(JSON.stringify(grouped, (_key, value) => value ?? undefined));
}

export function normalizeButtonConfig(config) {
  if (!isPlainObject(config)) {
    return defaultButtonConfig;
  }

  const maybeGrouped = isPlainObject(config.size)
    ? config
    : legacyFlatToGrouped(config);

  return mergeConfig(defaultButtonConfig, maybeGrouped);
}
