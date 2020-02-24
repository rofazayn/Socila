import React from 'react';
import { NavLink } from 'react-router-dom';

const DummyNavbar = () => {
  return (
    <div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li>
          <NavLink to='/' style={{ padding: '1rem' }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' style={{ padding: '1rem' }}>
            Sign in
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' style={{ padding: '1rem' }}>
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DummyNavbar;
