import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';

test('App renders', () => {
  const app = renderer.create(<App />);
  const tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});
