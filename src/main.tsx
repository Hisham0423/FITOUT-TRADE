import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<<<<<<< HEAD
    <HashRouter>
=======
    <BrowserRouter basename={import.meta.env.BASE_URL}>
>>>>>>> e78260e2c2c44b7adcbc3c5065dceeeddd466f0e
      <App />
    </HashRouter>
  </React.StrictMode>,
)
