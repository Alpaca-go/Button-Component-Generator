import { useMemo, useState } from "react";
import { copyToClipboard } from "../utils/copyToClipboard";
import { generateHtmlCssCode } from "../utils/generateHtmlCssCode";
import { generateReactCssCode } from "../utils/generateReactCssCode";

const codeTabs = [
  { id: "html", label: "HTML + CSS" },
  { id: "react", label: "React + CSS" },
];

export default function CodePanel({ config }) {
  const [activeTab, setActiveTab] = useState("html");
  const [copyState, setCopyState] = useState("idle");

  const code = useMemo(() => {
    return activeTab === "html"
      ? generateHtmlCssCode(config)
      : generateReactCssCode(config);
  }, [activeTab, config]);

  const handleCopy = async () => {
    const copied = await copyToClipboard(code);
    setCopyState(copied ? "copied" : "failed");

    window.setTimeout(() => {
      setCopyState("idle");
    }, 1500);
  };

  return (
    <section className="code-panel">
      <div className="code-header">
        <div>
          <p className="eyebrow">Export</p>
          <h2>Generated code</h2>
        </div>
        <button className="primary-action" type="button" onClick={handleCopy}>
          {copyState === "copied" ? "Copied!" : copyState === "failed" ? "Copy failed" : "Copy Code"}
        </button>
      </div>

      <div className="code-tabs" role="tablist" aria-label="Code format">
        {codeTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <pre className="code-output">
        <code>{code}</code>
      </pre>
    </section>
  );
}
