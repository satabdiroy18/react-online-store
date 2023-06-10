import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Productsection from './components/Productsection';
import Productdetails from './components/Productdetails';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Cart from './components/Cart';
import './components/css/Style.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Productsection />} />
          <Route path="/productdeatils/:id" element={<Productdetails />} />
          <Route path="/cart" element={<Cart />} />
            
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
