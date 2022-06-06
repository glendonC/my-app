import { Routes, Route } from 'react-router-dom';
import './App.css';

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
