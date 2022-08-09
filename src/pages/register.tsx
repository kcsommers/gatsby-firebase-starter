import { navigate } from 'gatsby';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { useAuth } from '../context/auth.context';

const RegisterPage = ({}) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [registerError, setRegisterError] = useState('');
  const { register } = useAuth();

  const doRegister = async (): Promise<void> => {
    if (!emailInput || !passwordInput) {
      return;
    }
    try {
      await register({
        email: emailInput,
        password: passwordInput,
      });
      navigate('/app/dashboard');
    } catch (error: any) {
      setRegisterError(error.message);
    }
  };

  return (
    <Layout>
      <title>Register</title>
      <main className='flex-centered flex-1 m-4'>
        <div className='flex-1'>
          <h1>Register</h1>
          <div className='card m-auto'>
            <label htmlFor='email'>
              Email
              <input
                type='text'
                name='emailInput'
                id='email'
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </label>
            <label htmlFor='password'>
              Password
              <input
                type='password'
                name='passwordInput'
                id='password'
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </label>
            <Button
              text='Register'
              type='primary'
              onClick={doRegister}
              isAsync={true}
            />
            {registerError && <p>{registerError}</p>}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default RegisterPage;
