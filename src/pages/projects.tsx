import Page from "../components/page/page";
import {NextRequest} from "next/server";
import FetchProjects from "../queries/fetch-projects";
import {ProjectDataProps} from "../queries/types";
import ProjectCollection from "../components/projects-collection/project-collection";

const META = {
    title: "Dorultan Ianos | projects",
}

interface ProjectsPageDataProps {
    projects: ProjectDataProps[]
}
const demoData = [
    {
        "name": "1",
        "repo_link": "https://github.com/dorultan/tidy-carousel",
        "ui_link": "https://tidy-carousel.com/",
        "description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p>",
        "image": {
            "url": "/uploads/tidy_carousel_image_097a7d1188.png",
            "alternativeText": "",
            "width": 617,
            "height": 453,
            "__typename": "UploadFile"
        },
        "skills_technologies": [
            {
                "name": "Javascript",
                "text_color": "#000000",
                "background_color": "#EFD81D",
                "__typename": "SkillsTechnologies"
            }
        ],
        "__typename": "Projects"
    },
    {
        "name": "2",
        "repo_link": "https://github.com/dorultan/tidy-carousel",
        "ui_link": "https://tidy-carousel.com/",
        "description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p><p>There are many variations of passages of Lorem Ipsum available,</p>",
        "image": {
            "url": "/uploads/tidy_carousel_image_097a7d1188.png",
            "alternativeText": "",
            "width": 617,
            "height": 453,
            "__typename": "UploadFile"
        },
        "skills_technologies": [
            {
                "name": "Javascript",
                "text_color": "#000000",
                "background_color": "#EFD81D",
                "__typename": "SkillsTechnologies"
            }
        ],
        "__typename": "Projects"
    },
    {
        "name": "3",
        "repo_link": "https://github.com/dorultan/tidy-carousel",
        "ui_link": "https://tidy-carousel.com/",
        "description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p>",
        "image": {
            "url": "/uploads/tidy_carousel_image_097a7d1188.png",
            "alternativeText": "",
            "width": 617,
            "height": 453,
            "__typename": "UploadFile"
        },
        "skills_technologies": [
            {
                "name": "Javascript",
                "text_color": "#000000",
                "background_color": "#EFD81D",
                "__typename": "SkillsTechnologies"
            }
        ],
        "__typename": "Projects"
    },
    {
        "name": "4",
        "repo_link": "https://github.com/dorultan/tidy-carousel",
        "ui_link": "https://tidy-carousel.com/",
        "description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p>",
        "image": {
            "url": "/uploads/tidy_carousel_image_097a7d1188.png",
            "alternativeText": "",
            "width": 617,
            "height": 453,
            "__typename": "UploadFile"
        },
        "skills_technologies": [
            {
                "name": "Javascript",
                "text_color": "#000000",
                "background_color": "#EFD81D",
                "__typename": "SkillsTechnologies"
            }
        ],
        "__typename": "Projects"
    },
    {
        "name": "5",
        "repo_link": "https://github.com/dorultan/tidy-carousel",
        "ui_link": "https://tidy-carousel.com/",
        "description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p>",
        "image": {
            "url": "/uploads/tidy_carousel_image_097a7d1188.png",
            "alternativeText": "",
            "width": 617,
            "height": 453,
            "__typename": "UploadFile"
        },
        "skills_technologies": [
            {
                "name": "Javascript",
                "text_color": "#000000",
                "background_color": "#EFD81D",
                "__typename": "SkillsTechnologies"
            }
        ],
        "__typename": "Projects"
    },
    {
        "name": "6",
        "repo_link": "https://github.com/dorultan/tidy-carousel",
        "ui_link": "https://tidy-carousel.com/",
        "description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>",
        "image": {
            "url": "/uploads/tidy_carousel_image_097a7d1188.png",
            "alternativeText": "",
            "width": 617,
            "height": 453,
            "__typename": "UploadFile"
        },
        "skills_technologies": [
            {
                "name": "Javascript",
                "text_color": "#000000",
                "background_color": "#EFD81D",
                "__typename": "SkillsTechnologies"
            }
        ],
        "__typename": "Projects"
    },
    {
        "name": "Tidy carousel",
        "repo_link": "https://github.com/dorultan/tidy-carousel",
        "ui_link": "https://tidy-carousel.com/",
        "description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>",
        "image": {
            "url": "/uploads/tidy_carousel_image_097a7d1188.png",
            "alternativeText": "",
            "width": 617,
            "height": 453,
            "__typename": "UploadFile"
        },
        "skills_technologies": [
            {
                "name": "Javascript",
                "text_color": "#000000",
                "background_color": "#EFD81D",
                "__typename": "SkillsTechnologies"
            }
        ],
        "__typename": "Projects"
    },
    {
        "name": "Tidy carousel",
        "repo_link": "https://github.com/dorultan/tidy-carousel",
        "ui_link": "https://tidy-carousel.com/",
        "description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br>&nbsp;</p>",
        "image": {
            "url": "/uploads/tidy_carousel_image_097a7d1188.png",
            "alternativeText": "",
            "width": 617,
            "height": 453,
            "__typename": "UploadFile"
        },
        "skills_technologies": [
            {
                "name": "Javascript",
                "text_color": "#000000",
                "background_color": "#EFD81D",
                "__typename": "SkillsTechnologies"
            }
        ],
        "__typename": "Projects"
    },
];

export default function Projects({projects}: ProjectsPageDataProps) {
    console.log(projects)
    return (
        <Page meta={META} pageContentTitle={`Spare time snacks 👾`}>
            <ProjectCollection projects={demoData}/>
        </Page>
    );
}


export async function getStaticProps(context: NextRequest) {
    try {
        const {data: {projects}} = await FetchProjects();
        return {
            props: {
                projects
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                projects: []
            }
        }
    }
}
