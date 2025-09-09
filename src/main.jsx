import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppContextProvider from './AppContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AppContextProvider>
      <App className="normal-mode app-mode"/>
    </AppContextProvider>
  // </StrictMode>
)