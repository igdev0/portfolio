import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const apolloClient = new ApolloClient({
    uri: API_ENDPOINT,
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "no-cache",
            errorPolicy: "ignore",
        },
        query: {
            fetchPolicy: "no-cache",
            errorPolicy: "all",
        },
    },
});

export default apolloClient;
