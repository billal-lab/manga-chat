import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import React, { useState, useEffect } from 'react';
import {provider} from './firebase'
import firebase from 'firebase'
import {displayPlaceholder} from './Placeholder'

function App() {

  const [selected, setSelected] = useState(null);
  const [appUser, setappUser] = useState(null)

  const authenticate = ()=>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      //var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      setappUser(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }

  const select = (id,name)=>{
    setSelected({id:id, name:name});
    console.log("ok", selected)
  }
  if(appUser!=null){
    return (
      <div className="App">
        <Sidebar select={select}/>
        <Main user={appUser} selected={selected}/>
      </div>
    );
  }else{
    return (
      <div className="App">
         <div className="btn-container">
              {displayPlaceholder}
              <button onClick={authenticate}>SIGN IN WITH GOOGLE</button>
         </div>
      </div>
    );
  }
}

export default App;
