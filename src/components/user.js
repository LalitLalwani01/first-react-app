function User() {

    let fname= "lalit"
    let lname="lalwani"


    function handleClick(e){
         console.log("check")       
    }
    function handleSubmit(e){
        e.preventDefault()

        console.log("submit")
    }
    return ( <>

    <h1>This is Form</h1>
    <button onClick={handleClick}>My button</button>
    <h2>
        user has a name {fname} {lname}
    </h2>
    <form onSubmit={handleSubmit}>
  <label htmlFor="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value="John"/><br/>
  <label htmlFor="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
  <input type="submit" value="Submit"/>
</form> 

    </> );
}

export default User;