import ColorControl from "./controls/ColorControl";
import RangeControl from "./controls/RangeControl";
import SelectControl from "./controls/SelectControl";
import SwitchControl from "./controls/SwitchControl";
import TextControl from "./controls/TextControl";

const fontWeights = [
  { label: "Regular", value: 400 },
  { label: "Medium", value: 500 },
  { label: "Semi Bold", value: 600 },
  { label: "Bold", value: 700 },
  { label: "Extra Bold", value: 800 },
];

export default function ControlPanel({ config, updateConfig }) {
  return (
    <section className="panel-block controls-block">
      <div className="section-heading">
        <h2>Controls</h2>
      </div>

      <div className="control-group">
        <h3>Content</h3>
        <TextControl
          label="Button text"
          value={config.text}
          placeholder="Button label"
          onChange={(value) => updateConfig("text", value)}
        />
      </div>

      <div className="control-group">
        <h3>Size</h3>
        <SelectControl
          label="Width mode"
          value={config.widthMode}
          options={[
            { label: "Auto", value: "auto" },
            { label: "Fixed", value: "fixed" },
          ]}
          onChange={(value) => updateConfig("widthMode", value)}
        />
        {config.widthMode === "fixed" && (
          <RangeControl
            label="Width"
            value={config.width}
            min={96}
            max={360}
            step={1}
            unit="px"
            onChange={(value) => updateConfig("width", value)}
          />
        )}
        <RangeControl
          label="Height"
          value={config.height}
          min={32}
          max={96}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("height", value)}
        />
        <RangeControl
          label="Padding X"
          value={config.paddingX}
          min={8}
          max={72}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("paddingX", value)}
        />
        <RangeControl
          label="Padding Y"
          value={config.paddingY}
          min={4}
          max={40}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("paddingY", value)}
        />
        <RangeControl
          label="Radius"
          value={config.borderRadius}
          min={0}
          max={999}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("borderRadius", value)}
        />
      </div>

      <div className="control-group">
        <h3>Typography</h3>
        <RangeControl
          label="Font size"
          value={config.fontSize}
          min={10}
          max={32}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("fontSize", value)}
        />
        <SelectControl
          label="Font weight"
          value={config.fontWeight}
          options={fontWeights}
          onChange={(value) => updateConfig("fontWeight", Number(value))}
        />
        <RangeControl
          label="Letter spacing"
          value={config.letterSpacing}
          min={0}
          max={3}
          step={0.1}
          unit="px"
          onChange={(value) => updateConfig("letterSpacing", value)}
        />
      </div>

      <div className="control-group">
        <h3>Color</h3>
        <ColorControl
          label="Text"
          value={config.textColor}
          onChange={(value) => updateConfig("textColor", value)}
        />
        <ColorControl
          label="Background"
          value={config.backgroundColor}
          onChange={(value) => updateConfig("backgroundColor", value)}
        />
      </div>

      <div className="control-group">
        <h3>Border</h3>
        <RangeControl
          label="Width"
          value={config.borderWidth}
          min={0}
          max={8}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("borderWidth", value)}
        />
        <ColorControl
          label="Color"
          value={config.borderColor}
          onChange={(value) => updateConfig("borderColor", value)}
        />
      </div>

      <div className="control-group">
        <h3>Shadow</h3>
        <SwitchControl
          label="Enable shadow"
          checked={config.shadowEnabled}
          onChange={(checked) => updateConfig("shadowEnabled", checked)}
        />
        <RangeControl
          label="Y offset"
          value={config.shadowY}
          min={-12}
          max={36}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("shadowY", value)}
          disabled={!config.shadowEnabled}
        />
        <RangeControl
          label="Blur"
          value={config.shadowBlur}
          min={0}
          max={64}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("shadowBlur", value)}
          disabled={!config.shadowEnabled}
        />
        <TextControl
          label="Shadow color"
          value={config.shadowColor}
          placeholder="rgba(0, 0, 0, 0.25)"
          onChange={(value) => updateConfig("shadowColor", value)}
          disabled={!config.shadowEnabled}
        />
      </div>

      <div className="control-group">
        <h3>Hover</h3>
        <SwitchControl
          label="Enable hover"
          checked={config.hoverEnabled}
          onChange={(checked) => updateConfig("hoverEnabled", checked)}
        />
        <ColorControl
          label="Hover background"
          value={config.hoverBackgroundColor}
          onChange={(value) => updateConfig("hoverBackgroundColor", value)}
          disabled={!config.hoverEnabled}
        />
        <ColorControl
          label="Hover text"
          value={config.hoverTextColor}
          onChange={(value) => updateConfig("hoverTextColor", value)}
          disabled={!config.hoverEnabled}
        />
        <RangeControl
          label="Hover scale"
          value={config.hoverScale}
          min={1}
          max={1.2}
          step={0.01}
          onChange={(value) => updateConfig("hoverScale", value)}
          disabled={!config.hoverEnabled}
        />
      </div>

      <div className="control-group">
        <h3>Disabled</h3>
        <SwitchControl
          label="Disabled preview"
          checked={config.disabledEnabled}
          onChange={(checked) => updateConfig("disabledEnabled", checked)}
        />
        <RangeControl
          label="Opacity"
          value={config.disabledOpacity}
          min={0.1}
          max={1}
          step={0.05}
          onChange={(value) => updateConfig("disabledOpacity", value)}
          disabled={!config.disabledEnabled}
        />
      </div>
    </section>
  );
}
