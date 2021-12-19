import {gql} from "@apollo/client";
import apolloClient from "../utils/apolo-client";

const query = gql`
    query About {
        aboutMe {
            introduction
            avatar {
                url
                alternativeText,
            }
            work_experience_title
            work_experience{
                content
                started
                ended
                place
                location
                type
                short_description
            }
            education_title
            education {
                content
                started
                ended
                place
                location
                type
                short_description
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
