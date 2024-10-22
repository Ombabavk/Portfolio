import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* You can add a Footer component here if needed */}
    </div>
  );
};

export default Layout;
