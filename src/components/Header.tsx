import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
// import davidProfileImage from '/public/android-chrome-192x192.png'

export default function Header() {
    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                p: 2,
                width: '100%',
                backgroundColor: '#fff',
                zIndex: 999,
                borderBottom: '1px solid lightgray',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add lower dropshadow
            }}
        >
            <h3>David LiaBraaten | Web Developer</h3>
            <Button variant="contained">Hello world</Button>
            <Avatar alt="David LiaBraaten" src="/android-chrome-192x192.png" />
        </Box>
    )
}
