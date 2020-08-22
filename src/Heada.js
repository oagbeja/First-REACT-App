import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bodi from './Bodi';
import Bodi2 from './Bodi2';


class Heada extends React.Component {
    
    render() { 
      
      return (
        
          <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
              <div className="container">
                <a className="navbar-brand" href="#">First REACT App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                     <Link  className="nav-link" to="/">First Page</Link>
                      
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" to="/second">Second Page</Link>
                      
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            
          
            <header className="masthead text-center pt-5 text-white" style={{height: "15rem"}}>
              <div className="masthead-content">
                <div className="container ">
                  <h1 className="masthead-heading mb-0">One Page Wonder</h1>
                  <h2 className="masthead-subheading mb-0">Will sweep your feet</h2>
                  {/* <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a> */}
                </div>
              </div>
              {/* <div className="bg-circle-1 bg-circle"></div>
              <div className="bg-circle-2 bg-circle"></div>
              <div className="bg-circle-3 bg-circle"></div>
              <div className="bg-circle-4 bg-circle"></div>  */}
            </header>
            <Switch>
              <Route path="/second">
                <Bodi2 />
              </Route>
              <Route path="/">
                <Bodi />
              </Route>
            </Switch>
          </div>
        </Router>
        );
    }
  }

  
export default Heada;