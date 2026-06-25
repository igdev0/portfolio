import type {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // Where your GQL schema is located (could also be externally hosted)
  schema: `http://localhost:3000/api/graphql`,
  overwrite: true,
  documents: "./remote/queries/*.gql",
  generates: {
    // Where the client types and hooks file will be placed
    "./remote/client/gql-generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        // Important! The "add" plugin will inject this into our client file.
        // This extends RequestInit['Headers'] to include the Next.js extended "fetch"
        // options for caching. This will allow for fine grained cache control
        // with our client hooks.
        {
          add: {
            content: `
            type FetchOptions = {
              cache?: RequestCache;
              next?: NextFetchRequestConfig;
            };

            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };`,
          },
        },
      ],
      config: {
        // Needed to support the updated React Query 5 API
        reactQueryVersion: 5,
        legacyMode: false,
        exposeFetcher: true,
        exposeQueryKeys: true,
        addSuspenseQuery: true,
        // Allows us to specify a custom fetcher function that will leverage
        // Next.js caching fetaures within our client query hooks.
        fetcher: "./fetcher#fetcher",
      },
    },
  },
};
export default config;
