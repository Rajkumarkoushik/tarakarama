import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navigation({ size, wishSize, searchTerm, setSearchTerm }) {

  return (
    <>
      <nav className="navigation-main py-2">
        <section className="container">
          <div className="navigation d-flex justify-content-between align-items-center">
            <div className="nav-logo">
              <Link to="/">
                <img
                  src="/assets/images/logo.png"
                  alt="Godavari ruchulu Logo"
                />
              </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <form action="" className="nav-input">
                <input value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search Product......" />
              </form>
            </div>
            <div className="nav-icons d-flex justify-content-between align-items-center">
              <div className="position-relative">
                <Link to="/Cart"><FaCartShopping /></Link>
                <span>{size}</span>
              </div>
              <div className="position-relative">
                <Link to="/Wish"><CiHeart /></Link>
                <span>{wishSize}</span>
              </div>
              <div className="position-relative">
                <FaCircleUser />
              </div>
            </div>
          </div>
        </section>
      </nav>
    
    </>
  );
}

export default Navigation;
