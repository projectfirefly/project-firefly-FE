import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
//import axios from "axios";
import ApolloClient from "apollo-boost";
const { gql } = require("apollo-boost");

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
});

const USER_EXISTS = gql`
  query getUserBy($param: String!, $value: String!) {
    getUserBy(param: $param, value: $value) {
      username
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($input: UserInput!) {
    addUser(input: $input) {
      id
    }
  }
`;

const ALL_USERS = gql`
  query getUsers {
    getUsers {
      username
    }
  }
`;

class FirebaseLogin extends Component {
  constructor(props) {
    super();
    this.state = {
      signedIn: false
    };
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: currentUser => {
        // axios.post("https://projectfirefly-staging.herokuapp.com/register", {
        //   username: currentUser.displayName,
        //   password: currentUser.email
        // });

        localStorage.setItem("token", currentUser.idToken);
        const client = new ApolloClient({
          uri: "http://localhost:3300",
          headers: {
            authorization: currentUser.idToken
          }
        });
        client
          .query({
            query: USER_EXISTS,
            variables: {
              param: currentUser.email,
              value: currentUser.email
            }
          })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            const newUser = {
              username: currentUser.displayName,
              password: currentUser.email
            };
            client
              .mutate({
                mutation: ADD_USER,
                variables: {
                  input: newUser
                }
              })
              .then(res => {
                console.log(res);
              });
          });
      }
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  getUsers = async () => {
    // let res = await axios.get(
    //   // "https://projectfirefly-staging.herokuapp.com/users"
    //   "http://localhost:3300/users"
    // );
    const client = new ApolloClient({
      uri: "http://localhost:3300"
    });
    client
      .query({
        query: ALL_USERS
      })
      .then(res => {
        console.table(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    // let users = res.data;
    // console.log(users);
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ signedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.signedIn ? (
          <div>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img alt="profile" src={firebase.auth().currentUser.photoURL} />
            <button onClick={this.signOut}>Sign Out</button>
            <button onClick={this.getUsers}>Get Users</button>
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}
export default FirebaseLogin;
