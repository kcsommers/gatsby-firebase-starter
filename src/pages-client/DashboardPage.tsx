import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useAuth } from '../context/auth.context';

type DashboardPageProps = RouteComponentProps;

export const DashboardPage = ({}: DashboardPageProps) => {
  const { user } = useAuth();
  return (
    <div className='p-4'>
      <div>DashboardPage</div>
      <p>Hello, {user.email}</p>
    </div>
  );
};
