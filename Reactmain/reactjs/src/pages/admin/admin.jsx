import React, { useState } from 'react';
import './styleadmin.css'; 
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
  <div className="container16">
      <div className="login16-container16">
        <center>
      <h1 style={{color:'white'}}>
        Login
        </h1>
        </center>
      <form>
        <div className="form16-group16">
          <label htmlFor="username">Username</label>
          <input
            type="text9"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form16-group16">
          <label htmlFor="password">Password</label>
          <input
            type="password9"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
          <div className="contact100-form12-checkbox">
						<input className="input-checkbox100" id="ckb" type="checkbox" checked={rememberMe} onChange={handleRememberMeChange}/>
						<label className="label-checkbox100" for="ckb">
							Remember me
						</label>
					</div>
        
        <center>
        < button type="button" onClick={handleLogin} style={{color:'white',backgroundColor:'gray',borderRadius:'10px',padding:'10px'}}>SIGN IN</button>
        </center>
      </form>
      <div className="forgot16-password16">
        <Link to="">Forgot Password?</Link>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
