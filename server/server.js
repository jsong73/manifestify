const express = require("express");
const app = express();
const db = require("./config/connection")
const{ ApolloServer } = require("@apollo/server")
const { authMiddleware } = require("./utils/auth");
const PORT = process.env.PORT || 3004;
const { typeDefs, resolvers } = require("./schemas");
const { startStandaloneServer } = require("@apollo/server/standalone");


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware });
    const { url } = await startStandaloneServer(server);
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
  }

  
db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        });
    });

startApolloServer();