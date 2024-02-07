import { useState } from "react";
import Question from "./question";
function Card(props) { 
    
    const question=props.question
    const [checkans,setCheckans]=useState()
    let  [marks,setMarks]= useState(0)
    let [incr,setIncr]= useState(0)

    
    function Checkans(e){
        if(question[0].ans == e){
              setMarks(marks+1)
              console.log(marks)
        }
    }
    function Incr(){
        if(incr==question.length-1){
            setIncr("")
        }
        else{
            setIncr(incr+1)
        }
    }

    var obj={vishal:0}
    console.log(obj)

    obj.vishal="name"
    console.log(obj)

     


    // console.log(props)
    return (  <>
        
        <div>{question[incr].question}</div>
        <input type='radio' name="a" id="b" onClick={(e)=>{Checkans(e.target.value)}} value={question[0].options[0]}></input>
        <label >{question[incr].options[0]}</label>
        <input type='radio' name="a" id="b" onClick={(e)=>{Checkans(e.target.value)}} value={question[0].options[1]}></input>
        <label>{question[incr].options[1]}</label>
        <input type='radio' name="a" id="b" onClick={(e)=>{Checkans(e.target.value)}} value={question[0].options[2]}></input>
        <label>{question[incr].options[2]}</label>
        <input type='radio' name="a" id="b" onClick={(e)=>{Checkans(e.target.value)}} value={question[0].options[3]}></input>
        <label>{question[incr].options[3]}</label> 


        <button onClick={()=>{Incr()}}>Next</button>
    


    </>);

} 
export default Card;