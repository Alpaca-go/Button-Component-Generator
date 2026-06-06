import { buttonPresets } from "../data/buttonPresets";

export default function PresetList({ onApplyPreset }) {
  return (
    <section className="panel-block presets-block">
      <div className="section-heading">
        <h2>Presets</h2>
        <span>{buttonPresets.length}</span>
      </div>

      <div className="preset-list">
        {buttonPresets.map((preset) => (
          <button
            className="preset-item"
            type="button"
            key={preset.name}
            onClick={() => onApplyPreset(preset.config)}
          >
            <span
              className="preset-swatch"
              style={{
                background: preset.config.backgroundColor,
                borderColor: preset.config.borderColor,
                boxShadow: preset.config.shadowEnabled
                  ? `0 6px 18px ${preset.config.shadowColor}`
                  : "none",
              }}
            />
            <span>
              <strong>{preset.name}</strong>
              <small>{preset.description}</small>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
