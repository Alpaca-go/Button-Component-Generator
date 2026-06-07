import { generateButtonCss } from "./generateButtonCss";
import {
  generateReactButtonJsx,
  getReactDefaultChildren,
  getReactExtraProps,
} from "./generateButtonMarkup";

export function generateReactCssCode(config) {
  return `// Button.jsx
import "./Button.css";

export default function Button({
  children = "${getReactDefaultChildren(config)}",
  loading = false,
  disabled = false,
${getReactExtraProps(config)}
  onClick
}) {
  return (
    ${generateReactButtonJsx(config)}
  );
}

// Button.css
${generateButtonCss(config)}`;
}
