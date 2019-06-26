import React from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


// Configure Firebase.
const config = {
  apiKey: "AIzaSyCouvDKiW-47ocQNgY_H_ragxnID-3qE5A",
  authDomain: "cravex-api.firebaseapp.com",
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      // Google provider must be enabled in Firebase Console to support one-tap
      // sign-up.
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // Required to enable this provider in one-tap sign-up.
      authMethod: 'https://accounts.google.com',
      // Required to enable ID token credentials for this provider.
      // This can be obtained from the Credentials page of the Google APIs
      // console.
      clientId: '937752463880-8tvmntk18p52b7g06gbrspukl35h38l0.apps.googleusercontent.com'
    },
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],

  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

function App() {
  return (
    <div className="App">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );
}

export default App;
