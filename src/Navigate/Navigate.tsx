import React from 'react';

import { classBuilder } from '../utils/Utils';
import Button from '../Button'
import './Navigate.scss';

export interface NavigateProps {
  label?: string,
  navItems: Array<any>
  currentIndex: number;
  setCurrent: Function;
  submit?: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  scrollToTop?: boolean;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export const DEFAULT_CLASS = 'navigate';

const classes = classBuilder(DEFAULT_CLASS);

const Back = ({navItems, currentIndex, setCurrent, scrollToTop}: NavigateProps) => {
  
  const onClick = () => {
    if (currentIndex > 0) {
      scrollToTop && window.scrollTo({ top: 0, behavior: 'smooth'});
      setCurrent(currentIndex - 1);
    }
    else return;
  };
  
  return(
    <Button 
      id={`${DEFAULT_CLASS}__button--back`} 
      type='secondary' 
      className={classes('previous')} 
      onClick={onClick}
      disabled={currentIndex === 0}
    >
      {'< Back'}
    </Button>
  )
};

const Next = ({navItems, currentIndex, setCurrent, scrollToTop}: NavigateProps) => {
  
  const onClick = () => {
    if (currentIndex < navItems.length - 1) {
      scrollToTop && window.scrollTo({ top: 0, behavior: 'smooth'});
      setCurrent(currentIndex + 1);
    }
    else return;
  };
  
  return(
    <Button 
      id={`${DEFAULT_CLASS}__button--next`} 
      type='primary' 
      className={classes('next')}
      disabled={currentIndex === navItems.length - 1}
      onClick={onClick}
    >
      {'Next >'}
    </Button>
  )
};


const Submit = () => {
  
  return(
    <Button 
      id={`${DEFAULT_CLASS}__button--submit`} 
      type='submit' 
      className={classes('submit')}
    >
      {'Submit'}
    </Button>
  );
};


const Navigate = ({
  label,
  navItems,
  currentIndex,
  setCurrent,
  submit,
  scrollToTop = true
}: NavigateProps) => {

  const buttons = (currentIndex: number, navItems: Array<any>) => {
    return (
      <>
        {currentIndex > 0 && <Back navItems={navItems} currentIndex={currentIndex} setCurrent={setCurrent} scrollToTop={scrollToTop}/>}
        {currentIndex < navItems.length - 1 && <Next navItems={navItems} currentIndex={currentIndex} setCurrent={setCurrent} scrollToTop={scrollToTop}/>}
        {currentIndex === navItems.length - 1 && submit && <Submit />}
      </>
    );
  };


  return (
    <nav className={classes()}>
      {label && <h6>{label}</h6>}
      {buttons(currentIndex, navItems)}
    </nav>
  );
};

export default Navigate;
