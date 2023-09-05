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


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
     {/* <button type="button" class="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button> */}
<Section1/>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section6/>
<Section7/>
<Section8/>
    </div>
  );
}

export default App;
