import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PostContextProvider from './Context/PostContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <PostContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
   </PostContextProvider>
  </React.StrictMode>,
)
