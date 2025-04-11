import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbHomeFilled } from "react-icons/tb";
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
      <div className={styles.homeIcon} onClick={() => navigate('/home')}>
        <TbHomeFilled size={22} />
      </div>

      <div className={styles.navItem} onClick={() => navigate('/cart')}>
        <BsCart4 size={22} />
        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
      </div>

      <div className={styles.navItem} onClick={handleLogout}>
        <RiLogoutBoxRLine size={22} />
      </div>
    </nav>
  );
}

export default BottomNavbar;
