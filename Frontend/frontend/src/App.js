import Login from "./Login";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Signup from "./Signup";
import Home from "./Home";
import About from "./About";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Login />}></Route>
      <Route path='/signup' element ={<Signup />}></Route>
      <Route path='/Home' element = {<Home />}></Route>
      <Route path='/About' element = {<About />}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App;
