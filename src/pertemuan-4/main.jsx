import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css' 
import DashboardWisata from './DashboardWisata'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardWisata />
  </StrictMode>,
)