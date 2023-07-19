import '../Page/Page.scss';
import { getComponents } from '../../utils/getComponents';
import { Heading } from '../Heading/Heading';


type Props = {
  page: {
    id: string;
    title: string;
    elements: any;
  };
  onPageChange?: Function;
  onChange: (event: any) => void;
};


export const FormPage = ({
  page,
  onChange
}: Props) => {

  const parsedData = JSON.parse(JSON.stringify(page));
  
  const components = getComponents({...parsedData, onChange})
  
  return (
    <div className="page" id={page.id}>
      {page.title && <Heading headingText={page.title}/>}
      {components}
    </div>
  )
};
