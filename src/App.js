import logo from './logo.svg';
import './App.css';
import React, {userState, useState} from 'react';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signUp';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [transaction, setTransection]=useState([]);
  const addTransection=((amount, item, transectionType)=>{

    setTransection((items)=>[...items,{
      amount:amount,
      item:item,
      transectionType:transectionType
    }])
    console.log(transaction)
  })
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>

        <Route path="/home">
          <Home list={transaction} add={addTransection}></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
