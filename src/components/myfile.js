import {useState} from "react"
function Class() {

  
     
    let [state,setState]=useState("")
    return ( <>


    <div style={{height:"90vh",width:"90vh", backgroundColor:state}}></div>
    <input type="text" placeHolder="Type Any Color" onInput={(e)=>{setState(e.target.value)}}></input>



    </> );
}

export default Class;


// const array=[
//     ["devanshu",87],
//     ["ram",77],
//     ["sunil",43]
// ]
   
// for(i=0;i<array.length;i++){
//     for(j=0;j<array[i].length;j++){
//         console.log(array[i][j])

//     }
// }

// const object={
//     name:"devanshu",
//     class:6,
//     age:67,
//     contact:676567899,
//     rollno:22
// }
// object.forEach(element => {
//     element.object
// });
// console.log(object)