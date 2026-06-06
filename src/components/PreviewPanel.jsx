import { useState } from "react";
import { generateButtonCss } from "../utils/generateButtonCss";

export default function PreviewPanel({ config }) {
  const [backgroundMode, setBackgroundMode] = useState("dark");
  const generatedCss = generateButtonCss(config);

  return (
    <section className="preview-panel">
      <style>{generatedCss}</style>

      <div className="preview-toolbar">
        <div>
          <p className="eyebrow">Preview</p>
          <h2>Live motion state</h2>
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
          className="generated-button preview-button"
          disabled={config.interaction.disabledEnabled}
          type="button"
        >
          <span className="generated-button__content">
            {config.text || "Button"}
          </span>
        </button>
      </div>

      <div className="state-strip">
        <span>Press: {config.effects.pressEnabled ? "enabled" : "off"}</span>
        <span>Shine: {config.effects.shineEnabled ? "enabled" : "off"}</span>
        <span>Gradient: {config.effects.animatedGradientEnabled ? "moving" : "off"}</span>
        <span>Glow: {config.effects.glowEnabled ? "enabled" : "off"}</span>
      </div>
    </section>
  );
}
