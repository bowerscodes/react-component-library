import { useState, useEffect } from 'react';

import { classBuilder } from '../../utils/Utils';
import Link from '../Link/Link';
import './BackToTop.scss';

export const DEFAULT_CLASS = 'back-to-top-link';
export const DEFAULT_TEXT = 'Back to top';

type Props = {
  classBlock?: string;
  classModifiers?: string | [];
  className?: string;
  linkText?: string;
  overrideShow?: boolean;
};

export const BackToTop = ({
  classBlock = DEFAULT_CLASS,
  classModifiers,
  className,
  linkText = DEFAULT_TEXT,
  overrideShow = false,
  ...attrs
}: Props) => {

  const [showBackToTop, setShowBackToTop] = useState(overrideShow);

  const classes = classBuilder(classBlock, classModifiers, className);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const yPosition = window.scrollY;

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      }
      else if (!overrideShow) {
        setShowBackToTop(false);
      };
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, [overrideShow, yPosition]);
  
  if (!showBackToTop) {
    return null;
  };

  return (
    <div className={classes('wrapper')}>
      <Link
        classBlock={classBlock}
        classModifiers={classModifiers}
        className={className}
        onClick={handleScrollToTop}
        {...attrs}
      >
        <svg 
          className={classes('arrow')}
          xmlns='http://www.w3.org/2000/svg'
          height='17'
          width='13'
          aria-hidden='true'
          focusable='false'
          viewBox='0 0 13 17'
        >
          <path d='M6.5 0L0 6.5 1.4 8l4-4v12.7h2V4l4.3 4L13 6.4z' />
        </svg>
        {linkText}
      </Link>
    </div>
  );
};

export default BackToTop;
