import './index.css'

import App from './App.jsx'
import { PdfProvider } from './Pdfs/AdminDashBoard/PdfContextCurrent.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PdfProvider>
<App />
    </PdfProvider>

    
    
  </StrictMode>,
)
