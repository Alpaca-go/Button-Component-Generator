import { useState } from "react";
import { createButtonStyle } from "../utils/createButtonStyle";

export default function PreviewPanel({ config }) {
  const [isHover, setIsHover] = useState(false);
  const [backgroundMode, setBackgroundMode] = useState("dark");
  const buttonStyle = createButtonStyle(config, { isHover });

  return (
    <section className="preview-panel">
      <div className="preview-toolbar">
        <div>
          <p className="eyebrow">Preview</p>
          <h2>Live button state</h2>
        </div>
        <div className="segmented-control" role="tablist" aria-label="Preview background">
          <button
            type="button"
            className={backgroundMode === "light" ? "active" : ""}
            onClick={() => setBackgroundMode("light")}
          >
            Light
          </button>
          <button
            type="button"
            className={backgroundMode === "dark" ? "active" : ""}
            onClick={() => setBackgroundMode("dark")}
          >
            Dark
          </button>
        </div>
      </div>

      <div className={`preview-stage ${backgroundMode}`}>
        <button
          className="preview-button"
          style={buttonStyle}
          disabled={config.disabledEnabled}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onFocus={() => setIsHover(true)}
          onBlur={() => setIsHover(false)}
          type="button"
        >
          {config.text || "Button"}
        </button>
      </div>

      <div className="state-strip">
        <span>Hover: {config.hoverEnabled ? "enabled" : "off"}</span>
        <span>Shadow: {config.shadowEnabled ? "enabled" : "off"}</span>
        <span>Disabled: {config.disabledEnabled ? "previewing" : "off"}</span>
      </div>
    </section>
  );
}
