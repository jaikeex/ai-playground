import { Hero } from 'components/Hero';
import { ToggleButton } from 'components/atoms';
import { ToggleButtonGroup } from 'components/molecules';
import { ImageGenerator } from 'components/organisms/ImageGenerator';
import { Summarizer } from 'components/organisms/Summarizer';
import { Translator } from 'components/organisms/Translator';
import React, { useCallback, useState } from 'react';

export const MainTemplate: React.FC = (): JSX.Element => {
  const [activeFeature, setActiveFeature] = useState<string>('translator');

  const handleFeatureChange = useCallback(
    (feature: string) => {
      setActiveFeature(feature);
    },
    [setActiveFeature]
  );

  let featureComponent;
  switch (activeFeature) {
    case 'translator':
      featureComponent = <Translator />;
      break;
    case 'summarizer':
      featureComponent = <Summarizer />;
      break;
    case 'image-generator':
      featureComponent = <ImageGenerator />;
      break;
    default:
      featureComponent = <Translator />;
  }

  return (
    <div className="flex flex-col items-center">
      <Hero />
      <ToggleButtonGroup defaultValue="translator" onChange={handleFeatureChange} className="mt-8">
        <ToggleButton value="translator">Translator</ToggleButton>
        <ToggleButton value="summarizer">Summarizer</ToggleButton>
        <ToggleButton value="image-generator">Image generator</ToggleButton>
      </ToggleButtonGroup>
      <section className="mt-12 w-full max-w-xl">{featureComponent}</section>
    </div>
  );
};
