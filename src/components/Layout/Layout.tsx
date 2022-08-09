import React from 'react';
import { NavBar } from '../NavBar';

export const Layout = ({ children }) => {
  return (
    <div className='flex-column' style={{ minHeight: '100vh' }}>
      <NavBar />
      <div className='flex-1'>{children}</div>
    </div>
  );
};
