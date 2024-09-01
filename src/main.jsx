import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserPreferenceProvider from './context/UserPreferenceContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
    <UserPreferenceProvider>
    <App />
    </UserPreferenceProvider>
    </AuthProvider>
  </>,
)
