import React from 'react'
import './App.css'
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost"
import { setContext } from "apollo-link-context"
import Data from "./components/Data"
// import { useQuery } from "@apollo/react-hooks"
// import { gql } from "apollo-boost"
// import { withApollo } from "@apollo/react-hoc"

// export const USERS = gql`
//   {  
//     users {
//       id 
//       name
//     }
//   }  
// `

function App() {

    const httpLink = new HttpLink({
        uri: "https://taste-of-hasura.herokuapp.com/v1/graphql"
    })

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    })

    // const { loading, error, data } = useQuery(USERS)
    // if (loading) return "Loading..."
    // if (error) return `Error! ${error.message}`

    return (
        <ApolloProvider client={client}>
            <h1>Title</h1>
            {/* {data.users.map(user => (
                <h2 key={user.id}>{user.name}</h2>
            ))} */}
            <Data />
        </ApolloProvider>
    )
}

export default App
