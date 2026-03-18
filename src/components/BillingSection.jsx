import { FileText, CreditCard, Trash2, X, ShoppingCart } from 'lucide-react';
import jsPDF from 'jspdf';

const BillingSection = ({ cart, onRemoveFromCart, onClearCart }) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleGeneratePDF = () => {
    if (cart.length === 0) return alert('Cart is empty!');
    
    const doc = new jsPDF();
    
    // Modern Invoice Header
    doc.setFillColor(31, 41, 55); 
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('SUPERMARKET POS', 20, 25);
    
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.text(`DATE: ${new Date().toLocaleString()}`, 140, 25);
    
    // Items
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text('INVOICE DETAILS', 20, 60);
    
    let y = 80;
    doc.setFontSize(11);
    doc.text('ITEM', 20, y);
    doc.text('PRICE', 160, y);
    doc.line(20, y + 2, 190, y + 2);
    
    y += 10;
    cart.forEach((item) => {
      doc.text(item.name, 20, y);
      doc.text(`$${item.price.toFixed(2)}`, 160, y);
      y += 10;
    });
    
    y += 10;
    doc.line(20, y, 190, y);
    y += 10;
    
    doc.setFont(undefined, 'bold');
    doc.text('SUBTOTAL:', 120, y);
    doc.text(`$${subtotal.toFixed(2)}`, 160, y);
    y += 8;
    doc.text('TAX (8%):', 120, y);
    doc.text(`$${tax.toFixed(2)}`, 160, y);
    y += 10;
    
    doc.setFontSize(16);
    doc.setTextColor(59, 130, 246);
    doc.text('TOTAL:', 120, y);
    doc.text(`$${total.toFixed(2)}`, 160, y);
    
    doc.save('pos-invoice.pdf');
  };

  return (
    <div className="w-[380px] glass-panel rounded-[20px] p-6 flex flex-col gap-6 shadow-2xl relative">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Billing</h2>
        {cart.length > 0 && (
          <button 
            onClick={onClearCart}
            className="p-2 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full opacity-30 gap-4">
            <ShoppingCart size={48} />
            <p className="text-sm font-medium">Cart is empty</p>
          </div>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="group bg-white/5 border border-white/5 rounded-xl p-3 flex justify-between items-center hover:border-blue-500/30 transition-all">
              <div className="flex flex-col gap-0.5">
                <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                <p className="text-xs text-blue-400 font-bold">${item.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => onRemoveFromCart(index)}
                className="p-1.5 rounded-full text-gray-500 hover:bg-red-500/20 hover:text-red-400 transition-all"
              >
                <X size={14} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="space-y-3 pt-6 border-t border-white/10 mt-auto">
        <div className="flex justify-between text-sm text-gray-400 font-medium">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-400 font-medium">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold">Total</span>
          <span className="text-2xl font-black text-white">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2">
        <button 
          onClick={handleGeneratePDF}
          className="flex items-center justify-center gap-2 py-3.5 px-4 bg-white/5 border border-white/10 rounded-xl font-bold text-sm tracking-wide hover:bg-white/10 transition-all group"
        >
          <FileText size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
          PDF Invoice
        </button>
        <button 
          className="flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all active:scale-95"
          onClick={() => alert('Order placed successfully!')}
        >
          <CreditCard size={18} />
          Checkout
        </button>
      </div>
    </div>
  );
};

export default BillingSection;
