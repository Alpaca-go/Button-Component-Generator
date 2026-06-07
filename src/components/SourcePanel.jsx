import { buttonStyleSources } from "../data/buttonStyleSources";

export default function SourcePanel({ selectedSource, onSelectSource }) {
  return (
    <section className="panel-block source-block">
      <div className="section-heading">
        <h2>Sources</h2>
        <span>{buttonStyleSources.length}</span>
      </div>

      <div className="source-list">
        <button
          className={!selectedSource ? "source-item active" : "source-item"}
          type="button"
          onClick={() => onSelectSource("")}
        >
          <strong>All sources</strong>
          <small>Show every rebuilt preset</small>
        </button>

        {buttonStyleSources.map((source) => (
          <button
            className={selectedSource === source.name ? "source-item active" : "source-item"}
            type="button"
            key={source.id}
            onClick={() => onSelectSource(source.name)}
          >
            <strong>{source.name}</strong>
            <small>{source.category}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
