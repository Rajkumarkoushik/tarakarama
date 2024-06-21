import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { BsCurrencyRupee } from "react-icons/bs";

function WishList({ wishItems, setWishItems,removeCartItems, itemsAddedToCart }) {

   // Save cart items to local storage whenever they change
   useEffect(() => {
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
   }, [wishItems]);
  
  const increment = (item) => {
    const updatedCartItems = wishItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1};
      }
      return cartItem;
    });
    setWishItems(updatedCartItems);
  };

  const decrement = (item) => {
    const updatedCartItems = wishItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setWishItems(updatedCartItems);
  };
  return (
      <>
       <section className="your-cart">
        <div className="container">
          <div className="py-3">
            <h6>
              <Link to="/">Home</Link> / WishList
            </h6>
            <h3 className="text-center py-2">WishList</h3>
          </div>
        </div>
      </section>

      <section className="cart-main py-5">
        <div className="container">
          <h4 className='py-3 my-wish'>My Wishlist <span>{wishItems.length}</span> items</h4>
          <div>
              {wishItems.length === 0 ? ( <div className="text-center shop-cart">
              <img src="/assets/images/shoppingbag/empty-wishlist.jpg" alt="Shopping Bag Pic" />
              <h4>There is no product in your wishlist!</h4>
              </div>) : 
                 <section className='py-2 items-main'>
                 <div className="container">
                     <div className="row g-3">
                         {
                             wishItems?.map((item) => {
                                 const { id, Name, INR, USD, Quantity, img } = item;
                                 return (
                                     <div className="col-lg-3" key={id}>
                                         <div className="items">
                                             <div className='items-image position-relative'>
                                         <img src={img} alt={Name} />
                                         <FaXmark className=' wish-remove' onClick={() => removeCartItems(item)}/>
                                                 <div className='items-heart'>
                                            </div>
                                             </div>
                                             <div className='text-center py-3'>
                                                 <h6>{Name}</h6>
                                         <div>
                                           <h6><BsCurrencyRupee />{INR}.00</h6>
                                                     <button onClick={() => itemsAddedToCart(item)} className='button'>MOVE TO BAG</button>
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
            }
          </div>
        </div>
      </section>
      </>
  )
}

export default WishList