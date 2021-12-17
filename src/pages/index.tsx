import Page from "../components/page/page";
import FetchAbout from "../queries/fetch-about";
import {AboutDataProps, SkillDataProps} from "../queries/types";
import FetchSkills from "../queries/fetch-skills";
import AboutIntro from "../components/about-intro/about-intro";
import HistoryUi from "../components/history-ui/history-ui";
import {useEffect, useRef, useState} from "react";

const META = {
    title: "Dorultan Ianos | about",
}

interface HomePageData {
    aboutMe: AboutDataProps,
    skillsTechnologies: SkillDataProps[]
}

export default function Home({skillsTechnologies, aboutMe}: HomePageData) {
    const size = useRef<DOMRectList>();
    const xy = useRef<{ x?: number, y?: number }>({x: 0, y: 0});
    const [xyState, setXy] = useState<{ x?: number, y?: number }>({});
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        setXy({x: size.current?.item(0)?.x, y: size.current?.item(0)?.y});
    }, [size]);

    return (
        <Page meta={META} pageContentTitle={`Digital developer 🚀`}>
            <span ref={spanRef} style={{color: "white"}} >{JSON.stringify(xyState)}</span>
            <AboutIntro intro={aboutMe.introduction} skills={skillsTechnologies}/>
            <HistoryUi title={aboutMe.work_experience_title} data={aboutMe.work_experience}/>
            <HistoryUi title={aboutMe.education_title} data={aboutMe.education}/>
            <div style={{height: ".5em"}}/>
        </Page>
    );
}

export async function getStaticProps() {
    const {data: {aboutMe}} = await FetchAbout();
    const {data: {skillsTechnologies}} = await FetchSkills();
    return {
        props: {
            aboutMe,
            skillsTechnologies,
        }
    }
}
