import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
      <>
          <section className="footer-main py-4">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-5 nav-logo">
                      <img
                  src="/assets/images/logo.png"
                  alt="Godavari ruchulu Logo"
                          />
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat distinctio porro error nam! Cupiditate ipsam aliquid laboriosam blanditiis eos error, tenetur facilis voluptatum.</p>
                      </div>
                      <div className="col-lg-2">
                          <h6>Feature</h6>
                          <ul className="p-0">
                              <Link to=""><li>About Us</li></Link>
                              <Link to=""><li>Terms & Conditions</li></Link>
                              <Link to=""><li>Privacy Policy</li></Link>
                          </ul>
                      </div>
                      <div className="col-lg-2">
                          <h6>Customer Care</h6>
                          <ul className="p-0">
                              <Link to=""><li>Help Center</li></Link>
                              <Link to=""><li>Track Your Orders</li></Link>
                              <Link to=""><li>Refunds & Returns</li></Link>
                          </ul>
                      </div>
                      <div className="col-lg-3 footer-contact">
                          <h6>Contact Us</h6>
                          <div>
                          <Link to="">ADDRESS :- 1-04, Main Road, Hyderabad</Link>
                          </div>
                          <div>
                          <Link to="mailto :- info@godavariruchulu">EMAIL :- info@godavariruchulu</Link>
                          </div>
                          <div>
                          <Link to="tel:- +91 9999999999">PHONE :- 99999 99999</Link>
                          </div>
                      </div>
                  </div>
              </div>
        </section>
      </>
  )
}

export default Footer