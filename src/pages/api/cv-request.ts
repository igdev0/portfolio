import {NextApiRequest, NextApiResponse} from "next";
import apolloClient from "../../utils/apolo-client";
import {gql} from "@apollo/client";
import sendMail from "../../services/send-mail";

const createMutation = gql`
    mutation createCvRequest($input: createCvRequestInput!) {
        createCvRequest(input: $input){
            cvRequest {
                id,
                email
            }
        }
    }
`
const updateMutation = gql`
    mutation updateCvRequest($input: updateCvRequestInput!) {
        updateCvRequest(input: $input){
            cvRequest {
                id,
                email
            }
        }
    }
`

const findCVLinkQuery = gql`
    query {
        aboutMe {
            cv {
                formats
                url
            }
        }
    }
`

interface RequestBody {
    email: string;
}

export default async function cvRequest(req: NextApiRequest, res: NextApiResponse) {

    const {email}: RequestBody = JSON.parse(req.body);
    if (!email) {
        return res.status(403).json({error: {email: "Email is a required field."}, success: false});
    }
    try {
        const {data: {createCvRequest: {cvRequest: {id: cvRequestId}}}} = await apolloClient.mutate({
            mutation: createMutation,
            variables: {
                input: {
                    data: {
                        email
                    }
                }
            }
        })

        try {

            const {data: {aboutMe: {cv: {url}}}} = await apolloClient.query({
                query: findCVLinkQuery,
            })
            await sendMail({
                to: email,
                from: "noreply@dorultanianos.dev",
                template: "cv-request.html",
                message: "",
                email,
                apiKey: process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? "",
                cv_link: `${process.env.NEXT_PUBLIC_CMS_URL}${url}`,
                subject: "Dorultan Ianos's CV"
            })
            await apolloClient.mutate({
                mutation: updateMutation,
                variables: {
                    input: {
                        where: {
                            id: cvRequestId,
                        },
                        data: {
                            received: true
                        }
                    }
                }
            })
            return res.status(200).json({message: "Success, please check your inbox.", success: true});
        } catch (e) {
            console.error(e)
            return res.status(500).json({error: {server: "There was a server error while trying to send you the email, please contact me directly at dorultanianos@gmail.com."}, success: false});
        }
    } catch (e) {
        if (e.graphQLErrors[0].message === "Duplicate entry") {
            return res.status(500).json({error: {email: "You've already requested my CV, please contact me for more details"}, success: false});
        }
    }
}
