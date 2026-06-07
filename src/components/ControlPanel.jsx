import ColorControl from "./controls/ColorControl";
import RangeControl from "./controls/RangeControl";
import SelectControl from "./controls/SelectControl";
import SwitchControl from "./controls/SwitchControl";
import TextControl from "./controls/TextControl";
import { animateUiSizes, animateUiVariants } from "../utils/animateUiButtonStyles";

const fontWeights = [
  { label: "Regular", value: 400 },
  { label: "Medium", value: 500 },
  { label: "Semi Bold", value: 600 },
  { label: "Bold", value: 700 },
  { label: "Extra Bold", value: 800 },
];

const fillDirections = [
  { label: "Left", value: "left" },
  { label: "Right", value: "right" },
  { label: "Top", value: "top" },
  { label: "Bottom", value: "bottom" },
  { label: "Center", value: "center" },
  { label: "Diagonal", value: "diagonal" },
];

const textSwapAnimations = [
  { label: "Fade", value: "fade" },
  { label: "Slide up", value: "slide-up" },
];

const loadingTypes = [
  { label: "Spinner", value: "spinner" },
  { label: "Dots", value: "dots" },
  { label: "Progress", value: "progress" },
];

const flipDirections = [
  { label: "Top", value: "top" },
  { label: "Right", value: "right" },
  { label: "Bottom", value: "bottom" },
  { label: "Left", value: "left" },
];

const themeModes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

const themeDirections = [
  { label: "Left to right", value: "ltr" },
  { label: "Right to left", value: "rtl" },
  { label: "Top to bottom", value: "ttb" },
  { label: "Bottom to top", value: "btt" },
];

