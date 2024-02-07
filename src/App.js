import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Class from './components/myfile';
import Question from './components/question';
import Calculater from './components/calculater';
import User from './components/user';
import Header from './components/Header';
import BodyComponent from './components/bodyComponent';
import UserCard from './components/UserCard';
import Counter from './components/counter';
import TodoComponent from './components/todoComponent';
import LoginPage from './components/loginPage'; 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './components/signuppage';



let  userDetails=[
  {
    name:"Lalit",
    age:26
  },
  {
    name:"harsh",
    age:17
  },
  {
    name:"John",
    age:16
  },
  {
    name:"jhonas",
    age:15
  }

]
function App() {

  const filteredData=userDetails.filter((eachObj)=>(eachObj.age>16))
  const mytask=["go to market","buy fruits","meeting with rahul"]


  return (
    <div className="App">

      {/* <Counter></Counter> */}
      {/* <TodoComponent></TodoComponent> */}
      
      {/* <Card></Card> */}
      {/* <Class></Class> */}
      {/* <Question></Question> */}
      {/* <Calculater></Calculater> */}
      {/* <User></User> */}
      {/* <Header></Header>
      <div className='cardContainer'>
      {filteredData.map((value)=>{
        return(
          
          // <BodyComponent name={value.name} age={value.age}></BodyComponent>
          <UserCard name={value.name}
          age={value.age}
          mobileNum={8765678999}>
          </UserCard>
        )
        
      })} */}
      <BrowserRouter>
      <Routes>
        <Route path='/todoComponent' element={<TodoComponent></TodoComponent>}></Route>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/loginPage' element={<LoginPage></LoginPage>}></Route>
        <Route path ='/signupPage' element={<SignUp></SignUp>}></Route>
        <Route path ='/counter' element={<Counter></Counter>}></Route>

      </Routes>
      </BrowserRouter>
      
      {/* </div> */}
    {/* <Header></Header> */}
    {/* <LoginPage></LoginPage> */}
     {/* {mytask.map((value,index)=>{
       return(
         
         <li key={index}>{value}</li>
         )
        })} */}
    
        </div>

  );
}

export default App;
