import {ProjectCollectionWrapper} from "./style";
import {ProjectDataProps} from "../../queries/types";
import Project from "./project";
import {useCallback, useRef} from "react";

interface ProjectCollectionProps {
    projects: ProjectDataProps[],
}

export default function ProjectCollection({projects}: ProjectCollectionProps) {
    const grid = useRef<HTMLElement>(null);
    const handleResize = useCallback((item: HTMLElement) => {
        if (!grid.current || !item) {
            return
        }
        const rowHeight = parseInt(window.getComputedStyle(grid.current).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid.current).getPropertyValue('grid-row-gap'));
        const content = item.querySelector('.content');
        content.style.height = "unset";
        item.style.gridRowEnd = `span ${Math.ceil((content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))}`;
        content.style.height = "100%";
    }, [grid]);


    return (
        <ProjectCollectionWrapper ref={grid}>
            {
                projects.map((item, index) => {
                    return (
                        <Project onItemResize={handleResize} key={index} data={item}/>
                    )
                })
            }
        </ProjectCollectionWrapper>
    )
}
