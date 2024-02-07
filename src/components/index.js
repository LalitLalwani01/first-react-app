import { useState } from "react";

function Index() {
    
    let  arr=[]
   
    let [value,setValue] =useState()
    function Clicks(e){
        
        for(let i=1;i<=10;i++){
            
              arr.push((i)*Number(e))
            } 
            console.log(arr)
        }
        function Click(){
            
            setValue(arr)
                
        }
    return ( <>
    <input type onInput={(e)=>{Clicks(e.target.value)}}></input>
    <button onClick={()=>{Click()}}>Click</button>
    <div style={{marginTop:"50px", color:"purple", fontSize:50}}><h1>{value}</h1></div>
    {/* {arr.map((value,i)=>(
        {i}
    ))} */}


    </> );
}

export default Index;