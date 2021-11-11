import { render, screen } from '@testing-library/react';
import BarbellPlatesCalculator from './App';

test('renders learn react link', () => {
  render(<BarbellPlatesCalculator />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
