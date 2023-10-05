import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query user($email: String!) {
    user(email: $email) {
      _id
      email
      password
      birthday
      manifestations {
        whatToManifest
        todaysFeeling
        todayImGratefulFor
        manifestationObstacles
        manifestationAction
        details
        createdAt
        _id
      }
    }
  }
`

export const QUERY_SINGLE_MANIFESTATION = gql`
query singleManifestation($manifestationId: ID!) {
    manifestation(manifestationId: $manifestationId) {
      _id
      createdAt
      details
      manifestationAction
      manifestationObstacles
      todayImGratefulFor
      todaysFeeling
      whatToManifest
    }
}
`

export const QUERY_MANIFESTATIONS = gql`
query manifestations($email: String) {
    manifestations(email: $email) {
      _id
      createdAt
      details
      manifestationAction
      manifestationObstacles
      todayImGratefulFor
      todaysFeeling
      whatToManifest
    }
  }
`

export const QUERY_ME = gql`
query me {
    me {
      email
      password
      birthday
      _id
      manifestations {
        _id
        createdAt
        details
        manifestationAction
        manifestationObstacles
        todayImGratefulFor
        todaysFeeling
        whatToManifest
      }
    }
  }
`