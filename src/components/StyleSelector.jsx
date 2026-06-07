function getPresetSwatchStyle(preset) {
  return {
    background: preset.config.effects?.gradient?.animatedEnabled
      ? `linear-gradient(90deg, ${preset.config.effects.gradient.colors.join(", ")})`
      : preset.config.effects?.borderFlow?.enabled
        ? `linear-gradient(90deg, ${preset.config.effects.borderFlow.colors.join(", ")})`
        : preset.config.colors?.backgroundColor || "#111827",
    borderColor: preset.config.border?.color || "rgba(255, 255, 255, 0.12)",
    boxShadow: preset.config.effects?.glow?.enabled
      ? `0 0 18px ${preset.config.effects.glow.color}`
      : preset.config.effects?.neon?.enabled
        ? `0 0 18px ${preset.config.effects.neon.color}`
        : "none",
  };
}

export default function StyleSelector({ presets, selectedPreset, selectedPresetId, onSelectPreset }) {
  return (
    <section className="panel-block style-block">
      <div className="section-heading">
        <h2>Button style</h2>
        <span>{selectedPreset ? selectedPreset.category : "Free"}</span>
      </div>

      <label className="control-row style-select-row">
        <span>Preset style</span>
        <select value={selectedPresetId} onChange={(event) => onSelectPreset(event.target.value)}>
          <option value="custom">Custom / all controls</option>
          {presets.map((preset) => (
            <option key={preset.id} value={preset.id}>
              {preset.name} - {preset.category}
            </option>
          ))}
        </select>
      </label>

      <div className="style-summary">
        <span
          className="preset-swatch style-summary-swatch"
          style={selectedPreset ? getPresetSwatchStyle(selectedPreset) : undefined}
        />
        <div>
          <strong>{selectedPreset ? selectedPreset.name : "Custom / all controls"}</strong>
          <small>
            {selectedPreset
              ? selectedPreset.description
              : "Free mode keeps every parameter visible for experimental editing."}
          </small>
          <em>
            {selectedPreset
              ? "Only matching parameters are shown below."
              : "Use this when you want to combine effects freely."}
          </em>
        </div>
      </div>
    </section>
  );
}
