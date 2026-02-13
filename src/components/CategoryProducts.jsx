import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { getImageUrl } from '../utilies';

const CategoryProducts = ({ category, onClose, addToCart, onProductClick }) => {
  // Mock products for the category
  // In a real app, you would filter products based on the category
  const categoryProducts = [
    {
      id: 1,
      name: "Nike Waffle One",
      price: "18,500 DA",
      imageName: "download-(25).webp",
      category: "sport-shoes"
    },
    {
      id: 2,
      name: "New-Balance-327 - Triple Black",
      price: "22,000 DA",
      imageName: "download-(27).webp",
      category: "men-shoes"
    },
    {
      id: 3,
      name: "Nike M2K Tekno",
      price: "19,500 DA",
      imageName: "Nike.webp",
      category: "sport-shoes"
    },
    {
      id: 4,
      name: "Nike Air Max 1",
      price: "24,000 DA",
      imageName: "Nike-air-max.webp",
      category: "casual-shoes"
    },
    {
      id: 5,
      name: "New Balance 327",
      price: "21,500 DA",
      imageName: "New-Balance-327.webp",
      category: "casual-shoes"
    },
    {
      id: 6,
      name: "Puma Speedcat / Palermo",
      price: "16,000 DA",
      imageName: "download-(30).webp",
      category: "casual-shoes"
    },
    {
      id: 7,
      name: "Nike x Sacai VaporWaffle",
      price: "28,500 DA",
      imageName: "download-(32).webp",
      category: "sport-shoes"
    }
  ];

  // Filter products by category slug
  const filteredProducts = categoryProducts.filter(
    product => product.category === category.slug
  );

  // If no products match, show all products
  const productsToShow = filteredProducts.length > 0 ? filteredProducts : categoryProducts;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-right">
              <h1 className="text-2xl font-black text-dark">{category.name}</h1>
              <p className="text-sm text-gray-500">{productsToShow.length} منتج</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-4">
            {productsToShow.map((product) => (
              <div 
                key={product.id} 
                className="group relative flex flex-col w-full h-full rounded-2xl p-4 
                transition-all hover:shadow-md hover:-translate-y-2.5 ease-in-out duration-300 
                border border-transparent hover:border-gray-100"
              >
                {/* Product Image */}
                <div 
                  onClick={() => {
                    onClose();
                    onProductClick(product);
                  }}
                  className="relative h-64 w-full mb-4 overflow-hidden rounded-2xl 
                  bg-white flex justify-center items-center cursor-pointer"
                >
                  <img 
                    src={getImageUrl(product.imageName)} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform 
                    duration-500 hover:scale-110 hover:rotate-6"
                  />
                </div>

                {/* Product Details */}
                <div className="text-right flex-1 flex flex-col">
                  <h3 
                    onClick={() => {
                      onClose();
                      onProductClick(product);
                    }}
                    className="text-lg min-h-10 line-clamp-2 font-bold text-dark mb-1 
                    cursor-pointer hover:text-primary transition-colors"
                  >
                    {product.name}
                  </h3>
                  <p className="text-primary font-black mt-auto text-xl mb-4">{product.price}</p>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-dark text-white py-3 rounded-xl font-bold 
                    flex items-center justify-center gap-2 hover:bg-primary transition-colors 
                    active:scale-95 cursor-pointer"
                  >
                    <ShoppingCart size={20} />
                    أضف للسلة
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {productsToShow.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-gray-400 mb-4">
                لا توجد منتجات في هذه الفئة حالياً
              </p>
              <button
                onClick={onClose}
                className="bg-primary text-white px-8 py-3 rounded-xl font-bold 
                hover:bg-primary/90 transition-all"
              >
                العودة للتسوق
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryProducts;