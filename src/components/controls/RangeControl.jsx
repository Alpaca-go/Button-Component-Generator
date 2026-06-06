export default function RangeControl({
  label,
  value,
  min,
  max,
  step,
  unit = "",
  onChange,
  disabled = false,
}) {
  const numericValue = Number(value);

  return (
    <label className={`control-row range-control ${disabled ? "is-disabled" : ""}`}>
      <span>{label}</span>
      <div className="range-field">
        <input
          type="range"
          value={numericValue}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        <div className="number-field">
          <input
            type="number"
            value={numericValue}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            onChange={(event) => onChange(Number(event.target.value))}
          />
          {unit && <small>{unit}</small>}
        </div>
      </div>
    </label>
  );
}
