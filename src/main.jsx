import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/Users/ynako/react-app/my_project/src/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
