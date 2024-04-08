import React from 'react'
import Container from '@mui/material/Container'
import ProjectGrid from './ProjectGrid'

const Projects: React.FC = () => {
    return (
        <Container
            sx={{
                width: '100%',
                paddingBottom: '20px',
            }}
        >
            <h2>Projects</h2>
            <ProjectGrid />
        </Container>
    )
}

export default Projects
