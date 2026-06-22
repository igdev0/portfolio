import {HttpLink} from "@apollo/client";
import {ApolloClient, InMemoryCache, registerApolloClient,} from "@apollo/client-integration-nextjs";
import {Users} from '@/payload/collections/users';

const Authorization = `${Users.slug} API-Key ${process.env.ADMIN_API_KEY}`
export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // Use an absolute URL for SSR (relative URLs cannot be used in SSR)
      uri: `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}/api/graphql`,
      headers: {
        Authorization: Authorization,
      },
      fetchOptions: {
        // Optional: Next.js-specific fetch options for caching and revalidation
        // See: https://nextjs.org/docs/app/api-reference/functions/fetch
      },
    }),
  });
});