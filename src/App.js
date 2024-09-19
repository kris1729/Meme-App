import './App.css';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from './Pages/Edit';
// use routes
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
      <h1>Meme-App</h1>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/edit' element = {<Edit/>}/>


      </Routes>
    </div>
  );
}

export default App;
