import React from 'react';
import PropTypes from 'prop-types';
import './heading.css';
import '../main.css';

export const Heading = ({ id, headingText, size, ...props }) => {
  const classes = (size) => {['heading', `heading--${size}`].join(' ')}
  if (size === 'xl') {
    return (
      <h1 
      className={classes()}
      id={id}
      {...props}
    >
      {headingText}
    </h1>
    )
  }
  if (size ==='l') {
    return (
      <h2 
          className={classes()}
          id={id}
          {...props}
        >
        {headingText}
      </h2>
    )
  }
  if (size === 'm') {
    return (
      <h3
        className={classes()}
        id={id}
        {...props}
      >
        {headingText}
      </h3>
    )
  }
  if (size === 's') {
    return (
      <h4
        className={classes()}
        id={id}
        {...props}
      >
        {headingText}
      </h4>
    )
  }
  if (size === 'xs') {
    return(
      <h5
        className={classes()}
        id={id}
        {...props}
      >
        {headingText}
      </h5>
    )
  }
  if (size === 'xxs') {
    return (
      <h6
        className={classes()}
        id={id}
        {...props}
      >
        {headingText}
      </h6>
    )
  }
};