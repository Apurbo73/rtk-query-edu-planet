import React from "react";
import { Link } from "react-router-dom";
import image from "../images/apu.png";
import { AiOutlineGithub } from "react-icons/ai";
const About = () => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">
              <span className="text-warning"> Edu-Planet</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
            
              </ul>
              
            </div>
          </div>
        </nav>
      </div>

      <div 
        className="card mx-auto mt-5 mb-5 p-3  text-center"
        style={{backgroundColor: "hsl(40, 100%, 75%)", width: "22rem" }}
      >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Apurbo Deb Nath</h5>
          <p className="card-text">Front-End Developer </p>
          <p className="card-text">Contact: 01774573076</p>
          <p className="card-text">Email: apurbodebnath50@gmail.com</p>
          <Link style={{fontSize:28, textDecoration:'none'}} to='https://github.com/Apurbo73'><AiOutlineGithub className="text-dark"/></Link>
          <Link to="/" href="#" className="btn btn-primary   w-100">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
