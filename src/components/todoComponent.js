import React, { useEffect, useState } from "react";
import "./todo.css"

const TodoComponent = () => {
  // const [myTask, setMyTask] = useState([
  //   "Go to Markey",
  //   "buy Grocery",
  //   "Watch TV",
  //   "Play Cricket",
  // ]);

  const initialValue=JSON.parse(localStorage.getItem('user_task_array'))||[
  {text:"Go to Market",complete:false},
  {text:"buy grocery",complete:false},
  {text:"watch tv",complete:false},
  {text:"Play cricket",complete:false}]
  console.log(initialValue)

  const [myTask,setMyTask] =useState(initialValue)
  
  const [item, setItem] = useState("");
  const [completeArray,setCompleteArray] =useState()
  useEffect(()=>{
    let arr=[...myTask]
    let newArr =arr.filter((each)=>!each.complete).length
    
    let stringedData =JSON.stringify(myTask)
     localStorage.setItem("user_task_array",stringedData)
    
    setActiveValue(newArr)
  },[myTask])
  console.log(myTask);
  function handleChange(e) {
    // console.log("click")
    setItem(e.target.value);
  }
  
const [activeValue,setActiveValue]=useState(myTask.length)
  function handleAddTask() {
    if (item) {
      let arr = [...myTask, {text:item,complete:false}];
      setMyTask(arr);
      console.log(arr)
      setItem("");
    }
  }

  function handleCheckbox(index){
    console.log("this is clicked",index)
    let arr =[...myTask]
    
      arr[index].complete=!arr[index].complete
    
      setMyTask(arr)
      let countArray=arr.filter((each)=>!each.complete)
      setActiveValue(countArray.length)

  }

  const clearTask =()=>{
    let arr= [...myTask]
    let complete = arr.filter((each)=>!each.complete)
    console.log(complete)
    setMyTask(complete)
  }
  const completeTask=(value)=>{
    if(value==2){
      let arr=[...myTask]
      let arr1 =arr.filter((each)=>!each.complete==true)
      console.log(arr1)
      setMyTask(arr1)
     }
    else if(value==1){
      
    }
  } 
  return (
    <>
    <div id='box'>
      <h1 className="heading">MY TO DO APP</h1>
      <input className="input"
        type="text"
        placeholder="Add item here..."
        onChange={handleChange}
        value={item}
      ></input>
      <button onClick={handleAddTask} className="todo-btn">Add</button>
      <ul>
        <select onClick={(e)=>completeTask(e.target.value)} className="todo-select">
          <option  value={1}>All Task</option>
          <option value={2}>Completed Task</option>
          <option  value={3}>Incompleted Task</option>
        </select>
        <button onClick={()=>clearTask()} className="clr-btn">Clear</button>
        {myTask.map((items, index) => (
          <li className="li-type">
            <input type="checkbox"  className="input-check"
            complete={items.complete}
            onChange={()=>handleCheckbox(index)}></input>
            <span style={{textDecoration:items.complete?"line-through":""}}>
            {items.text}</span>
          </li>
        ))}
      </ul>
      <h2 className="active-todo">Active ToDo's:{activeValue}</h2>
      </div>
    </>
  );
};

export default TodoComponent;
