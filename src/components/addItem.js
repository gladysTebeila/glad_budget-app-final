import React,{useState} from "react";
import "../css/add.css"
function AddItem(props){

    const [amount,setAmount] = useState('')
    const [item, setItem] = useState('')
    const [transectionType, setTransectionType] = useState('')
    
    const add=(()=>{
        props.add(amount, item, transectionType);
    })
    return(
        <div>
            <h1 style={{paddingTop:"25px"}}>Add Transaction</h1>
            <input placeholder="Enter item" onChange={(e)=>setItem(e.target.value)} /><br></br>
            <input placeholder="Enter amount" onChange={(e)=>setAmount(e.target.value)} /><br></br>
            <select onChange={(e)=>setTransectionType(e.target.value)}>
                <option value="income">income</option>
                <option value="expense">expense</option>  
            </select><br></br>
            <button id="btn" onClick={add}>Add</button>
        </div>
    )
}
export default AddItem;