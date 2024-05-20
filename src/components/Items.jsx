import React from 'react';

function Items({ToastContainer, itemsAddedToCart, items}) {

  return (
      <>
          <section className='py-5 items-main'>
              <div className="container">
                  <div className="row g-3">
                      {
                          items?.map((item) => {
                              const { id, Name, INR, USD, Quantity, img } = item;
                              return (
                                  <div className="col-lg-4" key={id}>
                                      <div className="items">
                                          <div>
                                              <img src={img} alt={Name} />
                                          </div>
                                          <div className='text-center py-5'>
                                              <h6>{Name}</h6>
                                              <div>
                                              <select name="" id="">
                                                <option selected disabled>Select Quantity</option>
                                                  <option value="250g">250g</option>
                                                  <option value="500g">500g</option>
                                                  <option value="1kg">1kg</option>
                                                  <option value="2kg">2kg</option>
                                                  <option value="3kg">5kg</option>
                                                  </select>
                                                  <button onClick={() => itemsAddedToCart(item)}>ADD TO CART</button>
                                                </div>
                                          </div>
                                      </div>
                                  </div>
                              )
                         }) 
                      }
                  </div>
              </div>
          </section>

           {/* Tostify starts */}
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* tostify ends */}
      </>
  )
}

export default Items