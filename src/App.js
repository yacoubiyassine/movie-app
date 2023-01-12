
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import MovieCard from './Components/MovieCard';
import Para from './Components/Para';
import Destination from './Components/Destination';
import { Data } from './Assets/Data';


function App() {
  return (
    <div className="App">

  <Navigation></Navigation>
  <Para />
  
  <Destination Data={Data}/>
  
    </div>
  );
}

export default App;
