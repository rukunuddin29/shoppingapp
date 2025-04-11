import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuEye, LuEyeClosed } from 'react-icons/lu'; 
import styles from '../styles/Login.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      alert('Something went wrong');
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Shopee</h2>
        <h2 className={styles.welcome}>Welcome,</h2>
        <p className={styles.para}>please login to continue to our store.</p>
        <form className={styles.box} onSubmit={handleLogin}>
          <p>username</p>
          <input
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>password</p>
<div className={styles.passwordContainer}>
  <input
    type={showPassword ? 'text' : 'password'}
    className={styles.input}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <span onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? <LuEyeClosed /> : <LuEye />}
  </span>
</div>

          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
