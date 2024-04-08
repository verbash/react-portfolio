import React from 'react'
import {
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
} from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import WorkIcon from '@mui/icons-material/Work'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import { Email } from '@mui/icons-material'

// davidliabraaten@gmail.com, LinkedIn, GitHub
const Contact: React.FC = () => {
    return (
        <Container>
            <h2>Contact</h2>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                <ListItem
                    button
                    component="a"
                    href="mailto:davidliabraaten@gmail.com"
                >
                    <ListItemAvatar>
                        <Avatar>
                            <Email />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Email"
                        secondary="davidliabraaten@gmail.com"
                    />
                </ListItem>
                <ListItem
                    button
                    component="a"
                    href="https://www.linkedin.com/in/david-liabraaten/"
                >
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="LinkedIn"
                        secondary="www.linkedin.com/in/david-liabraaten/"
                    />
                </ListItem>
                <ListItem
                    button
                    component="a"
                    href="https://github.com/verbash"
                >
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="GitHub"
                        secondary="https://github.com/verbash"
                    />
                </ListItem>
            </List>
        </Container>
    )
}

export default Contact
