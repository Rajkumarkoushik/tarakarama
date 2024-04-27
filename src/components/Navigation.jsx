import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
      <>
          <nav>
              <section className="container">
                  <div>
                    <div>
                        <a href="/"><img src="/assets/images/logo.png" alt="Taraka rama Logo" /></a>
                      </div>
                      <div>
                          <form action="">
                              <input type="text" placeholder='Search Product'/>
                              
                          </form> 
                      </div>
                  </div>
              </section>
      </nav>
      </>
  )
}

export default Navigation