import Page from "../components/page/page";
import FetchAbout from "../queries/fetch-about";
import {AboutDataProps, SkillDataProps} from "../queries/types";
import FetchSkills from "../queries/fetch-skills";
import AboutIntro from "../components/about-intro/about-intro";
import HistoryUi from "../components/history-ui/history-ui";

const META = {
    title: "Dorultan Ianos | about",
}

interface HomePageData {
    aboutMe: AboutDataProps,
    skillsTechnologies: SkillDataProps[]
}

export default function Home({skillsTechnologies, aboutMe}: HomePageData) {
    return (
        <Page meta={META} pageContentTitle="Digital developer 🚀">
            <AboutIntro intro={aboutMe.introduction} skills={skillsTechnologies}/>
            <HistoryUi title={aboutMe.work_experience_title} data={aboutMe.work_experience}/>
            <HistoryUi title={aboutMe.education_title} data={aboutMe.education}/>
            <div style={{height: ".5em"}}/>
        </Page>
    );
}

export async function getStaticProps() {
    try {
        const {data: {aboutMe}} = await FetchAbout();
        const {data: {skillsTechnologies}} = await FetchSkills();

        return {
            props: {
                aboutMe,
                skillsTechnologies,
            }
        }

    } catch (e) {
        return {
            props: {
                aboutMe: {},
                skillsTechnologies: [],
            }
        }
    }
}
