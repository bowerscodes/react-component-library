import React from 'react';

import './Page.scss';


type Props = {
  id: string;
  components: Array<React.ReactNode>
}

export const Page = ({
  id,
  components
}: Props) => {
  return(
    <div className="page" id={id}>
      {components}
    </div>
  )
};
