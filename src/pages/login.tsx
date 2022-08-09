import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { useAuth } from '../context/auth.context';

type LoginPageProps = RouteComponentProps;

const LoginPage = ({}: LoginPageProps) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const { login } = useAuth();

  const doLogin = async (): Promise<void> => {
    if (!emailInput || !passwordInput) {
      return;
    }
    try {
      await login({
        email: emailInput,
        password: passwordInput,
      });
      navigate('/app/dashboard');
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoginError(errorMessage);
    }
  };

  return (
    <Layout>
      <title>Login</title>
      <main className='flex-centered flex-1 m-4'>
        <div className='flex-1'>
          <h1>Login</h1>
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
              text='Log In'
              type='primary'
              onClick={doLogin}
              isAsync={true}
            />
            {loginError && <p>{loginError}</p>}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default LoginPage;
