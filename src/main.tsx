import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeContext from './contexts/ThemeContext';
import { ScreenProvider } from './contexts/ScreenSizeContext/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContext>
      <ScreenProvider>
        <App />
      </ScreenProvider>
    </ThemeContext>
  </React.StrictMode>,
)
