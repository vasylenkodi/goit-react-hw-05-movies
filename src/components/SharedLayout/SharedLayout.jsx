import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const SharedLayout = () => {
return (
  <div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
    <Suspense >
      <Outlet />
    </Suspense>
  </div>
);
};

export default SharedLayout;
