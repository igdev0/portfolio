import {gql} from "@apollo/client";
import apolloClient from "../utils/apolo-client";

const query = gql`
    query Skills {
        skillsTechnologies {
            name
            text_color
            background_color
        }
    }
`;


export default function FetchSkills() {
    return apolloClient.query({
        query,
        variables: {}

    })
}
