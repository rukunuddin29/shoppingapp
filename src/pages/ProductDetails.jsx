// ProductDetails.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/ProductDetails.module.css";
import Loading from "../components/Loading";
import { CartContext } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  if (!product) return <Loading />;

  return (
    <div className={styles.container}>
      <ToastContainer />
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{product.title}</h2>

        <div className={styles.descriptionBox}>
          <h3 className={styles.descTitle}>Description</h3>
          <p className={styles.description}>{product.description}</p>
        </div>

        <div className={styles.pricebox}>
          <h3 className={styles.price}>${product.price}</h3>
          <button 
            className={styles.button} 
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
