import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://www.spectorware.com/api/",
    cache: new InMemoryCache(),
});

export default client;