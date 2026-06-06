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
  const { size, typography, colors, border, shadow, interaction, effects } = config;

  const updateGradientColor = (index, value) => {
    const nextColors = [...effects.gradientColors];
    nextColors[index] = value;
    updateConfig("effects.gradientColors", nextColors);
  };

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
          value={size.widthMode}
          options={[
            { label: "Auto", value: "auto" },
            { label: "Fixed", value: "fixed" },
          ]}
          onChange={(value) => updateConfig("size.widthMode", value)}
        />
        {size.widthMode === "fixed" && (
          <RangeControl
            label="Width"
            value={size.width}
            min={96}
            max={360}
            step={1}
            unit="px"
            onChange={(value) => updateConfig("size.width", value)}
          />
        )}
        <RangeControl
          label="Height"
          value={size.height}
          min={32}
          max={96}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("size.height", value)}
        />
        <RangeControl
          label="Padding X"
          value={size.paddingX}
          min={8}
          max={72}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("size.paddingX", value)}
        />
        <RangeControl
          label="Padding Y"
          value={size.paddingY}
          min={4}
          max={40}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("size.paddingY", value)}
        />
        <RangeControl
          label="Radius"
          value={size.borderRadius}
          min={0}
          max={999}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("size.borderRadius", value)}
        />
      </div>

      <div className="control-group">
        <h3>Typography</h3>
        <RangeControl
          label="Font size"
          value={typography.fontSize}
          min={10}
          max={32}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("typography.fontSize", value)}
        />
        <SelectControl
          label="Font weight"
          value={typography.fontWeight}
          options={fontWeights}
          onChange={(value) => updateConfig("typography.fontWeight", Number(value))}
        />
        <RangeControl
          label="Letter spacing"
          value={typography.letterSpacing}
          min={0}
          max={3}
          step={0.1}
          unit="px"
          onChange={(value) => updateConfig("typography.letterSpacing", value)}
        />
      </div>

      <div className="control-group">
        <h3>Color</h3>
        <ColorControl
          label="Text"
          value={colors.textColor}
          onChange={(value) => updateConfig("colors.textColor", value)}
        />
        <ColorControl
          label="Background"
          value={colors.backgroundColor}
          onChange={(value) => updateConfig("colors.backgroundColor", value)}
        />
      </div>

      <div className="control-group">
        <h3>Border</h3>
        <RangeControl
          label="Width"
          value={border.borderWidth}
          min={0}
          max={8}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("border.borderWidth", value)}
        />
        <ColorControl
          label="Color"
          value={border.borderColor}
          onChange={(value) => updateConfig("border.borderColor", value)}
        />
      </div>

      <div className="control-group">
        <h3>Shadow</h3>
        <SwitchControl
          label="Enable shadow"
          checked={shadow.enabled}
          onChange={(checked) => updateConfig("shadow.enabled", checked)}
        />
        <RangeControl
          label="Y offset"
          value={shadow.y}
          min={-12}
          max={36}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("shadow.y", value)}
          disabled={!shadow.enabled}
        />
        <RangeControl
          label="Blur"
          value={shadow.blur}
          min={0}
          max={64}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("shadow.blur", value)}
          disabled={!shadow.enabled}
        />
        <TextControl
          label="Shadow color"
          value={shadow.color}
          placeholder="rgba(0, 0, 0, 0.25)"
          onChange={(value) => updateConfig("shadow.color", value)}
          disabled={!shadow.enabled}
        />
      </div>

      <div className="control-group">
        <h3>Hover</h3>
        <SwitchControl
          label="Enable hover"
          checked={colors.hoverEnabled}
          onChange={(checked) => updateConfig("colors.hoverEnabled", checked)}
        />
        <ColorControl
          label="Hover background"
          value={colors.hoverBackgroundColor}
          onChange={(value) => updateConfig("colors.hoverBackgroundColor", value)}
          disabled={!colors.hoverEnabled}
        />
        <ColorControl
          label="Hover text"
          value={colors.hoverTextColor}
          onChange={(value) => updateConfig("colors.hoverTextColor", value)}
          disabled={!colors.hoverEnabled}
        />
        <RangeControl
          label="Hover scale"
          value={interaction.hoverScale}
          min={1}
          max={1.2}
          step={0.01}
          onChange={(value) => updateConfig("interaction.hoverScale", value)}
          disabled={!colors.hoverEnabled}
        />
      </div>

      <div className="control-group effects-group">
        <h3>Effects</h3>
        <SwitchControl
          label="Press effect"
          checked={effects.pressEnabled}
          onChange={(checked) => updateConfig("effects.pressEnabled", checked)}
        />
        <RangeControl
          label="Press depth"
          value={effects.pressDepth}
          min={0}
          max={12}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("effects.pressDepth", value)}
          disabled={!effects.pressEnabled}
        />
        <RangeControl
          label="Press scale"
          value={effects.pressScale}
          min={0.9}
          max={1}
          step={0.01}
          onChange={(value) => updateConfig("effects.pressScale", value)}
          disabled={!effects.pressEnabled}
        />

        <SwitchControl
          label="Shine sweep"
          checked={effects.shineEnabled}
          onChange={(checked) => updateConfig("effects.shineEnabled", checked)}
        />
        <TextControl
          label="Shine color"
          value={effects.shineColor}
          placeholder="rgba(255, 255, 255, 0.55)"
          onChange={(value) => updateConfig("effects.shineColor", value)}
          disabled={!effects.shineEnabled}
        />
        <RangeControl
          label="Shine width"
          value={effects.shineWidth}
          min={10}
          max={120}
          step={1}
          unit="%"
          onChange={(value) => updateConfig("effects.shineWidth", value)}
          disabled={!effects.shineEnabled}
        />
        <RangeControl
          label="Shine duration"
          value={effects.shineDuration}
          min={200}
          max={2000}
          step={50}
          unit="ms"
          onChange={(value) => updateConfig("effects.shineDuration", value)}
          disabled={!effects.shineEnabled}
        />
        <RangeControl
          label="Shine angle"
          value={effects.shineAngle}
          min={-45}
          max={45}
          step={1}
          unit="deg"
          onChange={(value) => updateConfig("effects.shineAngle", value)}
          disabled={!effects.shineEnabled}
        />

        <SwitchControl
          label="Animated gradient"
          checked={effects.animatedGradientEnabled}
          onChange={(checked) => updateConfig("effects.animatedGradientEnabled", checked)}
        />
        <RangeControl
          label="Gradient angle"
          value={effects.gradientDirection}
          min={0}
          max={360}
          step={1}
          unit="deg"
          onChange={(value) => updateConfig("effects.gradientDirection", value)}
          disabled={!effects.animatedGradientEnabled}
        />
        <RangeControl
          label="Gradient speed"
          value={effects.gradientDuration}
          min={1000}
          max={10000}
          step={250}
          unit="ms"
          onChange={(value) => updateConfig("effects.gradientDuration", value)}
          disabled={!effects.animatedGradientEnabled}
        />
        <div className={`gradient-color-list ${!effects.animatedGradientEnabled ? "is-disabled" : ""}`}>
          {effects.gradientColors.map((color, index) => (
            <ColorControl
              key={`gradient-${index}`}
              label={`Gradient ${index + 1}`}
              value={color}
              onChange={(value) => updateGradientColor(index, value)}
              disabled={!effects.animatedGradientEnabled}
            />
          ))}
        </div>

        <SwitchControl
          label="Glow"
          checked={effects.glowEnabled}
          onChange={(checked) => updateConfig("effects.glowEnabled", checked)}
        />
        <TextControl
          label="Glow color"
          value={effects.glowColor}
          placeholder="rgba(124, 58, 237, 0.45)"
          onChange={(value) => updateConfig("effects.glowColor", value)}
          disabled={!effects.glowEnabled}
        />
        <RangeControl
          label="Glow blur"
          value={effects.glowBlur}
          min={0}
          max={80}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("effects.glowBlur", value)}
          disabled={!effects.glowEnabled}
        />
      </div>

      <div className="control-group">
        <h3>Disabled</h3>
        <SwitchControl
          label="Disabled preview"
          checked={interaction.disabledEnabled}
          onChange={(checked) => updateConfig("interaction.disabledEnabled", checked)}
        />
        <RangeControl
          label="Opacity"
          value={interaction.disabledOpacity}
          min={0.1}
          max={1}
          step={0.05}
          onChange={(value) => updateConfig("interaction.disabledOpacity", value)}
          disabled={!interaction.disabledEnabled}
        />
      </div>
    </section>
  );
}
