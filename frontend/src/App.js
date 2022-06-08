import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './Cart';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product' element={<Product />}/>
    </Routes>
  );
}

export default App;
