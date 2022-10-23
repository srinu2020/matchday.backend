import logo from './logo.svg';
import './App.css';
import TestAcademy from './components/AddPlayer';
import AddTournament from './components/AddTournament';
import AddFixture from './components/AddFixture';
import AddPlayer from './components/AddPlayer';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path='/' element={<AddPlayer/>}/>
       <Route  path='/tournament' element={<AddTournament/>}/>
       <Route path='/fixture' element={<AddFixture/>}/>
     </Routes>
     <div>
     <p>© Hacktoberfest 2022.</p>
     </div>
     
    </div>
  );
}

export default App;


    
    
     
