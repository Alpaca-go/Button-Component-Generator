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
      width: config.borderWidth,
      color: config.borderColor,
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
      cursor: config.cursor,
    },
    state: {
      disabledEnabled: config.disabledEnabled,
      disabledOpacity: config.disabledOpacity,
    },
  };

  return JSON.parse(JSON.stringify(grouped, (_key, value) => value ?? undefined));
}

function upgradeGroupedConfig(config) {
  const upgraded = { ...config };

  if (isPlainObject(config.border)) {
    upgraded.border = {
      ...config.border,
      width: config.border.width ?? config.border.borderWidth,
      color: config.border.color ?? config.border.borderColor,
    };
  }

  if (isPlainObject(config.interaction)) {
    upgraded.interaction = {
      ...config.interaction,
    };

    upgraded.state = {
      ...config.state,
      disabledEnabled:
        config.state?.disabledEnabled ?? config.interaction.disabledEnabled,
      disabledOpacity:
        config.state?.disabledOpacity ?? config.interaction.disabledOpacity,
    };
  }

  if (isPlainObject(config.effects)) {
    const effects = config.effects;

    upgraded.effects = {
      ...effects,
      press: {
        ...effects.press,
        enabled: effects.press?.enabled ?? effects.pressEnabled,
        depth: effects.press?.depth ?? effects.pressDepth,
        scale: effects.press?.scale ?? effects.pressScale,
      },
      shine: {
        ...effects.shine,
        enabled: effects.shine?.enabled ?? effects.shineEnabled,
        trigger: effects.shine?.trigger ?? effects.shineTrigger,
        color: effects.shine?.color ?? effects.shineColor,
        width: effects.shine?.width ?? effects.shineWidth,
        duration: effects.shine?.duration ?? effects.shineDuration,
        angle: effects.shine?.angle ?? effects.shineAngle,
      },
      gradient: {
        ...effects.gradient,
        animatedEnabled:
          effects.gradient?.animatedEnabled ?? effects.animatedGradientEnabled,
        colors: effects.gradient?.colors ?? effects.gradientColors,
        duration: effects.gradient?.duration ?? effects.gradientDuration,
        direction: effects.gradient?.direction ?? effects.gradientDirection,
      },
      glow: {
        ...effects.glow,
        enabled: effects.glow?.enabled ?? effects.glowEnabled,
        color: effects.glow?.color ?? effects.glowColor,
        blur: effects.glow?.blur ?? effects.glowBlur,
      },
    };
  }

  return upgraded;
}

export function normalizeButtonConfig(config) {
  if (!isPlainObject(config)) {
    return defaultButtonConfig;
  }

  const maybeGrouped = isPlainObject(config.size)
    ? upgradeGroupedConfig(config)
    : legacyFlatToGrouped(config);

  return mergeConfig(defaultButtonConfig, maybeGrouped);
}
