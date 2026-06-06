export default function Header({ onReset }) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">UI Builder</p>
        <h1>Cool Button Generator</h1>
      </div>
      <button className="secondary-action" type="button" onClick={onReset}>
        Reset
      </button>
    </header>
  );
}
