import * as React from 'react'
import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Tabs from './components/Tabs'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: '1',
            }}
        >
            <Header />
            <Tabs />
            <Footer />
        </Box>
    )
}

export default App
