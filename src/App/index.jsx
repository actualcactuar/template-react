import React from 'react';
import './app.css';

const App = () => {
  const test = async () => {
    await Promise.resolve('TESTASDS');
  };
  test();

  return (
    <p>
      <i className='fad fa-cheeseburger' /> Care for a burger?
    </p>
  );
};

export default App;
