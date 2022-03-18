import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import ExOne from './components/ExOne';
import ExTwo from './components/ExTwo';
import ExThree from './components/ExThree';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ExOne />}/>
        <Route path='/extwo' element={<ExTwo />}/>
        <Route path='/exthree' element={<ExThree />}/>
      </Routes>
      
     
     
 
    </div>
  );
}

export default App;
