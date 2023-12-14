import React, { useState } from 'react';
import './SignupPage.css'; 
import Dashboard from './Dashboard'; 

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignup = () => {
    if (password === confirmPassword) {
      setLoggedIn(true);
    } else {
      console.error('Passwords do not match');
    }
  };

  console.log('Render SignupPage. Logged In:', loggedIn);

  return (
    <div className="signupbox">
      {!loggedIn ? (
        <div>
          <h2>Sign Up</h2>
          <form>
            <div className='login-box2'>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='login-box2'> 
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='login-box2'>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='login-box2'>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleSignup}>
              Sign Up
            </button>
          </form>
        </div>
      ) : (
        <Dashboard username={username} />
      )}
    </div>
  );
};

export default SignupPage;
