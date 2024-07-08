import { render } from '@testing-library/react';
import { ThemeProvider } from './contexts/theme';
import App from './App';
import './index.css';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
