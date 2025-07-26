import { PanelSectionRow, SliderField } from "@decky/ui";
import { ConfigurationData } from "../config/configSchema";
import { MULTIPLIER } from "../config/generatedConfigSchema";

interface FpsMultiplierControlProps {
  config: ConfigurationData;
  onConfigChange: (fieldName: keyof ConfigurationData, value: boolean | number | string) => Promise<void>;
}

export function FpsMultiplierControl({
  config,
  onConfigChange
}: FpsMultiplierControlProps) {
  const getMultiplierLabel = (value: number) => {
    if (value < 2) return "OFF";
    return `${value}X`;
  };

  return (
    <PanelSectionRow>
      <SliderField
        label={`FPS Multiplier (${getMultiplierLabel(config.multiplier)})`}
        description="Frame generation multiplier - higher values generate more frames but use more resources"
        value={config.multiplier}
        min={1}
        max={4}
        step={1}
        onChange={(value) => onConfigChange(MULTIPLIER, value)}
      />
    </PanelSectionRow>
  );
}
