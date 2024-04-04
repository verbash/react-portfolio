import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'

const rootElement = document.getElementById('root')
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <React.StrictMode>
            <CssBaseline />
            <App />
        </React.StrictMode>
    )
}
