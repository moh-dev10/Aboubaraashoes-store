import React, { useState } from 'react';
import { ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { getImageUrl } from '../utilies';

const ProductPage = ({ product, onAddToCart,onCheckout, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock multiple images - in real app, product would have multiple images
  const productImages = [
    product.imageName,
    product.imageName, // You can add more images here
    product.imageName,
  ];

  const sizes = ['38', '39', '40', '41', '42', '43', '44', '45'];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('الرجاء اختيار المقاس');
      return;
    }
    
    onAddToCart({
      ...product,
      size: selectedSize,
      quantity: quantity
    });
    
    // Optional: close the product page after adding to cart
    // onClose();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-lg transition-colors ${
                isFavorite ? 'text-red-500 bg-red-50' : 'hover:bg-gray-100'
              }`}
            >
              <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden group">
              <img
                src={getImageUrl(productImages[currentImageIndex])}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full 
                    shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full 
                    shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-primary w-6'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Images */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-primary scale-95'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={getImageUrl(img)}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div className="text-right space-y-2">
              <h1 className="text-3xl md:text-4xl font-black text-dark">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center justify-end gap-2">
                <span className="text-sm text-gray-600">(127 تقييم)</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>

              <p className="text-4xl font-black text-primary">{product.price}</p>
            </div>

            {/* Description */}
            <div className="text-right border-t border-b border-gray-200 py-6">
              <h3 className="font-bold text-lg mb-2">وصف المنتج</h3>
              <p className="text-gray-600 leading-relaxed">
                حذاء رياضي عصري بتصميم أنيق ومريح، مصنوع من مواد عالية الجودة توفر 
                الراحة والمتانة. مثالي للاستخدام اليومي والأنشطة الرياضية الخفيفة.
                يتميز بنعل مرن يوفر دعماً ممتازاً للقدم طوال اليوم.
              </p>
            </div>

            {/* Size Selection */}
            <div className="text-right space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {selectedSize && `المقاس المختار: ${selectedSize}`}
                </span>
                <h3 className="font-bold text-lg">اختر المقاس</h3>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg font-bold border-2 transition-all ${
                      selectedSize === size
                        ? 'bg-primary text-white border-primary scale-95'
                        : 'bg-white border-gray-200 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="text-right space-y-3">
              <h3 className="font-bold text-lg">الكمية</h3>
              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-lg border-2 border-gray-200 
                  hover:border-primary hover:text-primary font-bold text-xl transition-colors"
                >
                  -
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-lg border-2 border-gray-200 
                  hover:border-primary hover:text-primary font-bold text-xl transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Product Features */}
            <div className="text-right bg-gray-50 rounded-xl p-6 space-y-3">
              <h3 className="font-bold text-lg mb-4">المميزات</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center justify-end gap-2">
                  <span>خامات عالية الجودة</span>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>تصميم عصري ومريح</span>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>مناسب للاستخدام اليومي</span>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>ضمان لمدة سنة</span>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-500 text-white py-2 rounded-xl font-bold 
              flex items-center justify-center gap-2 hover:bg-primary transition-all 
              active:scale-95 text-lg shadow-lg hover:shadow-xl"
            >
              <ShoppingCart size={24} />
              أضف إلى السلة
            </button>
            <button
              onClick={() => {
                if(!selectedSize) return alert("الرجاء اختيار المقاس");
                onCheckout({...product, size: selectedSize, quantity: quantity });              }}
              className="w-full bg-gray-200 text-primary py-2 rounded-xl font-bold 
              flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all 
              active:scale-95 text-lg shadow-lg hover:shadow-xl"
            >
              اشترِ الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;