export default function ControlPanel({ config, updateConfig, controlProfile, activeStyleName = "Custom" }) {
  const { size, typography, colors, border, shadow, interaction, content, state, effects, animateUi } = config;
  const showAllControls = !controlProfile;
  const canShow = (key) => showAllControls || Boolean(controlProfile[key]);
  const showContentExtras = canShow("icon") || canShow("textSwap");
  const showBackgroundExtras = canShow("gradient") || canShow("glass");
  const showBorderExtras = canShow("borderFlow") || canShow("drawBorder");
  const showClickControls = canShow("press") || canShow("threeD");
  const showMotionControls =
    canShow("neon") ||
    canShow("glow") ||
    canShow("pulse") ||
    canShow("autoShine") ||
    canShow("liquidGalaxy");
  const showAnimateControls =
    canShow("animateBase") ||
    canShow("animateCopy") ||
    canShow("animateStars") ||
    canShow("animateFlip") ||
    canShow("animateLiquid") ||
    canShow("animateRipple") ||
    canShow("animateParticles") ||
    canShow("animateTheme");

  const updateColorList = (path, colorsList, index, value) => {
    const nextColors = [...colorsList];
    nextColors[index] = value;
    updateConfig(path, nextColors);
  };

  return (
    <section className="panel-block controls-block">
      <div className="section-heading">
        <h2>Controls</h2>
        <span>{activeStyleName}</span>
      </div>

      <div className="control-tier control-tier-basic">
        <span>Level 1</span>
        <h3>Basic style</h3>
        <p>
          {showAllControls
            ? "Free mode shows every parameter."
            : "This style only shows matching parameters below."}
        </p>
      </div>

      <div className="control-group control-group-content">
        <h3>Text and icon</h3>
        <TextControl
          label="Button text"
          value={config.text}
          placeholder="Button label"
          onChange={(value) => updateConfig("text", value)}
        />
        {canShow("icon") && (
          <>
            <SwitchControl
              label="Icon slide"
              checked={content.iconEnabled}
              onChange={(checked) => updateConfig("content.iconEnabled", checked)}
            />
            <TextControl
              label="Icon text"
              value={content.iconText}
              onChange={(value) => updateConfig("content.iconText", value)}
              disabled={!content.iconEnabled}
            />
            <SelectControl
              label="Icon position"
              value={content.iconPosition}
              options={[
                { label: "Left", value: "left" },
                { label: "Right", value: "right" },
              ]}
              onChange={(value) => updateConfig("content.iconPosition", value)}
            />
          </>
        )}
        {canShow("textSwap") && (
          <>
            <SwitchControl
              label="Text swap"
              checked={content.textSwapEnabled}
              onChange={(checked) => updateConfig("content.textSwapEnabled", checked)}
            />
            <TextControl
              label="Hover text"
              value={content.hoverText}
              onChange={(value) => updateConfig("content.hoverText", value)}
              disabled={!content.textSwapEnabled}
            />
            <SelectControl
              label="Swap animation"
              value={content.textSwapAnimation}
              options={textSwapAnimations}
              onChange={(value) => updateConfig("content.textSwapAnimation", value)}
            />
          </>
        )}
        {!showContentExtras && (
          <p className="control-note">This style uses a simple text label.</p>
        )}
      </div>

      <div className="control-group control-group-basic">
        <h3>Size and typography</h3>
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
          max={104}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("size.height", value)}
        />
        <RangeControl
          label="Padding X"
          value={size.paddingX}
          min={8}
          max={84}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("size.paddingX", value)}
        />
        <RangeControl
          label="Padding Y"
          value={size.paddingY}
          min={4}
          max={44}
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
      </div>

      {showAnimateControls && (
        <>
      <div className="control-tier control-tier-components">
        <span>Level 4</span>
        <h3>Advanced component styles</h3>
        <p>Component-specific controls for the selected style.</p>
      </div>

      <div className="control-group control-group-animate">
        <h3>Animate UI Buttons</h3>
        <SwitchControl
          label="Use Animate UI style"
          checked={animateUi.enabled}
          onChange={(checked) => updateConfig("animateUi.enabled", checked)}
        />
        <SelectControl
          label="Variant"
          value={animateUi.variant}
          options={animateUiVariants}
          onChange={(value) => updateConfig("animateUi.variant", value)}
          disabled={!animateUi.enabled}
        />
        <SelectControl
          label="Size"
          value={animateUi.size}
          options={animateUiSizes}
          onChange={(value) => updateConfig("animateUi.size", value)}
          disabled={!animateUi.enabled}
        />
        {canShow("animateCopy") && (
          <>
            <SwitchControl
              label="Copy Button"
              checked={animateUi.copy.enabled}
              onChange={(checked) => updateConfig("animateUi.copy.enabled", checked)}
            />
            <SwitchControl
              label="Copied preview"
              checked={animateUi.copy.copiedPreview}
              onChange={(checked) => updateConfig("animateUi.copy.copiedPreview", checked)}
              disabled={!animateUi.copy.enabled}
            />
            <TextControl
              label="Copy icon"
              value={animateUi.copy.copyIcon}
              onChange={(value) => updateConfig("animateUi.copy.copyIcon", value)}
              disabled={!animateUi.copy.enabled}
            />
            <TextControl
              label="Success icon"
              value={animateUi.copy.successIcon}
              onChange={(value) => updateConfig("animateUi.copy.successIcon", value)}
              disabled={!animateUi.copy.enabled}
            />
          </>
        )}
        {canShow("animateStars") && (
          <>
            <SwitchControl
              label="GitHub Stars"
              checked={animateUi.githubStars.enabled}
              onChange={(checked) => updateConfig("animateUi.githubStars.enabled", checked)}
            />
            <TextControl
              label="Stars value"
              value={animateUi.githubStars.value}
              onChange={(value) => updateConfig("animateUi.githubStars.value", value)}
              disabled={!animateUi.githubStars.enabled}
            />
            <TextControl
              label="Repo label"
              value={animateUi.githubStars.logoText}
              onChange={(value) => updateConfig("animateUi.githubStars.logoText", value)}
              disabled={!animateUi.githubStars.enabled}
            />
          </>
        )}
        {canShow("animateFlip") && (
          <>
            <SwitchControl
              label="Flip Button"
              checked={animateUi.flip.enabled}
              onChange={(checked) => updateConfig("animateUi.flip.enabled", checked)}
            />
            <SelectControl
              label="Flip from"
              value={animateUi.flip.from}
              options={flipDirections}
              onChange={(value) => updateConfig("animateUi.flip.from", value)}
              disabled={!animateUi.flip.enabled}
            />
            <TextControl
              label="Front text"
              value={animateUi.flip.frontText}
              onChange={(value) => updateConfig("animateUi.flip.frontText", value)}
              disabled={!animateUi.flip.enabled}
            />
            <TextControl
              label="Back text"
              value={animateUi.flip.backText}
              onChange={(value) => updateConfig("animateUi.flip.backText", value)}
              disabled={!animateUi.flip.enabled}
            />
            <ColorControl
              label="Back color"
              value={animateUi.flip.backBackgroundColor}
              onChange={(value) => updateConfig("animateUi.flip.backBackgroundColor", value)}
              disabled={!animateUi.flip.enabled}
            />
          </>
        )}
        {canShow("animateLiquid") && (
          <>
            <SwitchControl
              label="Liquid Button"
              checked={animateUi.liquid.enabled}
              onChange={(checked) => updateConfig("animateUi.liquid.enabled", checked)}
            />
            <RangeControl
              label="Liquid fill height"
              value={animateUi.liquid.fillHeight}
              min={1}
              max={14}
              step={1}
              unit="px"
              onChange={(value) => updateConfig("animateUi.liquid.fillHeight", value)}
              disabled={!animateUi.liquid.enabled}
            />
            <RangeControl
              label="Liquid delay"
              value={animateUi.liquid.delay}
              min={100}
              max={1200}
              step={50}
              unit="ms"
              onChange={(value) => updateConfig("animateUi.liquid.delay", value)}
              disabled={!animateUi.liquid.enabled}
            />
            <ColorControl
              label="Liquid fill"
              value={animateUi.liquid.fillColor}
              onChange={(value) => updateConfig("animateUi.liquid.fillColor", value)}
              disabled={!animateUi.liquid.enabled}
            />
          </>
        )}
        {canShow("animateRipple") && (
          <>
            <SwitchControl
              label="Ripple Button"
              checked={animateUi.ripple.enabled}
              onChange={(checked) => updateConfig("animateUi.ripple.enabled", checked)}
            />
            <TextControl
              label="Ripple color"
              value={animateUi.ripple.color}
              onChange={(value) => updateConfig("animateUi.ripple.color", value)}
              disabled={!animateUi.ripple.enabled}
            />
            <RangeControl
              label="Ripple scale"
              value={animateUi.ripple.scale}
              min={2}
              max={20}
              step={1}
              onChange={(value) => updateConfig("animateUi.ripple.scale", value)}
              disabled={!animateUi.ripple.enabled}
            />
          </>
        )}
        {canShow("animateParticles") && (
          <>
            <SwitchControl
              label="Icon particles"
              checked={animateUi.iconParticles.enabled}
              onChange={(checked) => updateConfig("animateUi.iconParticles.enabled", checked)}
            />
            <TextControl
              label="Particle icon"
              value={animateUi.iconParticles.iconText}
              onChange={(value) => updateConfig("animateUi.iconParticles.iconText", value)}
              disabled={!animateUi.iconParticles.enabled}
            />
            <ColorControl
              label="Particle color"
              value={animateUi.iconParticles.particleColor}
              onChange={(value) => updateConfig("animateUi.iconParticles.particleColor", value)}
              disabled={!animateUi.iconParticles.enabled}
            />
          </>
        )}
        {canShow("animateTheme") && (
          <>
            <SwitchControl
              label="Theme toggler"
              checked={animateUi.themeToggler.enabled}
              onChange={(checked) => updateConfig("animateUi.themeToggler.enabled", checked)}
            />
            <SelectControl
              label="Theme mode"
              value={animateUi.themeToggler.mode}
              options={themeModes}
              onChange={(value) => updateConfig("animateUi.themeToggler.mode", value)}
              disabled={!animateUi.themeToggler.enabled}
            />
            <SelectControl
              label="Reveal direction"
              value={animateUi.themeToggler.direction}
              options={themeDirections}
              onChange={(value) => updateConfig("animateUi.themeToggler.direction", value)}
              disabled={!animateUi.themeToggler.enabled}
            />
            <ColorControl
              label="Reveal color"
              value={animateUi.themeToggler.revealColor}
              onChange={(value) => updateConfig("animateUi.themeToggler.revealColor", value)}
              disabled={!animateUi.themeToggler.enabled}
            />
          </>
        )}
      </div>
        </>
      )}

      <div className="control-tier control-tier-gradient">
        <span>Level 2</span>
        <h3>Gradient and surface</h3>
        <p>Color fills, animated gradients, glass, glow, and decorative visual layers.</p>
      </div>

      <div className="control-group control-group-background">
        <h3>Color and gradient</h3>
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
        {canShow("gradient") && (
          <>
            <SwitchControl
              label="Animated gradient"
              checked={effects.gradient.animatedEnabled}
              onChange={(checked) => updateConfig("effects.gradient.animatedEnabled", checked)}
            />
            <RangeControl
              label="Gradient angle"
              value={effects.gradient.direction}
              min={0}
              max={360}
              step={1}
              unit="deg"
              onChange={(value) => updateConfig("effects.gradient.direction", value)}
              disabled={!effects.gradient.animatedEnabled}
            />
            <RangeControl
              label="Gradient speed"
              value={effects.gradient.duration}
              min={1000}
              max={10000}
              step={250}
              unit="ms"
              onChange={(value) => updateConfig("effects.gradient.duration", value)}
              disabled={!effects.gradient.animatedEnabled}
            />
            <div className={`gradient-color-list ${!effects.gradient.animatedEnabled ? "is-disabled" : ""}`}>
              {effects.gradient.colors.map((color, index) => (
                <ColorControl
                  key={`gradient-${index}`}
                  label={`Gradient ${index + 1}`}
                  value={color}
                  onChange={(value) =>
                    updateColorList("effects.gradient.colors", effects.gradient.colors, index, value)
                  }
                  disabled={!effects.gradient.animatedEnabled}
                />
              ))}
            </div>
          </>
        )}
        {canShow("glass") && (
          <>
            <SwitchControl
              label="Liquid glass"
              checked={effects.glass.enabled}
              onChange={(checked) => updateConfig("effects.glass.enabled", checked)}
            />
            <RangeControl
              label="Glass opacity"
              value={effects.glass.opacity}
              min={0.04}
              max={0.4}
              step={0.01}
              onChange={(value) => updateConfig("effects.glass.opacity", value)}
              disabled={!effects.glass.enabled}
            />
            <RangeControl
              label="Glass blur"
              value={effects.glass.blur}
              min={0}
              max={32}
              step={1}
              unit="px"
              onChange={(value) => updateConfig("effects.glass.blur", value)}
              disabled={!effects.glass.enabled}
            />
          </>
        )}
        {!showBackgroundExtras && (
          <p className="control-note">This style uses a simple solid surface.</p>
        )}
      </div>

      <div className="control-group control-group-border">
        <h3>Border</h3>
        <RangeControl
          label="Width"
          value={border.width}
          min={0}
          max={8}
          step={1}
          unit="px"
          onChange={(value) => updateConfig("border.width", value)}
        />
        <ColorControl
          label="Color"
          value={border.color}
          onChange={(value) => updateConfig("border.color", value)}
        />
        {canShow("borderFlow") && (
          <>
            <SwitchControl
              label="Flow border"
              checked={effects.borderFlow.enabled}
              onChange={(checked) => updateConfig("effects.borderFlow.enabled", checked)}
            />
            <RangeControl
              label="Flow width"
              value={effects.borderFlow.width}
              min={1}
              max={8}
              step={1}
              unit="px"
              onChange={(value) => updateConfig("effects.borderFlow.width", value)}
              disabled={!effects.borderFlow.enabled}
            />
            <RangeControl
              label="Flow speed"
              value={effects.borderFlow.duration}
              min={1000}
              max={10000}
              step={250}
              unit="ms"
              onChange={(value) => updateConfig("effects.borderFlow.duration", value)}
              disabled={!effects.borderFlow.enabled}
            />
          </>
        )}
        {canShow("drawBorder") && (
          <>
            <SwitchControl
              label="Draw border"
              checked={effects.drawBorder.enabled}
              onChange={(checked) => updateConfig("effects.drawBorder.enabled", checked)}
            />
            <ColorControl
              label="Draw color"
              value={effects.drawBorder.color}
              onChange={(value) => updateConfig("effects.drawBorder.color", value)}
              disabled={!effects.drawBorder.enabled}
            />
          </>
        )}
        {!showBorderExtras && (
          <p className="control-note">Animated border controls are not used by this style.</p>
        )}
      </div>

      <div className="control-tier control-tier-interaction">
        <span>Level 3</span>
        <h3>Hover and click</h3>
        <p>State changes users feel directly: hover color, fill, shine, press depth, and 3D click feedback.</p>
      </div>

      <div className="control-group control-group-hover">
        <h3>Hover Effects</h3>
        <ColorControl
          label="Hover background"
          value={colors.hoverBackgroundColor}
          onChange={(value) => updateConfig("colors.hoverBackgroundColor", value)}
        />
        <RangeControl
          label="Hover scale"
          value={interaction.hoverScale}
          min={1}
          max={1.2}
          step={0.01}
          onChange={(value) => updateConfig("interaction.hoverScale", value)}
        />
        {canShow("shine") && (
          <>
            <SwitchControl
              label="Shine hover"
              checked={effects.shine.enabled}
              onChange={(checked) => updateConfig("effects.shine.enabled", checked)}
            />
            <TextControl
              label="Shine color"
              value={effects.shine.color}
              onChange={(value) => updateConfig("effects.shine.color", value)}
              disabled={!effects.shine.enabled}
            />
          </>
        )}
        {canShow("fillHover") && (
          <>
            <SwitchControl
              label="Fill hover"
              checked={effects.fillHover.enabled}
              onChange={(checked) => updateConfig("effects.fillHover.enabled", checked)}
            />
            <SelectControl
              label="Fill direction"
              value={effects.fillHover.direction}
              options={fillDirections}
              onChange={(value) => updateConfig("effects.fillHover.direction", value)}
            />
            <ColorControl
              label="Fill color"
              value={effects.fillHover.color}
              onChange={(value) => updateConfig("effects.fillHover.color", value)}
              disabled={!effects.fillHover.enabled}
            />
          </>
        )}
      </div>

      {showClickControls && (
      <div className="control-group control-group-click">
        <h3>Click Effects</h3>
        {canShow("press") && (
          <>
            <SwitchControl
              label="Press"
              checked={effects.press.enabled}
              onChange={(checked) => updateConfig("effects.press.enabled", checked)}
            />
            <RangeControl
              label="Press depth"
              value={effects.press.depth}
              min={0}
              max={12}
              step={1}
              unit="px"
              onChange={(value) => updateConfig("effects.press.depth", value)}
              disabled={!effects.press.enabled}
            />
            <RangeControl
              label="Press scale"
              value={effects.press.scale}
              min={0.9}
              max={1}
              step={0.01}
              onChange={(value) => updateConfig("effects.press.scale", value)}
              disabled={!effects.press.enabled}
            />
          </>
        )}
        {canShow("threeD") && (
          <>
            <SwitchControl
              label="3D press"
              checked={effects.threeD.enabled}
              onChange={(checked) => updateConfig("effects.threeD.enabled", checked)}
            />
            <RangeControl
              label="3D depth"
              value={effects.threeD.depth}
              min={1}
              max={16}
              step={1}
              unit="px"
              onChange={(value) => updateConfig("effects.threeD.depth", value)}
              disabled={!effects.threeD.enabled}
            />
            <ColorControl
              label="Bottom color"
              value={effects.threeD.bottomColor}
              onChange={(value) => updateConfig("effects.threeD.bottomColor", value)}
              disabled={!effects.threeD.enabled}
            />
          </>
        )}
      </div>
      )}

      {showMotionControls && (
        <>
      <div className="control-tier control-tier-motion">
        <span>Level 4</span>
        <h3>Advanced motion</h3>
        <p>Motion and glow controls used by the selected style.</p>
      </div>

      <div className="control-group control-group-motion">
        <h3>Glow and complex motion</h3>
        {canShow("neon") && (
          <>
            <SwitchControl
              label="Neon glow"
              checked={effects.neon.enabled}
              onChange={(checked) => updateConfig("effects.neon.enabled", checked)}
            />
            <TextControl
              label="Neon color"
              value={effects.neon.color}
              onChange={(value) => updateConfig("effects.neon.color", value)}
              disabled={!effects.neon.enabled}
            />
          </>
        )}
        {canShow("glow") && (
          <>
            <SwitchControl
              label="Glow"
              checked={effects.glow.enabled}
              onChange={(checked) => updateConfig("effects.glow.enabled", checked)}
            />
            <TextControl
              label="Glow color"
              value={effects.glow.color}
              onChange={(value) => updateConfig("effects.glow.color", value)}
              disabled={!effects.glow.enabled}
            />
          </>
        )}
        {canShow("pulse") && (
          <>
            <SwitchControl
              label="Pulse glow"
              checked={effects.pulse.enabled}
              onChange={(checked) => updateConfig("effects.pulse.enabled", checked)}
            />
            <RangeControl
              label="Pulse speed"
              value={effects.pulse.duration}
              min={1200}
              max={6000}
              step={100}
              unit="ms"
              onChange={(value) => updateConfig("effects.pulse.duration", value)}
              disabled={!effects.pulse.enabled}
            />
          </>
        )}
        {canShow("autoShine") && (
          <SwitchControl
            label="Auto shine"
            checked={effects.autoShine.enabled}
            onChange={(checked) => updateConfig("effects.autoShine.enabled", checked)}
          />
        )}
        {canShow("liquidGalaxy") && (
          <>
            <SwitchControl
              label="Liquid Galaxy"
              checked={effects.liquidGalaxy.enabled}
              onChange={(checked) => updateConfig("effects.liquidGalaxy.enabled", checked)}
            />
            <ColorControl
              label="Galaxy core"
              value={effects.liquidGalaxy.coreColor}
              onChange={(value) => updateConfig("effects.liquidGalaxy.coreColor", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <ColorControl
              label="Galaxy hover text"
              value={effects.liquidGalaxy.textHoverColor}
              onChange={(value) => updateConfig("effects.liquidGalaxy.textHoverColor", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <ColorControl
              label="Orbit A"
              value={effects.liquidGalaxy.orbitColorA}
              onChange={(value) => updateConfig("effects.liquidGalaxy.orbitColorA", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <ColorControl
              label="Orbit B"
              value={effects.liquidGalaxy.orbitColorB}
              onChange={(value) => updateConfig("effects.liquidGalaxy.orbitColorB", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <ColorControl
              label="Orbit C"
              value={effects.liquidGalaxy.orbitColorC}
              onChange={(value) => updateConfig("effects.liquidGalaxy.orbitColorC", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <TextControl
              label="Galaxy glow"
              value={effects.liquidGalaxy.glowColor}
              onChange={(value) => updateConfig("effects.liquidGalaxy.glowColor", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <RangeControl
              label="Galaxy blur"
              value={effects.liquidGalaxy.blur}
              min={4}
              max={42}
              step={1}
              unit="px"
              onChange={(value) => updateConfig("effects.liquidGalaxy.blur", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <RangeControl
              label="Galaxy opacity"
              value={effects.liquidGalaxy.opacity}
              min={0.2}
              max={1}
              step={0.05}
              onChange={(value) => updateConfig("effects.liquidGalaxy.opacity", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <RangeControl
              label="Galaxy speed"
              value={effects.liquidGalaxy.speed}
              min={1200}
              max={9000}
              step={100}
              unit="ms"
              onChange={(value) => updateConfig("effects.liquidGalaxy.speed", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <RangeControl
              label="Hover speed"
              value={effects.liquidGalaxy.hoverSpeed}
              min={600}
              max={5000}
              step={100}
              unit="ms"
              onChange={(value) => updateConfig("effects.liquidGalaxy.hoverSpeed", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <RangeControl
              label="Galaxy scale"
              value={effects.liquidGalaxy.scale}
              min={1}
              max={1.16}
              step={0.01}
              onChange={(value) => updateConfig("effects.liquidGalaxy.scale", value)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <SwitchControl
              label="Galaxy star"
              checked={effects.liquidGalaxy.starEnabled}
              onChange={(checked) => updateConfig("effects.liquidGalaxy.starEnabled", checked)}
              disabled={!effects.liquidGalaxy.enabled}
            />
            <TextControl
              label="Star text"
              value={effects.liquidGalaxy.starText}
              onChange={(value) => updateConfig("effects.liquidGalaxy.starText", value)}
              disabled={!effects.liquidGalaxy.enabled || !effects.liquidGalaxy.starEnabled}
            />
          </>
        )}
      </div>
        </>
      )}

      <div className="control-group control-group-state">
        <h3>State previews</h3>
        <SwitchControl
          label="Disabled preview"
          checked={state.disabledEnabled}
          onChange={(checked) => updateConfig("state.disabledEnabled", checked)}
        />
        <RangeControl
          label="Opacity"
          value={state.disabledOpacity}
          min={0.1}
          max={1}
          step={0.05}
          onChange={(value) => updateConfig("state.disabledOpacity", value)}
          disabled={!state.disabledEnabled}
        />
        <SwitchControl
          label="Loading support"
          checked={state.loadingEnabled}
          onChange={(checked) => updateConfig("state.loadingEnabled", checked)}
        />
        <SwitchControl
          label="Loading preview"
          checked={state.loadingPreview}
          onChange={(checked) => updateConfig("state.loadingPreview", checked)}
        />
        <SelectControl
          label="Loading type"
          value={state.loadingType}
          options={loadingTypes}
          onChange={(value) => updateConfig("state.loadingType", value)}
        />
        <TextControl
          label="Loading text"
          value={state.loadingText}
          onChange={(value) => updateConfig("state.loadingText", value)}
        />
      </div>
    </section>
  );
}
