import { useEffect, useState } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import PreviewPanel from "./components/PreviewPanel";
import CodePanel from "./components/CodePanel";
import PresetList from "./components/PresetList";
import { defaultButtonConfig } from "./config/defaultButtonConfig";
import { loadConfig, saveConfig } from "./utils/localStorage";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/control-panel.css";
import "./styles/preview-panel.css";
import "./styles/code-panel.css";

export default function App() {
  const [buttonConfig, setButtonConfig] = useState(() => ({
    ...defaultButtonConfig,
    ...(loadConfig() || {}),
  }));

  useEffect(() => {
    saveConfig(buttonConfig);
  }, [buttonConfig]);

  const updateConfig = (key, value) => {
    setButtonConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const applyPreset = (presetConfig) => {
    setButtonConfig({
      ...defaultButtonConfig,
      ...presetConfig,
    });
  };

  const resetConfig = () => {
    setButtonConfig(defaultButtonConfig);
  };

  return (
    <div className="app">
      <Header onReset={resetConfig} />

      <main className="app-layout">
        <aside className="left-panel" aria-label="Button controls">
          <PresetList onApplyPreset={applyPreset} />
          <ControlPanel config={buttonConfig} updateConfig={updateConfig} />
        </aside>

        <section className="center-panel" aria-label="Button preview">
          <PreviewPanel config={buttonConfig} />
        </section>

        <aside className="right-panel" aria-label="Generated code">
          <CodePanel config={buttonConfig} />
        </aside>
      </main>
    </div>
  );
}
