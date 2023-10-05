import React from "react";
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, ApolloProvider, concat } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";

const httpLink = new HttpLink({ uri: "/graphql" })

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || null,
  }
}));

return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
