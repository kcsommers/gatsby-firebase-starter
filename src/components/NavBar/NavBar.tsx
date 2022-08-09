import { Link } from 'gatsby';
import React from 'react';
import { useAuth } from '../../context/auth.context';
import * as styles from './NavBar.module.scss';

export const NavBar = () => {
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <nav className='border-bottom'>
      <div className='flex flex-space-between p-2'>
        <div>Logo Here</div>
        <div>
          {isLoggedIn ? (
            <>
              <span className={styles.nav_item}>
                Hello, {user.displayName || user.email}
              </span>
              <Link to='/app/dashboard' className={styles.nav_item}></Link>
              <span className={styles.nav_item} onClick={logout} role='button'>
                Log Out
              </span>
            </>
          ) : (
            <>
              <Link className={styles.nav_item} to='/login'>
                Log In
              </Link>
              <Link className={styles.nav_item} to='/register'>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
