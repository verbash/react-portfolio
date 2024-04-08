import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Slider from '@mui/material/Slider'

import GitHub from '@mui/icons-material/GitHub'
import OpenInBrowser from '@mui/icons-material/OpenInBrowser'
import YouTubeIcon from '@mui/icons-material/YouTube'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import { Project } from '../types/types'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

export default function RecipeReviewCard(project: Project) {
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Box>
            <Card sx={{ width: 345 }} variant="outlined">
                <CardHeader
                    // action={
                    //     <IconButton aria-label="settings">
                    //         <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={project.title}
                    subheader={project.subtitle}
                />
                <Box
                    sx={{
                        height: { xs: 'auto', sm: 345 },
                        width: 345,
                        backgroundColor: 'lightgray',
                    }}
                    display="flex"
                    justifyContent="center"
                >
                    <CardMedia
                        component="img"
                        image={project.img}
                        alt={project.imgalt}
                        sx={{ objectFit: 'contain' }}
                    />
                </Box>
                <CardContent>
                    <Box display="flex" overflow="auto">
                        {project.tags.map((tag, index) => (
                            <Chip key={index} label={tag} />
                        ))}
                    </Box>
                </CardContent>

                <CardActions disableSpacing>
                    {project.links.site && (
                        <IconButton
                            aria-label="open website in new tab"
                            title="Open Website"
                        >
                            <OpenInBrowser
                                onClick={() =>
                                    window.open(project.links.site, '_blank')
                                }
                            />
                        </IconButton>
                    )}
                    {project.links.github && (
                        <IconButton
                            aria-label="github link"
                            title="GitHub Repository"
                        >
                            <GitHub
                                onClick={() =>
                                    window.open(project.links.github, '_blank')
                                }
                            />
                        </IconButton>
                    )}
                    {project.links.youtube && (
                        <IconButton
                            aria-label="youtube link"
                            title="YouTube Video"
                        >
                            <YouTubeIcon
                                onClick={() =>
                                    window.open(project.links.youtube, '_blank')
                                }
                            />
                        </IconButton>
                    )}
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{project.description}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    )
}
