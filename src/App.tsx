import * as React from 'react'
import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Tabs from './components/Tabs'
import Header from './components/Header'

function App() {
    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
            <Container maxWidth="lg">
                <Header />
                <Tabs />
            </Container>
        </Box>
    )
}

export default App
