const hexColorPattern = /^#[0-9a-fA-F]{6}$/;

export default function ColorControl({ label, value, onChange, disabled = false }) {
  const pickerValue = hexColorPattern.test(value) ? value : "#ffffff";

  return (
    <label className={`control-row color-control ${disabled ? "is-disabled" : ""}`}>
      <span>{label}</span>
      <div className="color-field">
        <input
          aria-label={`${label} color picker`}
          type="color"
          value={pickerValue}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
        />
        <input
          type="text"
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </label>
  );
}
