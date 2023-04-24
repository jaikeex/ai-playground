import React, { useCallback, useState } from 'react';
import { PageTitle, ToggleButton } from 'components/atoms';
import { ToggleButtonGroup } from 'components/molecules';
import { ImageGenerator, Summarizer, Translator } from 'components/organisms';

export const MainTemplate: React.FC = (): JSX.Element => {
  const [activeFeature, setActiveFeature] = useState<string>('summarizer');

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
      <PageTitle>
        Welcome to my multifunctional AI playground! Easily translate text, generate summaries of articles, and create
        images, all in one place!
      </PageTitle>
      <ToggleButtonGroup defaultValue="summarizer" onChange={handleFeatureChange} className="mt-16">
        <ToggleButton value="translator">Translator</ToggleButton>
        <ToggleButton value="summarizer">Article Summarizer</ToggleButton>
        <ToggleButton value="image-generator">Image generator</ToggleButton>
      </ToggleButtonGroup>
      <section className="mt-12 w-full max-w-xl">{featureComponent}</section>
    </div>
  );
};
