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
                  preset.config.effects?.gradient?.animatedEnabled
                    ? `linear-gradient(90deg, ${preset.config.effects.gradient.colors.join(", ")})`
                    : preset.config.effects?.borderFlow?.enabled
                    ? `linear-gradient(90deg, ${preset.config.effects.borderFlow.colors.join(", ")})`
                    : preset.config.colors?.backgroundColor,
                borderColor: preset.config.border?.color,
                boxShadow: preset.config.effects?.glow?.enabled
                  ? `0 0 18px ${preset.config.effects.glow.color}`
                  : preset.config.effects?.neon?.enabled
                  ? `0 0 18px ${preset.config.effects.neon.color}`
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
