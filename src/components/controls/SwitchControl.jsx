export default function SwitchControl({ label, checked, onChange, disabled = false }) {
  return (
    <label className={`control-row switch-control ${disabled ? "is-disabled" : ""}`}>
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
      />
    </label>
  );
}
