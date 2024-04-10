import React, { useEffect, useRef } from 'react';

import { classBuilder, toArray, cleanHtmlAttributes } from '../utils/Utils';
import './Rating.scss';

export interface RatingProps {
  fieldId: string;
  disabled?: boolean;
  error?: string;
  value?: any;
  onChange?: Function;
  rateOutOf?: number;
  showLegend?: boolean;
  lowerBoundText?: string;
  medianText?: string;
  upperBoundText?: string;
  classBlock?: string;
  classModifiers?: string[];
  className?: string;
};

export type RatingOption = {
  radio: JSX.Element;
  label: React.ReactElement;
};


export const DEFAULT_CLASS = 'rating';


const Rating = ({
  fieldId,
  disabled = false,
  error,
  value,
  onChange,
  rateOutOf = 10,
  showLegend = true,
  lowerBoundText,
  medianText,
  upperBoundText,
  classBlock = DEFAULT_CLASS,
  classModifiers: _classModifiers = [],
  className,
  ...attrs
}: RatingProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = value;
    };
  }, [inputRef, value]);

  const classModifiers = [...toArray(_classModifiers), error && 'error'];
  const classes = classBuilder(classBlock, classModifiers, className);

  const cleanedAttrs = cleanHtmlAttributes(attrs);

  const rating: RatingOption[] = [];

  const internalOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function' && target.name === fieldId) {
      onChange({
        target: {
          name: fieldId,
          value: target.value
        }
      });
    }
  };

  for (let i = 1; i <= rateOutOf; i++) {
    let stringNumber = (i).toString();
    let id = `${fieldId}--${stringNumber}`
    let option = {
      radio: (
        <input
          ref={inputRef}
          type='radio'
          key={i}
          id={id}
          data-testid={`${fieldId}--${stringNumber}`}
          name={fieldId}
          value={stringNumber}
          disabled={disabled}
          className={classes('input')}
          onChange={internalOnChange}
          {...cleanedAttrs}
        />
      ), 
      label: (
        <label 
          htmlFor={id} 
          className={classes('label')}
        >
        {`${stringNumber}`}
      </label>
      )
    };
    rating.push(option);
  };

  const legend = (
    <div className={classes('legend')} {...cleanedAttrs}>
      <div className={classes('legend--lower')}>
        {lowerBoundText ? lowerBoundText : 'Strongly Disagree'}
      </div>
      {rateOutOf > 7 && (
        <div className={classes('legend--median')}>
          {medianText ? medianText : 'Undecided'}
        </div>
      )}
      <div className={classes('legend--upper')}>
        {upperBoundText ? upperBoundText : 'Strongly Agree'}
      </div>
    </div>
  );
  

  return (
    <div className={classes()} data-testid={fieldId}>
      <div className={classes('container')} >
        {rating.map((option, index) => (
          <div key={index} className={classes('item')}>
            {option.radio}
            {option.label}
          </div>
        ))}
      </div>
      {showLegend && legend}
    </div>
  );
};

Rating.DisplayName = 'Rating';

export default Rating;
