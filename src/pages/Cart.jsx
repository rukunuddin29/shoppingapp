import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from '../styles/Cart.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    clearCart();
    toast.success("Order successful!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className={styles.cartContainer}>
      <ToastContainer />
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>

                  <div className={styles.quantityControl}>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <p className={styles.quantity}>Qty: {item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>

                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.cartSummary}>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className={styles.clearBtn} onClick={clearCart}>Clear Cart</button>
            <button className={styles.checkoutBtn} onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
