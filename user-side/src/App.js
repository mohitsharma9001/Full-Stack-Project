import './App.css';
import { Route,Routes } from 'react-router-dom';
import { AllUser } from './components/AllUser';
import { AddUser } from './components/AddUser';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>

      <Route path='/all' element = {<AllUser/>} />
      <Route path='/add' element = {<AddUser/>} />
      
     </Routes>
    </div>
  );
}
export default App;