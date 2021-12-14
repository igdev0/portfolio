import {ProjectCollectionWrapper} from "./style";
import {ProjectDataProps} from "../../queries/types";
import Project from "./project";

interface ProjectCollectionProps {
    projects: ProjectDataProps[],
}

export default function ProjectCollection({projects}:ProjectCollectionProps) {
    return (
        <ProjectCollectionWrapper>
            {
                projects.map((item, index) => {
                    return (
                        <Project key={index} data={item}/>
                    )
                })
            }
        </ProjectCollectionWrapper>
    )
}
