import { generateButtonCss } from "./generateButtonCss";
import { generateReactButtonJsx, getReactDefaultChildren } from "./generateButtonMarkup";

export function generateReactCssCode(config) {
  return `// Button.jsx
import "./Button.css";

export default function Button({
  children = "${getReactDefaultChildren(config)}",
  loading = false,
  disabled = false,
  onClick
}) {
  return (
    ${generateReactButtonJsx(config)}
  );
}

// Button.css
${generateButtonCss(config)}`;
}
