import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

function WishList({ cartItems, setCartItems }) {

  const [removeItems, setRemoveItems] = useState(false);

  // Remove items from the cart
  const removeCartItems = (item) => {
    const removedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(removedItems);
  };

  const increment = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1};
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const decrement = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };
  return (
      <>
       <section className="your-cart">
        <div className="container">
          <div className="py-3">
            <h6>
              <Link to="/">Home</Link> / WishList
            </h6>
            <h3 className="text-center py-4">WishList</h3>
          </div>
        </div>
      </section>

      <section className="cart-main py-5">
        <div className="container">
          <div>
              {cartItems.length === 0 ? ( <div className="text-center shop-cart">
              <img src="/assets/images/shoppingbag/shopping-bag.svg" alt="Shopping Bag Pic" />
              <h6>There is no items in the cart, please shop.</h6>
              </div>) : 
                 ( <table className="cart-table">
                 <thead className="py-4">
                   <tr>
                     <th>Product</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Total</th>
                     <th></th>
                   </tr>
                </thead>
                {
                  cartItems.map((item) => {
                    const { id, Name, INR, img } = item;
                    return (
                      <tbody key={id}>
                        <tr className="table-data">
                          <td>
                            <img src={img} alt={Name} />
                          </td>
                          <td>{INR}</td>
                          <td>
                            <div className="table-quantity">
                              <button onClick={() => decrement(item)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => increment(item)}>+</button>
                            </div>
                          </td>
                          <td></td>
                          <td>
                            <FaXmark onClick={() => removeCartItems(item)}/>
                          </td>
                        </tr>
                      </tbody>
                    );
                    })  
}
                </table>
                )
            }
          </div>
        </div>
      </section>
      </>
  )
}

export default WishList