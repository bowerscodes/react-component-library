import React, {useEffect, useState } from 'react';

import { FormPage } from '../FormPage/FormPage';

import './FormBuilder.scss';

type Props = {
  title: string;
  pages: Array<any>;
};

export const FormBuilder = ({
  title,
  pages,
}: Props) => {
  
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState({});
    const [page, setPage] = useState(pages[currentPage]);
  
    useEffect(() => {
      setPage(pages[currentPage]);
    }, [currentPage, pages]);

    const handleChange = (event:any) => {
      console.log('event: ', event);
      const { name, value } = event.target;
      setData({
        ...data,
        [name]: value
      });
    };
    console.log(data)
  
    const onPageChange = (pageId: string) => {
      const pageIndex = pages.findIndex((page) => page.id === pageId);
      setCurrentPage(pageIndex);
    };
  
    return (
      <FormPage 
        page={page}
        onPageChange={onPageChange}
        onChange={handleChange}
      />
    )
};