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
                background:
                  preset.config.effects?.animatedGradientEnabled
                    ? `linear-gradient(90deg, ${preset.config.effects.gradientColors.join(", ")})`
                    : preset.config.colors?.backgroundColor,
                borderColor: preset.config.border?.borderColor,
                boxShadow: preset.config.effects?.glowEnabled
                  ? `0 0 18px ${preset.config.effects.glowColor}`
                  : preset.config.shadow?.enabled
                  ? `0 6px 18px ${preset.config.shadow.color}`
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
