import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Firebasecontext} from './store/firebasecontext'
import Context from './store/firebasecontext'
import firebase from './firebase/config';

ReactDOM.render(
<Firebasecontext.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
</Firebasecontext.Provider>
, document.getElementById('root'));
