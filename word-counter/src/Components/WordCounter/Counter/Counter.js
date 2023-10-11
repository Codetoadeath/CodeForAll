// import logo from './logo.svg';
import './Counter.css';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const Counter = ({ setWordCount }) => {

  const calculateWordCount = (inputText) => {
    const words = inputText.trim().split(/\s+/);
    setWordCount(words.length);

    // This regular expression (/\s+/), 
    // matches one or more white space characters 
    // (including spaces, tabs, and line breaks) as word separators
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    calculateWordCount(inputValue);
  };

  return (
    <div>
      <TextField
        label="Enter a Paragraph"
        multiline
        minRows={10}
        maxRows={30}
        variant="outlined"
        fullWidth
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Counter;
