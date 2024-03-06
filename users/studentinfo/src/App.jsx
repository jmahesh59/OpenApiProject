import './App.css'
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import UserInfo from './pages/UserInfo';
import Header from './components/Header';


function App() {

  return (
   <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/user-info/:userId" element={<UserInfo/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
