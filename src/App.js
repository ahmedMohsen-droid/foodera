import logo from './logo.svg';
import './App.css';
import Home from './componets/Home.js/Home';
import Navs from './componets/Navs.js/Navs';
import { Fragment } from 'react';
function App() {
  return (
   <Fragment>
      
        <Navs />
        <Home />
      
    </Fragment>
  );
}

export default App;
