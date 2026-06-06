import { useState } from "react";
import { generateButtonCss } from "../utils/generateButtonCss";
import { generateButtonMarkup } from "../utils/generateButtonMarkup";

export default function PreviewPanel({ config }) {
  const [backgroundMode, setBackgroundMode] = useState("dark");
  const generatedCss = generateButtonCss(config);
  const generatedMarkup = generateButtonMarkup(config);

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
        <div
          className="preview-button-shell"
          dangerouslySetInnerHTML={{ __html: generatedMarkup }}
        />
      </div>

      <div className="state-strip">
        <span>Press: {config.effects.press.enabled ? "enabled" : "off"}</span>
        <span>Shine: {config.effects.shine.enabled || config.effects.autoShine.enabled ? "enabled" : "off"}</span>
        <span>Gradient: {config.effects.gradient.animatedEnabled ? "moving" : "off"}</span>
        <span>Border: {config.effects.borderFlow.enabled ? "flowing" : "solid"}</span>
        <span>State: {config.state.loadingPreview ? "loading" : "ready"}</span>
      </div>
    </section>
  );
}
