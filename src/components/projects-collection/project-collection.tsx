import {ProjectCollectionWrapper} from "./style";
import {ProjectDataProps} from "../../queries/types";
import Project from "./project";
import {useCallback, useRef} from "react";
import styled from "styled-components";
import vars from "../../styles/vars";

interface ProjectCollectionProps {
    projects: ProjectDataProps[],
}

const NoProjectsFoundYet = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid ${vars.colors.wheat};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.main === 'light' ? vars.colors.black : vars.colors.white};

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1em;
  }

`

export default function ProjectCollection({projects}: ProjectCollectionProps) {
    const grid = useRef<HTMLElement>(null);
    const handleResize = useCallback((item: HTMLElement) => {
        if (!grid.current || !item) {
            return
        }
        const rowHeight = parseInt(window.getComputedStyle(grid.current).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid.current).getPropertyValue('grid-row-gap'));
        const content = item.querySelector('.content');
        // @ts-ignore
        content.style.height = "unset";
        // @ts-ignore
        item.style.gridRowEnd = `span ${Math.ceil((content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap))}`;
        // @ts-ignore
        content.style.height = "100%";
    }, [grid]);


    return (
        <>
            {
                projects.length === 0 && (
                    <NoProjectsFoundYet>
                        <h1>Is not you, is me. This section is in work in progress. 😳</h1>
                    </NoProjectsFoundYet>
                )
            }
            {/*@ts-ignore*/}
            <ProjectCollectionWrapper ref={grid}>
                {
                    projects.map((item, index) => {
                        return (
                            // @ts-ignore
                            <Project onItemResize={handleResize} key={index} data={item}/>
                        )
                    })
                }
            </ProjectCollectionWrapper>
        </>
    )
}
