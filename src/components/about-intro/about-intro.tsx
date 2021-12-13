import {SkillDataProps} from "../../queries/types";
import {ContentWrapper, SkillsWrapper, SkillWrapper} from "../../styles/helpers";
import {AboutIntroWrapper} from "./style";

interface AboutIntroProps {
    intro: string;
    skills: SkillDataProps[],
}

export default function AboutIntro({intro, skills}: AboutIntroProps) {

    return (
        <AboutIntroWrapper>
            <ContentWrapper dangerouslySetInnerHTML={{__html: intro}}/>
            <SkillsWrapper>
                {
                    skills.map((item, index) => (<SkillWrapper $backgroundColor={item.background_color} $textColor={item.text_color} key={index}>{item.name}</SkillWrapper>))
                }
            </SkillsWrapper>
        </AboutIntroWrapper>
    )
}
