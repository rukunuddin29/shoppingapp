import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.logo}>shop.com</h1>

      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Cart</li>
        <li>About</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>

      <div className={styles.socialIcons}>
        <div className={styles.iconCircle}>
          <SlSocialInstagram size={20} />
        </div>
        <div className={styles.iconCircle}>
          <RiFacebookLine size={20} />
        </div>
        <div className={styles.iconCircle}>
          <FaXTwitter size={20} />
        </div>
      </div>

      <p className={styles.description}>
        Welcome to shop.com, your go-to destination for top-notch products at unbeatable prices.
        Stay connected with us for the latest updates, offers, and more!
      </p>
    </footer>
  );
};

export default Footer;
