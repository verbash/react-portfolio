import React from 'react'
import { Box, Grid, IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { X } from '@mui/icons-material'

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#666',
                color: '#fff',
                padding: '2rem',
                width: '100%',
            }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                    {/* Contact Info */}
                    <p>Contact Info</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* Social Icons */}
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
