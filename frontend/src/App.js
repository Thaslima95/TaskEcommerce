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
import SingleProduct from './Components/SingleProduct';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CartPage from './Components/CartPage';

import FilterComponent from './Components/FilterComponent';
import CartPage2 from './Components/CartPage2';


function App() {
  return (
    <>
      <BrowserRouter>
  <Routes>
  <Route path='/' element={<HeaderComponent/>}>
   <Route  index  element={<Home/>}/>
    <Route path="/category/:category" element={<SecondPage/>}/>
    <Route path="/single/:id" element={<SingleProduct/>}/>
<Route path="/filter/:category" element={<FilterComponent/>}/>
    </Route>
    <Route path="/cart" element={<CartPage/>}/>
    
    <Route path="/cart2" element={<CartPage2/>}/>
     
    
  
  </Routes>

   
    </BrowserRouter>
    </>
  );
}

export default App;
