import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pricing from "/components/Pricing.jsx"
import About from "/components/About.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Pricing /> */}
    {/* <About /> */}
  </StrictMode>,
)
