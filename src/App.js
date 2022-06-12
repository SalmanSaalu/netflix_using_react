import React from 'react';
import './App.css';
import {Action,originals} from './urls'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner/>
     <RowPost url={originals} title="Netflix Originals"/>
     <RowPost url={Action} title="Action" isSmall/>

    </div>
  );
}

export default App;
