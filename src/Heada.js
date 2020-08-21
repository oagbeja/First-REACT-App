import React from 'react';
class Heada extends React.Component {
    render() {
      return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Log In</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <header className="masthead text-center text-white">
          <div className="masthead-content">
            <div className="container">
              <h1 className="masthead-heading mb-0">One Page Wonder</h1>
              <h2 className="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
              <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
            </div>
          </div>
          <div className="bg-circle-1 bg-circle"></div>
          <div className="bg-circle-2 bg-circle"></div>
          <div className="bg-circle-3 bg-circle"></div>
          <div className="bg-circle-4 bg-circle"></div>
        </header>
        </div>
        );
    }
  }

  
export default Heada;