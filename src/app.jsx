import React from 'react';

const App = () => {

  const test = async () => {
    await Promise.resolve('TESTASDS');
  }
  test();

  return <p>Hello world!</p>;
};

export default App;
