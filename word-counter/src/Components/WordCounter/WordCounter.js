// import logo from './logo.svg';
import './WordCounter.css';
import React, { useState } from 'react';
import Counter from './Counter/Counter';

const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  return (
    <div className='container'>
      <h4>Responsive Paragraph Word Counter</h4>

      <Counter setWordCount={setWordCount}/>

      <div className='word-count'>
        <p>Word Count: {wordCount}</p>
      </div>

    </div>
  );
};

export default WordCounter;
