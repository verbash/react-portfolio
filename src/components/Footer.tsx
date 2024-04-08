import React from 'react'
import { Box, Grid, IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { X } from '@mui/icons-material'

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#CCC',
                color: '#111',
                padding: '2rem',
                width: '100%',
                textAlign: 'left',
            }}
        >
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="left"
            >
                <Grid item xs={12} sm={5} lg={3}>
                    {/* /* Contact Info */}
                    <p>David LiaBraaten | Web Developer</p>
                    <a href="mailto:davidliabraaten@gmail.com">
                        davidliabraaten@gmail.com
                    </a>
                </Grid>
                <Grid item xs={12} sm={5} lg={3}>
                    {/* Social Icons */}
                    <IconButton
                        href={'https://www.linkedin.com/in/david-liabraaten/'}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        href={'https://github.com/verbash/react-portfolio'}
                    >
                        <GitHubIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
