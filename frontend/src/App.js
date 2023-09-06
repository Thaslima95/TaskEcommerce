import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section7 from './Components/Section7';
import Section8 from './Components/Section8';
import SecondPage from './Components/SecondPage';
import NavbarComponent from './Components/NavbarComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import ThirdPage from './Components/ThirdPage';

function App() {
  return (
    <>
      <BrowserRouter>
  <Routes>
  <Route path='/' element={<HeaderComponent/>}>
   <Route  index  element={<Home/>}/>
    <Route path="/next" element={<SecondPage/>}/>
    <Route path="/third" element={<ThirdPage/>}/>
    </Route>
    
  
  </Routes>

   
    </BrowserRouter>
    </>
  );
}

export default App;
