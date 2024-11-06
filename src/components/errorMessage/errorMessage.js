import React from 'react';
import './errorMessage.css';
import image from './error.jpg';

const ErrorMessage = () => {
  return (
    <>
      <img src={image} alt='error' />
      <span>Something went wrong</span>
    </>
  );
};

export default ErrorMessage;
