import React from 'react';

import '../Page/Page.scss';
import { getComponents } from '../../utils/getComponents';


type Props = {
  page: {
    id: string;
    title: string;
    elements: any;
  };
};


export const FormPage = ({
  page
}: Props) => {

  var parsedData = JSON.parse(JSON.stringify(page));
  console.log('parsedData: ',parsedData)
  
  const components = getComponents(parsedData)
  
  return (
    <div className="page" id={page.id}>
      {components}
    </div>
  )
};
