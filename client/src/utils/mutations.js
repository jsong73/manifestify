import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`

export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!, $birthday: String!) {
    addUser(email: $email, password: $password, birthday: $birthday) {
      token
      user {
        _id
        email
        password
        birthday
      }
    }
  }`

  
export const ADD_MANIFESTATION = gql`
mutation addManifestation($todaysFeeling: String!, $whatToManifest: String!, $manifestationAction: String!, $manifestationObstacles: String!, $todayImGratefulFor: String!) {
    addManifestation(todaysFeeling: $todaysFeeling, whatToManifest: $whatToManifest, manifestationAction: $manifestationAction, manifestationObstacles: $manifestationObstacles, todayImGratefulFor: $todayImGratefulFor) {
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
export const REMOVE_MANIFESTATION = gql`
mutation removeManifestation($manifestationId: ID!) {
    removeManifestation(manifestationId: $manifestationId) {
      _id
    }
  }
`