import {ProjectDataProps} from "../../queries/types";
import {
    ProjectContentWrapper,
    ProjectDescriptionWrapper,
    ProjectImageWrapper,
    ProjectNameWrapper,
    ProjectWrapper,
    ProjectButton, ProjectButtonsWrapper
} from "./style";
import Image from "../image/image";
import {SkillsWrapper, SkillWrapper} from "../../styles/helpers";
import Github from "../icon/github";
import {useCallback, useEffect, useRef, useState} from "react";

interface ProjectProps {
    data: ProjectDataProps,
    onItemResize: (item:HTMLElement) => number;
}

export default function Project({data, onItemResize}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const handleResize = useCallback(() => {
        if(ref.current) {
            onItemResize(ref.current)
        }
    }, [ref, onItemResize])

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [handleResize])
    return (
        <ProjectWrapper ref={ref}>
            <div className="content">
                <ProjectImageWrapper>
                    <Image src={data.image.url}
                           alternativeText={data.image.alternativeText}
                           width={data.image.width}
                           height={data.image.height}
                    />
                </ProjectImageWrapper>
                <ProjectContentWrapper>
                    <ProjectNameWrapper dangerouslySetInnerHTML={{__html: data.name}}/>
                    <ProjectDescriptionWrapper dangerouslySetInnerHTML={{__html: data.description}}/>
                    <SkillsWrapper>
                        {
                            data.skills_technologies && data.skills_technologies.map((item, index) => (
                                <SkillWrapper key={index} $backgroundColor={item.background_color}
                                              $textColor={item.text_color}>{item.name}</SkillWrapper>))
                        }
                    </SkillsWrapper>
                </ProjectContentWrapper>
                <ProjectButtonsWrapper>
                    <ProjectButton $type="github" href={data.ui_link} target="_blank">
                        <Github/>
                    </ProjectButton>
                    <ProjectButton href={data.ui_link} target="_blank">
                        View UI
                    </ProjectButton>
                </ProjectButtonsWrapper>
            </div>
        </ProjectWrapper>
    )
}
