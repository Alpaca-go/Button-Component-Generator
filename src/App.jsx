import { useEffect, useState } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import PreviewPanel from "./components/PreviewPanel";
import CodePanel from "./components/CodePanel";
import StyleSelector from "./components/StyleSelector";
import { defaultButtonConfig } from "./config/defaultButtonConfig";
import { buttonPresets } from "./data/buttonPresets";
import { mergeConfig, normalizeButtonConfig, setConfigValue } from "./utils/configTransforms";
import { loadConfig, saveConfig } from "./utils/localStorage";
import { getPresetBasePatch, getPresetControlProfile } from "./utils/presetControlProfile";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/control-panel.css";
import "./styles/preview-panel.css";
import "./styles/code-panel.css";

export default function App() {
  const [buttonConfig, setButtonConfig] = useState(() =>
    normalizeButtonConfig(loadConfig())
  );
  const [selectedPresetId, setSelectedPresetId] = useState("custom");

  const selectedPreset =
    selectedPresetId === "custom"
      ? null
      : buttonPresets.find((preset) => preset.id === selectedPresetId) || null;
  const controlProfile = getPresetControlProfile(selectedPreset);

  useEffect(() => {
    saveConfig(buttonConfig);
  }, [buttonConfig]);

  const updateConfig = (key, value) => {
    setButtonConfig((prev) => setConfigValue(prev, key, value));
  };

  const selectPreset = (presetId) => {
    setSelectedPresetId(presetId);

    if (presetId === "custom") {
      return;
    }

    const preset = buttonPresets.find((item) => item.id === presetId);
    if (!preset) {
      return;
    }

    const cleanBase = mergeConfig(defaultButtonConfig, getPresetBasePatch());
    setButtonConfig(mergeConfig(cleanBase, preset.config));
  };

  const resetConfig = () => {
    setSelectedPresetId("custom");
    setButtonConfig(defaultButtonConfig);
  };

  return (
    <div className="app">
      <Header onReset={resetConfig} />

      <main className="app-layout">
        <aside className="left-panel" aria-label="Button controls">
          <StyleSelector
            presets={buttonPresets}
            selectedPreset={selectedPreset}
            selectedPresetId={selectedPresetId}
            onSelectPreset={selectPreset}
          />
          <ControlPanel
            config={buttonConfig}
            updateConfig={updateConfig}
            controlProfile={controlProfile}
            activeStyleName={selectedPreset?.name || "Custom"}
          />
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
