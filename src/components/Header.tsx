import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'

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
            <Avatar alt="David LiaBraaten" src="/image/profile-192x192.png" />
        </Box>
    )
}
