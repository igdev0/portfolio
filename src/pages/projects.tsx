import Page from "../components/page/page";
import {NextRequest} from "next/server";
import FetchProjects from "../queries/fetch-projects";
import {ProjectDataProps} from "../queries/types";

const META = {
  title: "Dorultan Ianos | projects",
}

interface ProjectsPageDataProps {
    projects: ProjectDataProps[]
}

export default function Projects({projects}:ProjectsPageDataProps) {
    console.log(projects)
    return (
        <Page meta={META} pageContentTitle={`Projects`}>

        </Page>
    );
}


export async function getStaticProps(context: NextRequest) {
    const {data: {projects}} = await FetchProjects();
    return {
        props: {
            projects
        }
    }
}
