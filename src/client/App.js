// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import NavBarMenu from './components/NavBarMenu';
import { Route, Routes, HashRouter, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // <HashRouter>
    //   <div>
    //     <div className='topnav'>
    //       <nav>
    //         <Link to='/'>Home</Link>
    //         <Link to='/mycart'>My Cart</Link>
    //       </nav>
    //     </div>
    //     <Routes>
    //       <Route path='/' element={<Home/>} />
    //       <Route path='/mycart' element={<MyCart/>} />
    //     </Routes>
    //   </div>
    // </HashRouter>
    <BrowserRouter>
      <NavBarMenu />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/mycart' element={<MyCart/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
