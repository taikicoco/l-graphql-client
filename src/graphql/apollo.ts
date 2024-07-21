import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    }),
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient();
