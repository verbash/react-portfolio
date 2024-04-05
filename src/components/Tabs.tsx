import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import About from './About'
import Certification from './Certs'
import Projects from './Projects'
import Container from '@mui/material/Container'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function Header() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const tabContent = [
        { id: 0, content: 'Projects', component: <Projects /> },
        { id: 1, content: 'Certification', component: <Certification /> },
        { id: 2, content: 'About Me', component: <About /> },
    ]

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {tabContent.map((tab) => (
                        <Tab label={tab.content} {...a11yProps(tab.id)} />
                    ))}
                </Tabs>
            </Box>
            {tabContent.map((tab) => (
                <CustomTabPanel value={value} index={tab.id}>
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'left',
                        }}
                    >
                        {tab.component}
                    </Container>
                </CustomTabPanel>
            ))}
        </Box>
    )
}
