import { useState } from "react";

function Calculater() {

    let [add,setAdd] =useState()
    let [adds,setAdds]=useState()

    function Add()
        {
            // console.log(typeof(add))
            setAdds(Number(add)+Number(adds)) 
            console.log(adds)
        }
        function Subtract(){
            setAdds(Number(add)-Number(adds))

        }
        function Multiply(){
            setAdds(Number(add)*Number(adds))
    
        }
        function Divide(){
            setAdds(Number(add)/Number(adds))
        }

    return ( <>

    <input  onInput={(e)=>{setAdd(e.target.value)}}></input>
    <input  onInput={(f)=>{setAdds(f.target.value)}}></input>
    <button onClick={()=>{Add()}}>Add</button>
    <button onClick={()=>{Subtract()}}>Subtract</button>
    <button onClick={()=>{Divide()}}>Divide</button>
    <button onClick={()=>{Multiply()}}>Multiply</button>
    <div>{adds}</div>


    </> );
}

export default Calculater;