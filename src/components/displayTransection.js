import React from "react";
import '../css/displayTransection.css'
function DisplayTransection(props){
    return(
    <div>
        {props.list.map((item)=>(
        <div>
            {item.transectionType == "expense" ? (

                <div className="transection-item">

                <div> <h4 style={{paddingLeft:'12px', paddingTop:'25px'}}>{item.amount}</h4></div>
                <div> <h4 style={{paddingLeft:'290px', paddingTop:'25px'}}>{item.item}</h4></div>
                
                <div className="expenses-line"></div>
                </div>
            ):(
                <div className="transection-item">

                <div> <h4 style={{paddingLeft:'12px', paddingTop:'25px'}}>{item.amount}</h4></div>
                <div> <h4 style={{paddingLeft:'290px', paddingTop:'25px'}}>{item.item}</h4></div>
                
                <div className="income-line"></div>
                </div>
            )}
            
        </div>

        ))}
        

    </div>
    );
}
export {DisplayTransection};