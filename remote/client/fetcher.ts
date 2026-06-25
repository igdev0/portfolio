import {Users} from '@/payload/collections/users';

type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

type RequestInit = {
  headers: (HeadersInit & FetchOptions) | FetchOptions;
};

export const fetcher = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit["headers"]
) => {
  return async (): Promise<TData> => {
    const { next, cache, ...restOptions } = options || {};
    const Authorization = `${Users.slug} API-Key ${process.env.ADMIN_API_KEY}`;
    const res = await fetch("http://localhost:3000/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization,
        ...restOptions,
      },
      body: JSON.stringify({ query, variables }),
      next,
      cache,
    });

    console.log({Authorization})
    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];
      throw new Error(message);
    }

    return json.data;
  };
};
