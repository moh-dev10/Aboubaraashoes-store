import React from 'react';
import { ShoppingCart, Percent } from 'lucide-react';
import { getImageUrl } from '../utilies';

const Sales = ({ addToCart, onProductClick }) => {
  // Sale products with discount badges
  const saleProducts = [
    {
      id: 101,
      name: 'جاكيت شمواه أزرق',
      price: '7,500 DA',
      oldPrice: '9,500 DA',
      discount: '21%',
      imageName: 'download-(25).webp', // Replace with your actual image
      colors: ['#C4A57B', '#6B7280', '#60A5FA']
    },
    {
      id: 102,
      name: 'سويتر بولو محبوك',
      price: '6,200 DA',
      oldPrice: '7,800 DA',
      discount: '21%',
      imageName: 'download-(27).webp', // Replace with your actual image
      colors: ['#C4A57B', '#1F2937', '#6B7280']
    },
    {
      id: 103,
      name: 'بنطال جينز كلاسيكي',
      price: '5,800 DA',
      oldPrice: '7,500 DA',
      discount: '23%',
      imageName: 'Nike.webp', // Replace with your actual image
      colors: ['#1E40AF', '#1F2937', '#6B7280']
    },
    {
      id: 104,
      name: 'قميص قطني صيفي',
      price: '4,200 DA',
      oldPrice: '6,000 DA',
      discount: '30%',
      imageName: 'Nike-air-max.webp', // Replace with your actual image
      colors: ['#FFFFFF', '#60A5FA', '#FCA5A5']
    }
  ];

  return (
    <section className="py-20 px-6 bg-red-50" id="sales">
      <div className="container mx-auto">
        {/* Section Header with Discount Icon */}
        <div className="text-right mb-12 relative">
          <div className="flex items-center justify-end gap-4 mb-4">
            <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center">
              <Percent size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-dark">
              <span className="text-red-600">تخفيضات</span>
            </h2>
          </div>
          <div className="w-20 h-2 bg-red-600 mt-4 mr-0 ml-auto rounded-full"></div>
          
          {/* View All Link */}
          <a 
            href="#" 
            className="absolute left-0 top-1/2 -translate-y-1/2 text-red-600 font-bold 
            flex items-center gap-2 hover:gap-3 transition-all"
          >
            عرض الكل
            <span>←</span>
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative flex flex-col bg-white rounded-2xl p-4 
              transition-all hover:shadow-xl hover:-translate-y-2 ease-in-out duration-300 
              border border-transparent hover:border-red-100"
            >
              {/* Discount Badge */}
              <div className="absolute top-6 right-6 z-10 bg-red-500 text-white px-3 py-1 
              rounded-full text-sm font-bold shadow-lg">
                تخفيض
              </div>

              {/* Product Image */}
              <div 
                onClick={() => onProductClick(product)}
                className="relative h-64 w-full mb-4 overflow-hidden rounded-2xl bg-white 
                flex justify-center items-center cursor-pointer"
              >
                <img 
                  src={getImageUrl(product.imageName)} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 
                  group-hover:scale-110 group-hover:rotate-3"
                />
              </div>

              {/* Product Details */}
              <div className="text-right flex-1 flex flex-col">
                <h3 
                  onClick={() => onProductClick(product)}
                  className="text-lg min-h-10 line-clamp-2 font-bold text-dark mb-2 
                  cursor-pointer hover:text-red-600 transition-colors"
                >
                  {product.name}
                </h3>

                {/* Color Options */}
                <div className="flex gap-2 mb-3 justify-end">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-end gap-3 mb-4 mt-auto">
                  <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                  <span className="text-red-600 font-black text-xl">{product.price}</span>
                </div>

                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-red-600 text-white py-3 rounded-xl font-bold 
                  flex items-center justify-center gap-2 hover:bg-red-700 transition-colors 
                  active:scale-95 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <ShoppingCart size={20} />
                  أضف للسلة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sales;