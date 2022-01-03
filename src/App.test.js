import { render, screen } from '@testing-library/react';
import App from './App';


test('TestApp', () => {
  render(<App />);
  const a = 'a'
  expect(a).toEqual('a')
});
