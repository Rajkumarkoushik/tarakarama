import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { BsCurrencyRupee } from "react-icons/bs";

function Cart({ cartItems, setCartItems, totalCartPrice }) {

   // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  
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
              <Link to="/">Home</Link> / Cart
            </h6>
            <h3 className="text-center py-2">Your Cart</h3>
          </div>
        </div>
      </section>

      <section className="cart-main py-5">
        <div className="container">
          <div>
              {cartItems.length === 0 ? ( <div className="text-center shop-cart">
              <img src="/assets/images/shoppingbag/empty-cart.png" alt="Shopping Bag Pic" />
              <h4>Missing Cart items?</h4>
              </div>) : 
              (<>
                <table className="cart-table">
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
                          <td>{item.quantity * parseInt(INR, 0)}</td>
                          <td>
                            <FaXmark onClick={() => removeCartItems(item)}/>
                          </td>
                        </tr>
                      </tbody>
                    );
                    })  
}
                </table>
                
                <section className="py-4">
                  <div className="container">
                    <div className="cart-details p-4">
                      <h6>Price Details ({cartItems.length} Items)</h6>
                      <div>
                      <p>Total MRP :- <span><BsCurrencyRupee />{totalCartPrice}/-</span></p>
                        <p>Shipping FEE :- {}</p>
                      </div>
                      <div>
                        <h6>
                          Total Amount :-
                          <span>
                            <BsCurrencyRupee />
                            {totalCartPrice}/-
                          </span>
                        </h6>
                        <button className="button">
                          <Link to="/address">PLACE ORDER</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </>
                )
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;


