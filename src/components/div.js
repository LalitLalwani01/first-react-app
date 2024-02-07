import { useState } from "react";

function Show() {
    let  Arr=[]
    let [state,setState] =useState(false)
    // let [arr,setarray]=useState(state)
    function State(){   
        for(let i=0;i<10;i++){
            if(state==false)   {
           setState  (Arr.push(i))
                
            } 
        }
      
    }


    return ( 
    <>
    <div style={{backgroundColor:state?"red":""}}>
    <div style={{height:"5rem",width:"5rem", margin:"10px"}}></div>
    <div style={{backgroundColor:"red",height:"5rem",width:"5rem",margin:"10px"}}></div>
    <div style={{backgroundColor:"red",height:"5rem",width:"5rem",margin:"10px"}}></div>
    <div style={{backgroundColor:"red",height:"5rem",width:"5rem",margin:"10px"}}></div>
    <div style={{backgroundColor:"red",height:"5rem",width:"5rem",margin:"10px"}}></div>
    <div style={{backgroundColor:"red",height:"5rem",width:"5rem",margin:"10px"}}></div>
    <div style={{backgroundColor:"red",height:"5rem",width:"5rem",margin:"10px"}}></div>
    <div style={{backgroundColor:"red",height:"5rem",width:"5rem",margin:"10px"}}></div>
    <div style={{backgroundColor:"red",height:"5rem",width:"5rem",margin:"10px"}}></div>
    <div style={{backgroundColor:"red",height:"5rem",width:"5rem",margin:"10px"}}></div>
    </div>
    <button onClick={()=>{State()}}>Click</button>


    </> );
}

export default Show;