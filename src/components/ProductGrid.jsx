import { Plus, Search } from 'lucide-react';
import espressoImg from '../assets/products/espresso.png';
import honeyImg from '../assets/products/honey.png';
import breadImg from '../assets/products/bread.png';
import milkImg from '../assets/products/milk.png';

const products = [
  { id: 1, name: 'Premium Espresso Beans', price: 24.99, image: espressoImg },
  { id: 2, name: 'Organic Honey Jar', price: 15.50, image: honeyImg },
  { id: 3, name: 'Fresh Whole Wheat Bread', price: 4.20, image: breadImg },
  { id: 4, name: 'Sleek Almond Milk', price: 6.80, image: milkImg },
  { id: 5, name: 'Dark Chocolate 85%', price: 5.40, icon: '🍫' },
  { id: 6, name: 'Avocado Pack (3)', price: 9.90, icon: '🥑' },
];

const ProductGrid = ({ onAddToCart }) => {
  return (
    <div className="flex-1 glass-panel rounded-[20px] p-6 flex flex-col gap-6 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Inventory</h1>
        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2 gap-3 w-64 shadow-inner">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-2 custom-scrollbar">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="glass-panel-hover glass-panel rounded-2xl p-4 cursor-pointer flex flex-col gap-4 group"
            onClick={() => onAddToCart(product)}
          >
            <div className="w-full aspect-square bg-white/5 rounded-xl overflow-hidden flex items-center justify-center relative">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <span className="text-4xl">{product.icon}</span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-blue-400 font-bold text-xl">${product.price.toFixed(2)}</span>
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Plus size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
