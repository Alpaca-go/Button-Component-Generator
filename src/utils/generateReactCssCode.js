import { escapeJsString, getBoxShadow } from "./codeHelpers";

export function generateReactCssCode(config) {
  const widthLine = config.widthMode === "fixed" ? `  width: ${config.width}px;\n` : "";
  const hoverBlock = config.hoverEnabled
    ? `
.generated-button:hover:not(:disabled) {
  color: ${config.hoverTextColor};
  background: ${config.hoverBackgroundColor};
  transform: scale(${config.hoverScale});
  box-shadow: ${getBoxShadow(config, true)};
}
`
    : "";

  return `// Button.jsx
import "./Button.css";

export default function Button({ children = "${escapeJsString(config.text)}", disabled = false, onClick }) {
  return (
    <button className="generated-button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

// Button.css
.generated-button {
${widthLine}  min-height: ${config.height}px;
  padding: ${config.paddingY}px ${config.paddingX}px;
  border-radius: ${config.borderRadius}px;
  font-size: ${config.fontSize}px;
  font-weight: ${config.fontWeight};
  letter-spacing: ${config.letterSpacing}px;
  color: ${config.textColor};
  background: ${config.backgroundColor};
  border: ${config.borderWidth}px solid ${config.borderColor};
  box-shadow: ${getBoxShadow(config)};
  cursor: ${config.cursor};
  transition: all ${config.transitionDuration}ms ease;
}
${hoverBlock}
.generated-button:disabled {
  opacity: ${config.disabledOpacity};
  cursor: not-allowed;
}`;
}
