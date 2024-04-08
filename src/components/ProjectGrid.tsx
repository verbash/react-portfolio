import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ProjectCard from './ProjectCard'
import projects from '../assets/projectdata.json'
import { Project, Projects } from '../types/types'

const ProjectGrid: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                gap: '20px',
            }}
        >
            {(projects as Projects).map((project: Project, index: number) => (
                <ProjectCard key={index} {...project} />
            ))}
        </Box>
    )
}

export default ProjectGrid
