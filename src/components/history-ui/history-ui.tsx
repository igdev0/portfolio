import {AboutSectionTitle, MetaInfoWrapper, Spacer, WorkExperienceDescription} from "../../styles/helpers";
import {WorkExperienceWrapper} from "./style";
import {ComponentHistoryDataProps} from "../../queries/types";
import moment from "moment";
import Expandable from "../expandable/expandable";

interface WorkExperienceProps {
    title: string;
    data: ComponentHistoryDataProps[]
}

export default function HistoryUi({data, title}: WorkExperienceProps) {
    return (
        <>
            <AboutSectionTitle dangerouslySetInnerHTML={{__html: title}}/>
            {
                data.sort((a, b) => !!a.ended ? 1 : moment(a.ended).isBefore(b.ended) ? 1 : -1).map((item, index) => (
                    <WorkExperienceWrapper key={index}>
                        <MetaInfoWrapper>
                            <span>📅 {item.ended ? moment(item.ended).format("MMMM YYYY") : "On going 😳"}</span>
                            <span>🕗 {moment().diff(moment(item.started), 'months')} Months</span>
                            <span>🏢 {item.place}</span>
                            <span>🌎 {item.location}</span>
                            <span
                                dangerouslySetInnerHTML={{__html: item.short_description ?? "No description yet 😳"}}/>
                            {
                                item.content && (
                                    <Expandable maxHeight={150}>
                                        <WorkExperienceDescription dangerouslySetInnerHTML={{__html: item.content}}/>
                                    </Expandable>
                                )
                            }
                        </MetaInfoWrapper>
                    </WorkExperienceWrapper>
                ))
            }
            <Spacer top={2}/>
        </>
    )
}
