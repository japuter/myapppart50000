import {Link, Outlet} from 'react-router-dom';

const Layout = () => (
  <div>
    <header>
      <nav>
        <Link to="/">Etusivu 👁👁👁</Link>
        <Link to="/profile">Profiili 🐽</Link>
        <Link to="/upload">Upload</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer className="m-12 text-xl">Copyright 22222</footer>
  </div>
);

export default Layout;
