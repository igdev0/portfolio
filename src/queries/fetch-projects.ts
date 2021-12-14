import {gql} from "@apollo/client";
import apolloClient from "../utils/apolo-client";

const query = gql`
    query Projects {
        projects {
            name
            repo_link
            ui_link
            description
            image {
                url
                alternativeText
                width
                height
            }
            skills_technologies {
                name
                text_color
                background_color
            }
        }
    }
`;


export default function FetchProjects() {
    return apolloClient.query({
        query,
        variables: {}
    })
}
