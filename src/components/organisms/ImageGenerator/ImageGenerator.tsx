import React, { useCallback, useEffect, useState } from 'react';
import { Button, ErrorText, Card, Loader } from 'components/atoms';
import { TextArea } from 'components/molecules';
import { useLazyGetImageQuery } from 'store';

export const ImageGenerator: React.FC = (): JSX.Element => {
  const [promptInput, setPromptInput] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const [getImage, { isFetching, error }] = useLazyGetImageQuery();

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setGeneratedImage(null);
      const response = await getImage({ prompt: promptInput });

      if (response) {
        setGeneratedImage(URL.createObjectURL(response.data));
      }
    },
    [promptInput, getImage, setGeneratedImage]
  );

  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPromptInput(event.target.value);
    },
    [setPromptInput]
  );

  useEffect(() => {
    if (generatedImage) {
      window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [generatedImage]);

  return (
    <React.Fragment>
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex flex-col gap-4 justify-center items-center" onSubmit={handleSubmit}>
          <TextArea
            placeholder="Describe how the final image should look like"
            value={promptInput}
            onChange={handleInput}
            maxLength={350}
            height={14}
            required
          />
          <Button disabled={isFetching} type="submit">
            Generate Image
          </Button>
        </form>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? <Loader /> : null}
        {error ? <ErrorText>{error.toString()}</ErrorText> : null}
        {generatedImage ? (
          <div className="flex flex-col items-center gap-3 min-w-full">
            <Card className="flex flex-col items-center">
              <img src={generatedImage} alt="generated image" />
            </Card>
            <a href={generatedImage} download="image.png">
              <Button>Download Image</Button>
            </a>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};