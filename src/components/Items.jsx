import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import HomeSlide from "./HomeSlide";

function Items({
  ToastContainer,
  itemsAddedToCart,
  items,
  wishListItems,
  removeCartItems,
}) {
  const [wishListState, setWishListState] = useState({});

  const toggleWishList = (item) => {
    const isWishListed = wishListState[item.id];
    if (isWishListed) {
      removeCartItems(item);
    } else {
      wishListItems(item);
    }

    setWishListState((prevState) => ({
      ...prevState,
      [item.id]: !isWishListed,
    }));
  };

  return (
      <>
          <HomeSlide/>
      <section className="py-5 items-main">
        <div className="container">
          <div className="row g-3">
            {items?.map((item) => {
              const { id, Name, INR, USD, Quantity, img } = item;
              const isWishListed = wishListState[id];
              return (
                <div className="col-lg-3" key={id}>
                  <div className="items">
                    <div className="items-image position-relative">
                      <img src={img} alt={Name} />
                      <div className="items-heart">
                        {isWishListed ? (
                          <FaHeart onClick={() => toggleWishList(item)} />
                        ) : (
                          <CiHeart onClick={() => toggleWishList(item)} />
                        )}
                      </div>
                    </div>
                    <div className="text-center py-3">
                      <h6>{Name}</h6>
                      <div className="">
                        <div>
                          {/* <select name="" id="">
                                                <option selected disabled>Qty</option>
                                                  <option value="250g">250g</option>
                                                  <option value="500g">500g</option>
                                                  <option value="1kg">1kg</option>
                                                  <option value="2kg">2kg</option>
                                                  <option value="3kg">5kg</option>
                                                      </select> */
                                      }
                          <p>
                            <BsCurrencyRupee />
                            {INR}.00
                          </p>
                        </div>
                        <button
                          className="button"
                          onClick={() => itemsAddedToCart(item)}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tostify starts */}
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
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
  );
}

export default Items;
