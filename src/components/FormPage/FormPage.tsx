import './FormPage.scss';
import BackToTop from '../BackToTop/BackToTop';
import Heading from '../Heading';
// import { useContext, useEffect, useState } from 'react';
// import React from 'react';


type Props = {
  page: {
    id: string;
    title: string;
    elements: any;
  };
  onPageChange?: Function;
  onChange: (event: any) => void;
};

// const formContext = React.createContext({})

export const FormPage = ({
  page,
  onChange
}: Props) => {

  // const parsedData = JSON.parse(JSON.stringify(page));

  // useEffect(() => {
  //   console.log('parsedData: ', parsedData)
  // }, [parsedData]);

  // const [ components, setComponents ] = useState<React.ReactNode>(null);
  // const context = useContext(parsedData);

  // useEffect (() => {
  //   setComponents(getComponents({...parsedData, onChange}))
  //   console.log('parsedData, onChange: ',parsedData, onChange)
  // }, [components, onChange, parsedData]);
  
  // const components = getComponents({...parsedData, onChange})
  
  return (
    <>
      <div className="page" id={page.id}>
        {page.title && <Heading headingText={page.title} />}
        {/* {components} */}
      </div>
      <BackToTop />
    </>
  )
};
