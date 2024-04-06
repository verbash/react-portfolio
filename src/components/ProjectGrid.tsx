import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ProjectCard from './ProjectCard'

const ProjectGrid: React.FC = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com',
            code: 'https://www.github.com',
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com',
            code: 'https://www.github.com',
        },
        {
            title: 'Project 3',
            description: 'Description of Project 3',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com',
            code: 'https://www.github.com',
        },
        {
            title: 'Project 4',
            description: 'Description of Project 4',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com',
            code: 'https://www.github.com',
        },
    ]
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                gap: '20px',
            }}
        >
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    // title={project.title}
                    // description={project.description}
                    // img={project.img}
                    // link={project.link}
                    // code={project.code}
                />
            ))}
        </Box>
    )
}

export default ProjectGrid
