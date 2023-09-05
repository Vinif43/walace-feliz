import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/sobre'>Galeria</Link>
      <Outlet />
    </div>
  );
}

export default App;
