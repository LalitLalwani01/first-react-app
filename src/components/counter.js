import { useState } from "react";

function Counter(){


    let [count,setCount]=useState(0)
    function handleAddClick(){
        if(count<10){
            setCount(count+1)
        } 
    }
    function handleSubtactClick(){
        if(count>0){
            setCount(count-1)
        }
        
    }

    return(
        <>
        <h1>Counter Component</h1>
        <h3>Count :{count}</h3>

        {count==10?<p>Hurray!You have reached the last limit sir</p>:""}

        {count==0?<p>You have reached the last limit sir</p>:""}
        {count<10 &&<button onClick={()=>{handleAddClick()}}>Add Count</button>}
       {count>0 && <button onClick={()=>{handleSubtactClick()}}>Subtract Count</button>}
        </>
    )
}

export default Counter;