const express = require("express");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");


const app = express();
const PORT = process.env.PORT || 3007;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
      context: authMiddleware,
      listen: { port: PORT },

    });

    console.log(`🚀  Server is running at ${url}`);
}

db.once("open", () => {
    startApolloServer();
  });
