import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes/Routers';



function App() {
  return (
    <>
      <BrowserRouter>
<Routers/>
    </BrowserRouter>
    </>
  );
}

export default App;
