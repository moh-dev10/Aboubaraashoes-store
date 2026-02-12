import React from 'react';
import { CheckCircle, Home, Phone, MapPin, Truck, Package } from 'lucide-react';
import { getImageUrl } from '../utilies';

const ThankYou = ({ orderData, onReturnHome }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle size={64} className="text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-dark mb-3">
            شكراً على طلبك!
          </h1>
          <p className="text-gray-600 text-lg">
            تم تأكيد طلبك بنجاح. سنتصل بك قريباً
          </p>
        </div>

        {/* Order Number */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="text-center">
            <p className="text-gray-600 mb-2">رقم الطلب</p>
            <p className="text-3xl font-black text-primary">{orderData.orderNumber}</p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold text-right mb-6">معلومات التوصيل</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 justify-end">
              <div className="text-right">
                <p className="text-gray-600 text-sm">الاسم الكامل</p>
                <p className="font-bold text-lg">{orderData.fullName}</p>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <Phone size={20} className="text-primary" />
              </div>
            </div>

            <div className="flex items-start gap-3 justify-end">
              <div className="text-right">
                <p className="text-gray-600 text-sm">رقم الهاتف</p>
                <p className="font-bold text-lg direction-ltr">{orderData.phone}</p>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <Phone size={20} className="text-primary" />
              </div>
            </div>

            <div className="flex items-start gap-3 justify-end">
              <div className="text-right">
                <p className="text-gray-600 text-sm">الولاية</p>
                <p className="font-bold text-lg">{orderData.wilaya}</p>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <MapPin size={20} className="text-primary" />
              </div>
            </div>

            <div className="flex items-start gap-3 justify-end">
              <div className="text-right">
                <p className="text-gray-600 text-sm">البلدية</p>
                <p className="font-bold">{orderData.commune}</p>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <Home size={20} className="text-primary" />
              </div>
            </div>

            <div className="flex items-start gap-3 justify-end">
              <div className="text-right">
                <p className="text-gray-600 text-sm">طريقة التوصيل</p>
                <p className="font-bold">
                  {orderData.deliveryType === 'home' ? 'توصيل للمنزل' : 'استلام من المكتب'}
                </p>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg">
                <Truck size={20} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold text-right mb-6 flex items-center justify-end gap-2">
            <Package size={24} />
            المنتجات المطلوبة
          </h2>

          <div className="space-y-4">
            {orderData.items.map((item, index) => (
              <div key={index} className="flex gap-4 items-center pb-4 border-b border-gray-100 last:border-0">
                <div className="flex-1 text-right">
                  <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                  {item.size && (
                    <p className="text-xs text-gray-500 mb-1">المقاس: {item.size}</p>
                  )}
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-primary font-bold">{item.price}</span>
                    <span className="text-gray-500">×</span>
                    <span className="text-gray-700 font-bold">{item.quantity || 1}</span>
                  </div>
                </div>
                <img
                  src={getImageUrl(item.imageName)}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 pt-6 border-t-2 border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-black text-primary">
                {orderData.total.toLocaleString()} DA
              </span>
              <span className="text-xl font-bold text-gray-900">المجموع الكلي</span>
            </div>
          </div>
        </div>

        {/* Return Button */}
        <button
          onClick={onReturnHome}
          className="w-full bg-dark text-white py-4 rounded-xl font-bold text-lg
          flex items-center justify-center gap-3 hover:bg-primary transition-all 
          active:scale-95 shadow-lg hover:shadow-xl"
        >
          <Home size={24} />
          العودة للصفحة الرئيسية
        </button>
      </div>
    </div>
  );
};

export default ThankYou;