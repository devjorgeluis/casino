import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppContextProvider from './AppContext.jsx'
import './index.css'
import './css/Login.css'
import './css/Home.css'
import './css/D.css'
import './css/M.css'
import './css/Ganamos.css'
import './css/LiveCasino.css'
import './css/Slot.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AppContextProvider>
      <App className="normal-mode app-mode"/>
    </AppContextProvider>
  // </StrictMode>
)