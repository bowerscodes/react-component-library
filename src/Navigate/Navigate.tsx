import React from 'react';

import { classBuilder } from '../utils/Utils';
import Button from '../Button'
import './Navigate.scss';

export interface NavigateProps {
  label?: string,
  navItems: Array<any>
  currentIndex: number;
  setCurrent: Function;
  scrollToTop?: boolean;
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
      id='' 
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
      id='' 
      type='primary' 
      className={classes('next')}
      disabled={currentIndex === navItems.length - 1}
      onClick={onClick}
    >
      {'Next >'}
    </Button>
  )
};

const Navigate = ({
  label,
  navItems,
  currentIndex,
  setCurrent,
  scrollToTop = true
}: NavigateProps) => {


  return (
    <nav className={classes()}>
      {label && <h6>{label}</h6>}
      <Back navItems={navItems} currentIndex={currentIndex} setCurrent={setCurrent} scrollToTop={scrollToTop}/>
      <Next navItems={navItems} currentIndex={currentIndex} setCurrent={setCurrent} scrollToTop={scrollToTop}/>
    </nav>
  );
};

export default Navigate;
