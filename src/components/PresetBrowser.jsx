import { useEffect, useMemo, useState } from "react";
import { buttonPresets } from "../data/buttonPresets";

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
        : preset.config.shadow?.enabled
          ? `0 6px 18px ${preset.config.shadow.color}`
          : "none",
  };
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

export default function PresetBrowser({ onApplyPreset, selectedSource }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    setQuery("");
    setCategory("");
    setTag("");
  }, [selectedSource]);

  const categories = useMemo(
    () => uniqueSorted(buttonPresets.map((preset) => preset.category)),
    []
  );

  const tags = useMemo(
    () => uniqueSorted(buttonPresets.flatMap((preset) => preset.tags || [])),
    []
  );

  const filteredPresets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return buttonPresets.filter((preset) => {
      const searchable = [
        preset.name,
        preset.description,
        preset.category,
        preset.sourceName,
        ...(preset.tags || []),
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!normalizedQuery || searchable.includes(normalizedQuery)) &&
        (!category || preset.category === category) &&
        (!tag || preset.tags?.includes(tag)) &&
        (!selectedSource || preset.sourceName === selectedSource)
      );
    });
  }, [category, query, selectedSource, tag]);

  return (
    <section className="panel-block presets-block">
      <div className="section-heading">
        <h2>Presets</h2>
        <span>
          {filteredPresets.length}/{buttonPresets.length}
        </span>
      </div>

      <div className="preset-filters">
        <label className="control-row">
          <span>Search</span>
          <input
            type="text"
            value={query}
            placeholder="Name, tag, source..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <label className="control-row">
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">All categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="control-row">
          <span>Tag</span>
          <select value={tag} onChange={(event) => setTag(event.target.value)}>
            <option value="">All tags</option>
            {tags.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        {(query || category || tag || selectedSource) && (
          <button
            className="filter-reset-button"
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("");
              setTag("");
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="preset-list">
        {filteredPresets.map((preset) => (
          <button
            className="preset-item"
            type="button"
            key={preset.id}
            onClick={() => onApplyPreset(preset.config)}
            title={preset.licenseNote}
          >
            <span className="preset-swatch" style={getPresetSwatchStyle(preset)} />
            <span>
              <strong>{preset.name}</strong>
              <small>{preset.description}</small>
              <em>
                {preset.category} · {preset.sourceName}
              </em>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
