import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/ProductDetails.module.css"; // adjust path if needed
import Loading from "../components/Loading";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false); // ✅ moved up

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
          <p className={styles.description}>
            {showFullDescription
              ? product.description
              : `${product.description.slice(0, 100)}...`}
          </p>
          {product.description.length > 100 && (
            <button
              className={styles.readMoreBtn}
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
          <div className={styles.pricebox}>
            
        <h3 className={styles.price}>${product.price}</h3>
        <button className={styles.button}>Add to Cart</button>
          </div>
      </div>
    </div>
  );
}

export default ProductDetails;
