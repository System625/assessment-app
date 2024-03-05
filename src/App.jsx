import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);


  const reloadPage = () => {
    window.location.reload();
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://finx.ginnsltd.com/finx/login/', {});

      console.log(response.data);
      setLoginSuccess(true);
    } catch (error) {
      console.error('Login failed:', error);
      setLoginFailed(true);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className='flex flex-col items-center justify-center border rounded-[10px] p-[40px]'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        {loginSuccess && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center p-[40px] justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white text-green-600 p-4 rounded mx-auto text-center items-center">
              <p>Login successful!</p>
              <button className='border rounded bg-black p-1 text-white' onClick={reloadPage}>
                back to login page
              </button>
            </div>
          </div>
        )}
        {loginFailed && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white text-red-600 p-4 rounded mx-auto text-center items-center">
              <p>Login Failed!</p>
              <button className='border rounded bg-black p-1 text-white' onClick={reloadPage}>
                back to login page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
