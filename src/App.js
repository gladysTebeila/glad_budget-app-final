import logo from './logo.svg';
import './App.css';

import { DisplayTransection } from './components/displayTransection';

import React, {userState, useState} from 'react';
import AddItem from './components/addItem';
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
    <div className="container">
      <DisplayTransection list={transaction}/>
      <AddItem add={addTransection}/>
    </div>
  );
}

export default App;
