import React from 'react';

export type PageTitleProps = React.PropsWithChildren;

export const PageTitle: React.FC<PageTitleProps> = ({ children = null }): JSX.Element => (
  <div className="w-full flex justify-center items-center flex-col">
    <h1 className="text-center sm:text-6xl">
      <span className="orange_gradient">AI</span> Playground
    </h1>
    <h2 className="desc">{children}</h2>
  </div>
);
