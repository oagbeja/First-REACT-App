import React from 'react';
//import logo from './logo.svg';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import './App.css';


///js

import Heada from './Heada';
import Foota from './Foota';




class App extends React.Component {
  render(){ 
    return(
      
      <div>
        <Heada/>
        
        <Foota/>
      </div>
    );
  } 
}




export default App;
