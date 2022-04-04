//import React, {useState, useEffect} from 'react';
import LeftBlock from './components/LeftBlock';
import RightBlock from './components/RightBlock';


function App() {


  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <LeftBlock />
        <RightBlock />
      </div>
    </div>
  );
}

export default App;
