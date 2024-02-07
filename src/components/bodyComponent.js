function BodyComponent(props) {

    // let name=props.name
    // let age=props.age
    let name="Myji"
    let {name:username,age=10} =props

    return ( <>
    


    <h2>My user has a name {username} and his age is {age}</h2>
  
    </> );
}

export default BodyComponent;