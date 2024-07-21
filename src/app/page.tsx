"use client";

import  App  from "@/components/App";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/apollo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </main>
  );
}
