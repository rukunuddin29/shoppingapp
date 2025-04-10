import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbHome2 } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import styles from '../styles/Navbar.module.css';

function BottomNavbar({ cartCount = 0 }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className={styles.bottomNav}>
      <div className={styles.navItem} onClick={() => navigate('/home')}>
        <TbHome2 size={24} />
        <span>Home</span>
      </div>

      <div className={styles.navItem} onClick={() => navigate('/cart')}>
        <BsCart4 size={24} />
        <span>Cart</span>
        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
      </div>

      <div className={styles.navItem} onClick={handleLogout}>
        <RiLogoutBoxRLine size={24} />
        <span>Logout</span>
      </div>
    </nav>
  );
}

export default BottomNavbar;
