import {AboutSectionTitle, Spacer} from "../../styles/helpers";
import {WorkExperienceWrapper} from "./style";
import {ComponentHistoryDataProps} from "../../queries/types";
import moment from "moment";

interface WorkExperienceProps {
    title: string;
    data: ComponentHistoryDataProps[]
}

export default function HistoryUi({data, title}: WorkExperienceProps) {
    return (
        <>
            <AboutSectionTitle dangerouslySetInnerHTML={{__html: title}}/>
            {
                data.map((item, index) => (
                    <WorkExperienceWrapper key={index}>
                        <div className="work-experience-date">
                            <span className="work-experience-date__started">{moment(item.started).year()}</span>
                            <span className="work-experience-date__ended">{moment(item.ended).year()}</span>
                        </div>
                        <div className="work-experience-bar"/>
                        <div className="work-experience-content" dangerouslySetInnerHTML={{__html: item.content}}/>
                    </WorkExperienceWrapper>
                ))
            }
            <Spacer top={2}/>
        </>
    )
}
