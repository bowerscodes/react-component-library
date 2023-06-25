import React from 'react';

import './Page.scss';


type Props = {
  id: string;
  title: React.ReactNode;
  components: any;
}

export const Page = ({
  id,
  title,
  components
}: Props) => {
  return(
    <div className="page" id={id}>
      {components}
    </div>
  )
};
