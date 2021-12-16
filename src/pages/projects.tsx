import Page from "../components/page/page";
import FetchProjects from "../queries/fetch-projects";
import {ProjectDataProps} from "../queries/types";
import ProjectCollection from "../components/projects-collection/project-collection";

const META = {
    title: "Dorultan Ianos | projects",
}

interface ProjectsPageDataProps {
    projects: ProjectDataProps[]
}

export default function Projects({projects}: ProjectsPageDataProps) {
    return (
        <Page meta={META} pageContentTitle={`Spare time snacks 👾`}>
            <ProjectCollection projects={projects}/>
        </Page>
    );
}


export async function getStaticProps() {
    try {
        const {data: {projects}} = await FetchProjects();
        return {
            props: {
                projects
            }
        }
    } catch (e) {
        return {
            props: {
                projects: []
            }
        }
    }
}
