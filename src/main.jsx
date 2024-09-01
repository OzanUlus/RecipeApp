
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserPreferenceProvider from './context/UserPreferenceContext.jsx'



createRoot(document.getElementById('root')).render(
  <>
  
    <UserPreferenceProvider>
    <App />
    </UserPreferenceProvider>
    
  </>,
)
