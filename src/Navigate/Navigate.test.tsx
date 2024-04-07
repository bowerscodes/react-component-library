import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';

import Navigate, { DEFAULT_CLASS } from './Navigate';

describe('Navigate', () => {
  const checkSetup = (container: any, classBlock = DEFAULT_CLASS) => {
    const navigate = screen.getByRole('navigation');
    expect(navigate).toBeInTheDocument();
    expect(navigate).toHaveClass(classBlock);
    return navigate;
  };

  window.scrollTo = jest.fn();

  it('renders a navigation component', () => {
    const label = 'Navigate';
    const navItems = [
      { id: 'item-1' },
      { id: 'item-2' },
      { id: 'item-3' },
      { id: 'item-4' },
    ];
    let currentIndex = 0;
    const setCurrent = jest.fn();

    const { container } = render(
      <Navigate 
        label={label} 
        navItems={navItems} 
        currentIndex={currentIndex} 
        setCurrent={setCurrent}
      />
    );

    checkSetup(container);
  });

  it('handles a click on the previous button', () => {
    const navItems = [
      { id: 'item-1' },
      { id: 'item-2' },
      { id: 'item-3' },
      { id: 'item-4' },
    ];
    let currentIndex = 1;
    const setCurrent = jest.fn();
    
    const { container } = render(
      <Navigate 
        navItems={navItems}
        currentIndex={currentIndex}
        setCurrent={setCurrent}
      />
    );

    checkSetup(container);
    
    const previousButton = screen.getByText('< Back');
    expect(previousButton).toBeInTheDocument();
    
    previousButton.click();

    expect(setCurrent).toHaveBeenCalledTimes(1);
    expect(setCurrent).toHaveBeenCalledWith(0);
  });

  it('handles a click on the next button', () => {
    const navItems = [
      { id: 'item-1' },
      { id: 'item-2' },
      { id: 'item-3' },
      { id: 'item-4' },
    ];
    let currentIndex = 1;
    const setCurrent = jest.fn();
    
    const { container } = render(
      <Navigate 
        navItems={navItems}
        currentIndex={currentIndex}
        setCurrent={setCurrent}
      />
    );

    checkSetup(container);
    
    const nextButton = screen.getByText('Next >');
    expect(nextButton).toBeInTheDocument();
    
    nextButton.click();

    expect(setCurrent).toHaveBeenCalledTimes(1);
    expect(setCurrent).toHaveBeenCalledWith(2);
  });

  it('disables the previous button when at the start', () => {
    const navItems = [
      { id: 'item-1' },
      { id: 'item-2' },
      { id: 'item-3' },
      { id: 'item-4' },
    ];
    let currentIndex = 0;
    const setCurrent = jest.fn();
    
    const { container } = render(
      <Navigate 
        navItems={navItems}
        currentIndex={currentIndex}
        setCurrent={setCurrent}
      />
    );

    checkSetup(container);
    
    const previousButton = screen.queryByText('< Back');
    expect(previousButton).not.toBeInTheDocument();
  });

  it('disables the next button when at the end', () => {
    const navItems = [
      { id: 'item-1' },
      { id: 'item-2' },
      { id: 'item-3' },
      { id: 'item-4' },
    ];
    let currentIndex = 3;
    const setCurrent = jest.fn();
    
    const { container } = render(
      <Navigate 
        navItems={navItems}
        currentIndex={currentIndex}
        setCurrent={setCurrent}
      />
    );

    checkSetup(container);
    
    const nextButton = screen.queryByText('Next >');
    expect(nextButton).not.toBeInTheDocument();
  });
  
});
