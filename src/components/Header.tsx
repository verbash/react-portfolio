import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function Header() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
            }}
        >
            <h3>David LiaBraaten | Web Developer</h3>
            <Button variant="contained">Hello world</Button>
        </Box>
    )
}
