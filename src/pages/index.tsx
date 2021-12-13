import Page from "../components/page/page";
import {NextRequest} from "next/server";
import FetchAbout from "../queries/fetch-about";
import {AboutDataProps, SkillDataProps} from "../queries/types";
import FetchSkills from "../queries/fetch-skills";

const META = {
  title: "Dorultan Ianos | about",
}

interface HomePageData {
    aboutMe: AboutDataProps,
    skillsTechnologies: SkillDataProps[]
}

export default function Home({skillsTechnologies}:HomePageData) {
    return (
        <Page meta={META} pageContentTitle={`About me`}>

        </Page>
    );
}

export async function getStaticProps(context: NextRequest) {
    const {data: {aboutMe}} = await FetchAbout();
    const {data: {skillsTechnologies}} = await FetchSkills();
    return {
        props: {
            aboutMe,
            skillsTechnologies,
        }
    }
}
