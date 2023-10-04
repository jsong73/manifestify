const express = require("express");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { fetchFortuneCookie } = require("./utils/api");

const app = express();
const PORT = process.env.PORT || 3007;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/fortune", async (req, res) => {
  try {
    const fortune = await fetchFortuneCookie();
    res.json({ fortune });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
      context: authMiddleware,
      listen: { port: PORT }
    });
    console.log(`🚀  Server is running at ${url}`);
}

db.once("open", () => {
    startApolloServer();
  });
