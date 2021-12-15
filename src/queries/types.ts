export interface ImageDataProps {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
}
export interface ComponentHistoryDataProps {
    id: number;
    content: string;
    started: string;
    ended: string;
}

export interface AboutDataProps {
    id: number;
    introduction: string;
    work_experience: ComponentHistoryDataProps[];
    education: ComponentHistoryDataProps[];
    work_experience_title: string;
    education_title: string;
    avatar: ImageDataProps;
    published_at: string
}


export interface SkillDataProps {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    background_color: string;
    text_color: string;
}

export interface ProjectDataProps {
    name: string;
    id: number;
    description: string;
    image: ImageDataProps;
    ui_link: string;
    repo_link: string;
    skills_technologies: SkillDataProps[]
}
