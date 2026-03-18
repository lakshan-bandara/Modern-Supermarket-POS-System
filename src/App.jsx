import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import BillingSection from './components/BillingSection';

const SalesPage = () => (
  <div className="flex-1 glass-panel rounded-[20px] p-6 flex flex-col justify-center items-center gap-4">
    <h1 className="text-4xl font-bold text-blue-400">Sales Dashboard</h1>
    <p className="text-gray-400">Real-time sales analytics and history coming soon.</p>
  </div>
);

const ReportsPage = () => (
  <div className="flex-1 glass-panel rounded-[20px] p-6 flex flex-col justify-center items-center gap-4">
    <h1 className="text-4xl font-bold text-purple-400">Reports Center</h1>
    <p className="text-gray-400">Deep insights and inventory forecasting coming soon.</p>
  </div>
);

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="flex h-screen w-screen p-4 gap-4 bg-[#050507]">
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<ProductGrid onAddToCart={handleAddToCart} />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>

        <BillingSection 
          cart={cart} 
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />
      </div>
    </Router>
  );
}

export default App;
