import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Signup  from './Pages/Signup'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/postContext'
import { Firebasecontext, authContext } from './store/firebasecontext'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
function App() {
  const {setUser}= useContext(authContext)
  const {firebase}=useContext(Firebasecontext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        <Route path='/view'>
          <View/> 
        </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
