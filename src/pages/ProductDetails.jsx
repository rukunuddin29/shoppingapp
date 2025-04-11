// ProductDetails.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/ProductDetails.module.css";
import Loading from "../components/Loading";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <Loading />;

  return (
    <div className={styles.container}>
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
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
