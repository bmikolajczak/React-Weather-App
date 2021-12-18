import { render, screen } from '@testing-library/react';
import App from './App';


test('renders header of the app', () => {
  render(<App />);
  const headerElement = screen.getByText(/react weather app/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Select element',()=>{
  render(<App/>);
  const selectElement = screen.getByText('Choose your city');
  expect(selectElement).toBeInTheDocument();
})


