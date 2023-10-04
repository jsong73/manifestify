const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    birthday: String
    manifestations: [Manifestation]
  }
  
  type Manifestation {
    _id: ID
    todaysFeeling: String
    whatToManifest: String
    manifestationAction: String
    manifestationObstacles: String
    todayImGratefulFor: String
    details: String
    createdAt: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(email: String!): User
    manifestations(email: String): [Manifestation]
    manifestation(manifestationId: ID!): Manifestation
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!, birthday: String!): Auth
    login(email: String!, password: String!): Auth
    addManifestation(todaysFeeling: String!, whatToManifest: String!, manifestationAction: String!, manifestationObstacles: String!, todayImGratefulFor: String!, details: String): Manifestation
    removeManifestation(manifestationId: ID!): Manifestation
  }
`;

module.exports = typeDefs;