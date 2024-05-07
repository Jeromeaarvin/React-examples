import './App.css';
import { Route,Routes,BrowserRouter } from "react-router-dom"
import Login from './login';
import Dashboard from './dashboard';
import Sucesses from './sucesses';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/sucesses' element={<Sucesses/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
