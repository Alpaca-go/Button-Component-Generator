export default function SwitchControl({ label, checked, onChange }) {
  return (
    <label className="control-row switch-control">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
    </label>
  );
}
