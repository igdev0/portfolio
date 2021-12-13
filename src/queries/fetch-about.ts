import {gql} from "@apollo/client";
import apolloClient from "../utils/apolo-client";

const query = gql`
    query About {
        aboutMe {
            avatar {
                url
                alternativeText,
            }
            work_experience_title
            work_experience{
                content
                started
                ended
            }
            education_title
            education {
                content
                started
                ended
            }
        }
    }
`;


export default function FetchAbout() {
    return apolloClient.query({
        query,
        variables: {}

    })
}
