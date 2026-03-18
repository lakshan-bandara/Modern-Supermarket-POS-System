import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, BarChart3, Package, LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: <LayoutDashboard size={24} />, path: '/', label: 'Inventory' },
    { icon: <Package size={24} />, path: '/sales', label: 'Sales' },
    { icon: <BarChart3 size={24} />, path: '/reports', label: 'Reports' },
  ];

  return (
    <div className="w-20 glass-panel rounded-[20px] flex flex-col items-center py-8 gap-8">
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path}
          className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
            location.pathname === item.path 
              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
              : 'text-gray-400 hover:bg-white/5 hover:text-white'
          }`}
          title={item.label}
        >
          {item.icon}
        </Link>
      ))}
      
      <div className="mt-auto">
        <button className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300">
          <LogOut size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
