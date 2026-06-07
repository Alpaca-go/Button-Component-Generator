export default function SelectControl({ label, value, options, onChange, disabled = false }) {
  return (
    <label className={`control-row select-control ${disabled ? "is-disabled" : ""}`}>
      <span>{label}</span>
      <select
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
