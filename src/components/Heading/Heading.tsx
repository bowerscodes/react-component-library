import React from 'react';

import './Heading.scss';

type Props = {
  id?: string;
  headingText: string;
  size?: "s" | "m" | "l" | "xl";
};

export const Heading = ({
  id,
  headingText,
  size = "m",
}: Props) => {
  return (
    <div className="heading-container">
      <h1 className={`heading heading--${size}`} id={id}>
        {headingText}
      </h1>
    </div>
  )
};