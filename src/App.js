import React from 'react'
import './App.css'
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost"
import { setContext } from "apollo-link-context"
import Data from "./components/Data"


function App() {

    const httpLink = new HttpLink({
        uri: "https://taste-of-hasura.herokuapp.com/v1/graphql"
    })

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client}>
            <h1>Title</h1>
            <Data />
        </ApolloProvider>
    )
}

export default App
