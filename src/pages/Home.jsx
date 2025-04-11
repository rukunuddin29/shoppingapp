import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (products.length === 0) return <Loading />;

  return (
    <>
      <Navbar />
      <h1 className={styles.logo}>Shopee</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={styles.card}
              onClick={() => handleCardClick(product.id)}
            >
              <div className={styles.box}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.name}>
                {product.title.split(" ").slice(0, 5).join(" ")}
                {product.title.split(" ").length > 5 ? "..." : ""}
              </h3>
              <div className={styles.cont}>
                <p className={styles.price}>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
