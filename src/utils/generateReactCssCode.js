import { escapeJsString } from "./codeHelpers";
import { generateButtonCss } from "./generateButtonCss";

export function generateReactCssCode(config) {
  return `// Button.jsx
import "./Button.css";

export default function Button({ children = "${escapeJsString(config.text)}", disabled = false, onClick }) {
  return (
    <button className="generated-button" disabled={disabled} onClick={onClick}>
      <span className="generated-button__content">
        {children}
      </span>
    </button>
  );
}

// Button.css
${generateButtonCss(config)}`;
}
