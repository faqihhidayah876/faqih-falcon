import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import FormPendaftaran from './FormPendaftaran.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormPendaftaran />
  </StrictMode>,
)
