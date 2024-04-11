import React, { useEffect, useRef, useState } from 'react';

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
  value: initialValue,
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

  const [ value, setValue ] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue])

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const classModifiers = [...toArray(_classModifiers), error && 'error'];
  const classes = classBuilder(classBlock, classModifiers, className);

  const cleanedAttrs = cleanHtmlAttributes(attrs);

  const rating: RatingOption[] = [];

  const internalOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
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
          ref={ref => inputRefs.current[i] = ref}
          type='radio'
          key={i}
          id={id}
          name={fieldId}
          value={stringNumber}
          checked={String(value) === stringNumber}
          onChange={internalOnChange}
          data-testid={`${fieldId}--${stringNumber}`}
          disabled={disabled}
          className={classes('input')}
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
    <div className={classes()} data-testid={fieldId} onChange={internalOnChange}>
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
