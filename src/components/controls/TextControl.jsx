export default function TextControl({ label, value, onChange, placeholder, disabled = false }) {
  return (
    <label className="control-row text-control">
      <span>{label}</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
