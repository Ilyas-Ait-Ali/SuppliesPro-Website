import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeaderFr from './components_fr/HeaderFr'; 
import Footer from './components/Footer';
import FooterFr from './components_fr/FooterFr'; 
import HomePage from './components/HomePage';
import HomePageFr from './components_fr/HomePageFr'; 
import FoodSupplements from './components/FoodSupplements';
import FoodSupplementsFr from './components_fr/FoodSupplementsFr'; 
import SportsEquipments from './components/SportsEquipments';
import SportsEquipmentsFr from './components_fr/SportsEquipmentsFr';
import AboutUs from './components/AboutUs';
import AboutUsFr from './components_fr/AboutUsFr';
import ContactPage from './components/ContactUs';
import ContactPageFr from './components_fr/ContactUsFr';
import Register from './components/Register';
import RegisterFr from './components_fr/RegisterFr';
import Login from './components/Login';
import LoginFr from './components_fr/LoginFr';
import Cart from './components/Cart';
import CartFr from './components_fr/CartFr';
import ProductDetail from './components/ProductDetail';
import ProductDetailFr from './components_fr/ProductDetailFr';
import ClientProgress from './components/ClientProgress';
import ClientProgressFr from './components_fr/ClientProgressFr';
import Compare from './components/Compare';
import CompareFr from './components_fr/CompareFr';
import Chat from './components/Chat';
import ChatFr from './components_fr/ChatFr'; 
import { CartProvider } from './context/CartContext';
import { CompareProvider } from './context/CompareContext';
import './App.css';

function App() {
  const [isFrench, setIsFrench] = useState(false);

  const handleLanguageToggle = () => {
    setIsFrench(!isFrench);
  };

  return (
    <CartProvider>
      <CompareProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            {isFrench ? <HeaderFr /> : <Header />}
            <button onClick={handleLanguageToggle}>
              {isFrench ? 'Switch to English' : 'Passer en Français'}
            </button>
            <Routes>
              <Route path="/" element={<Layout component={isFrench ? <HomePageFr /> : <HomePage />} />} />
              <Route path="/food-supplements" element={<Layout component={isFrench ? <FoodSupplementsFr /> : <FoodSupplements />} />} />
              <Route path="/sports-equipments" element={<Layout component={isFrench ? <SportsEquipmentsFr /> : <SportsEquipments />} />} />
              <Route path="/about-us" element={<Layout component={isFrench ? <AboutUsFr /> : <AboutUs />} />} />
              <Route path="/contact-us" element={<Layout component={isFrench ? <ContactPageFr /> : <ContactPage />} />} />
              <Route path="/register" element={<Layout component={isFrench ? <RegisterFr /> : <Register />} />} />
              <Route path="/login" element={<Layout component={isFrench ? <LoginFr /> : <Login />} />} />
              <Route path="/cart" element={<Layout component={isFrench ? <CartFr /> : <Cart />} />} />
              <Route path="/client-progress" element={<Layout component={isFrench ? <ClientProgressFr /> : <ClientProgress />} />} />
              <Route path="/compare" element={<Layout component={isFrench ? <CompareFr /> : <Compare />} />} />
              <Route path="/product/:category/:productId" element={<Layout component={isFrench ? <ProductDetailFr /> : <ProductDetail />} />} />

              {/* French Routes */}
              <Route path="/fr" element={<Layout component={<HomePageFr />} />} />
              <Route path="/fr/food-supplements" element={<Layout component={<FoodSupplementsFr />} />} />
              <Route path="/fr/sports-equipments" element={<Layout component={<SportsEquipmentsFr />} />} />
              <Route path="/fr/about-us" element={<Layout component={<AboutUsFr />} />} />
              <Route path="/fr/contact-us" element={<Layout component={<ContactPageFr />} />} />
              <Route path="/fr/register" element={<Layout component={<RegisterFr />} />} />
              <Route path="/fr/login" element={<Layout component={<LoginFr />} />} />
              <Route path="/fr/cart" element={<Layout component={<CartFr />} />} />
              <Route path="/fr/client-progress" element={<Layout component={<ClientProgressFr />} />} />
              <Route path="/fr/compare" element={<Layout component={<CompareFr />} />} />
              <Route path="/fr/product/:category/:productId" element={<Layout component={<ProductDetailFr />} />} />
            </Routes>
            {isFrench ? <FooterFr /> : <Footer />}
            {isFrench ? <ChatFr /> : <Chat />}
          </div>
        </Router>
      </CompareProvider>
    </CartProvider>
  );
}

const Layout = ({ component }) => (
  <div>
    {component}
  </div>
);

export default App;
