import React from 'react';
import './app.css';

const App = () => {
  const test = async () => {
    await Promise.resolve('TESTASDS');
  };
  test();

  return (
    <p>
      <i className='fad fa-cheeseburger' /> Hello world!
    </p>
  );
};

export default App;
