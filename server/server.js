const express = require("express");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const app = express();
const PORT = process.env.PORT || 3007;

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
      context: authMiddleware,
      listen: { port: PORT }
    });
    console.log(`🚀  Server is running at ${url}`);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once("open", () => {
    startApolloServer();
  });
