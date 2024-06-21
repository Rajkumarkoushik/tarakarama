import './Style.css';
import React,{useState} from 'react';
import Navigation from './components/Navigation';
import Cart from './components/Cart';
import WishList from './components/WishList';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Items from './components/Items';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Address from './components/Address';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

        // Items list
        const items = [
          { "id": 0, "Name": "Mango Avakai Pickle 500 g", "INR": "160", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 1, "Name": "Gongura Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/gongura-pickle.jpg" },
          { "id": 2, "Name": "Nimbu Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/nimbu-pickle.jpeg" },
          { "id": 3, "Name": " Tomato Pickle 500 g", "INR": "175", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 4, "Name": "Mango Thokku Pickle 500 g", "INR": "120", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 5, "Name": "Prawn Pickle 500g", "INR": "400", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 6, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 7, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 8, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 9, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 10, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 11, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 12, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 13, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 14, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 15, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 16, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 17, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 18, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 19, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 20, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 21, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 22, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 23, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 24, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 25, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 26, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 27, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 28, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 29, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 30, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 31, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 32, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 33, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 34, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 35, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 36, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 37, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 38, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 39, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 40, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 41, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 42, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 43, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 44, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 45, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 46, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 47, "Name": "Avakay Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 48, "Name": "Chicken Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" },
          { "id": 49, "Name": "mango Pickle", "INR": "40", "USD": "2$", "Quantity": "1kg", "img" : "/assets/images/items/avakay-pickle.webp" }
        ];
  
        const filteredItems = items.filter(item =>
          item.Name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    // Load cart items from local storage or initialize with an empty array
    const [cartItems, setCartItems] = useState(() => {
      const savedCartItems = localStorage.getItem("cartItems");
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    });
  
  const itemsAddedToCart = ((item) => {
    const existingItem = cartItems.find((cartItem) => {
      return cartItem.id === item.id;
    });
    if (existingItem) {
      const updateItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity }
        }
        return cartItem;
      });
      toast.success('Already item in the cart');
      setCartItems(updateItems);
    }else {
      // If it doesn't exist, add it to the cart
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      toast.success('Added To Cart');
    }
  });

  // Wish list
   // Load cart items from local storage or initialize with an empty array
   const [wishItems, setWishItems] = useState(() => {
    const savedwishItems = localStorage.getItem("wishItems");
    return savedwishItems ? JSON.parse(savedwishItems) : [];
  });
  const wishListItems = ((item) => {
    const existingItem = wishItems.find((cartItem) => {
      return cartItem.id === item.id;
    });
    if (existingItem) {
      const updateItems = wishItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity }
        }
        return cartItem;
      });
      setWishItems(updateItems);
    }else {
      // If it doesn't exist, add it to the cart
      setWishItems([...wishItems, { ...item, quantity: 1 }]);
    }
  });

  const [removeItems, setRemoveItems] = useState(false);

  // Remove items from the cart
  const removeCartItems = (item) => {
    const removedItems = wishItems.filter((cartItem) => cartItem.id !== item.id);
    setWishItems(removedItems);
  };

      // Calculate the total price
      const totalCartPrice = cartItems.reduce(
        (total, cartItem) =>
          total + cartItem.quantity * parseInt(cartItem.INR, 0),
        0
      );

  
  return (
    <>
      <BrowserRouter>
        <Navigation size={cartItems.length} items={items} wishSize={wishItems.length} searchTerm={searchTerm} setSearchTerm={setSearchTerm} totalCartPrice={totalCartPrice} />
        <Routes>
          <Route path="/" element={<Items ToastContainer={ToastContainer} itemsAddedToCart={itemsAddedToCart} items={items} wishListItems={wishListItems} removeItems={removeItems} removeCartItems={removeCartItems} filteredItems={filteredItems} />} />
          <Route path="Cart" element={<Cart cartItems={cartItems} setCartItems={ setCartItems} />}/>
          <Route path="Wish" element={<WishList wishItems={wishItems} setWishItems={setWishItems} removeItems={removeItems} removeCartItems={removeCartItems} itemsAddedToCart={itemsAddedToCart} />} />
          <Route path="/address" element={<Address cartItems={cartItems} totalCartPrice={totalCartPrice} />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
