import React from 'react';
//import logo from './logo.svg';
import './App.css';

///js

import Heada from './Heada';
import Foota from './Foota';
import Bodi from './Bodi';



class App extends React.Component {
  render(){ 
    return(
      
      <div>
        <Heada/>
        <Bodi/>
        <Foota/>
      </div>
    );
  } 
}




export default App;
