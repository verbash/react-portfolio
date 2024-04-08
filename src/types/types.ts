export interface Project {
    title: string
    subtitle: string
    description: string
    img: string
    imgalt: string
    links: {
        site: string | URL | undefined
        github: string | URL | undefined
        youtube: string | URL | undefined
    }
    year: string
    tags: string[]
    media: {
        type: string | null // 'video' | 'image'
        src: string | null
        alt: string | null
    }[]
}

export interface Projects extends Array<Project> {}
