// import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, // no need to use <Router/> in app.jsx because this is here 
)
