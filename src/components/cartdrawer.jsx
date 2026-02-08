
import { useState,useEffect } from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, items, remove }) => {
  // حساب الإجمالي
  const total = items.reduce((acc, item) => acc + parseInt(item.price.replace(/\D/g,'')), 0);

  return (
    <div className={`fixed inset-0 z-100 transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* الخلفية المظلمة */}
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      
      {/* القائمة الجانبية */}
      <div className={`absolute left-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* الهيدر */}
        <div className="p-4 border-b flex justify-between items-center bg-dark text-white">
          <button onClick={onClose} className="hover:rotate-90 transition-transform"><X size={28} /></button>
          <h2 className="text-xl font-bold flex items-center gap-2">سلتك <ShoppingBag size={20}/></h2>
        </div>

        {/* قائمة المنتجات */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 text-gray-400">السلة فارغة، اذهب للتسوق!</div>
          ) : (
            items.map((item, index) => (
              <div key={index} className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl border border-gray-100">
                <button onClick={() => remove(index)} className="text-red-400 hover:text-red-600"><Trash2 size={18}/></button>
                <div className="flex-1 text-right">
                  <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
                  <p className="text-primary font-bold">{item.price}</p>
                </div>
                <img src={item.image} alt="" className="w-16 h-16 object-cover rounded-xl" />
              </div>
            ))
          )}
        </div>

        {/* الفوتر وزر الواتساب */}
        {items.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-black text-dark">{total.toLocaleString()} DA</span>
              <span className="font-bold text-gray-500">المجموع</span>
            </div>
            <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-lg">
              إتمام الطلب (WhatsApp)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;