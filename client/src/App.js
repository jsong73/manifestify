import React from "react";
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home/index";
import Enter from "./pages/Enter/index"
import Login from "./pages/Login/index"
import Signup from "./pages/Signup/index"

const httpLink = new HttpLink({ uri: "/graphql" })

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={ <Enter />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/login" element={ <Login />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
