// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import NavBarMenu from './components/NavBarMenu';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
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
