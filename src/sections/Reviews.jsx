import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Customer reviews data
  const reviews = [
    {
      id: 1,
      name: 'Ahmed B',
      location: 'Alger',
      rating: 5,
      text: 'جودة ممتازة وتوصيل سريع! الجاكيت مقاسها مثالي. سأطلب مجدداً بالتأكيد.',
      avatar: 'A',
      color: '#60A5FA'
    },
    {
      id: 2,
      name: 'Karim M',
      location: 'Oran',
      rating: 5,
      text: 'خدمة عملاء رائعة والملابس أفضل من الصور. أنصح بشدة!',
      avatar: 'K',
      color: '#34D399'
    },
    {
      id: 3,
      name: 'Yassine L',
      location: 'Constantine',
      rating: 5,
      text: 'الطقم البيج أصبح المفضل لدي. مثالي للمناسبات الكاجوال والرسمية.',
      avatar: 'Y',
      color: '#F59E0B'
    },
    {
      id: 4,
      name: 'Sarah K',
      location: 'Annaba',
      rating: 5,
      text: 'تصاميم عصرية وجودة عالية. التوصيل كان سريع جداً!',
      avatar: 'S',
      color: '#EC4899'
    },
    {
      id: 5,
      name: 'Mohamed R',
      location: 'Blida',
      rating: 5,
      text: 'أفضل متجر أونلاين للملابس في الجزائر. الأسعار ممتازة والجودة رائعة.',
      avatar: 'M',
      color: '#8B5CF6'
    },
    {
      id: 6,
      name: 'Amina T',
      location: 'Sétif',
      rating: 5,
      text: 'خدمة العملاء ممتازة وردود سريعة. المنتجات كما في الصور تماماً.',
      avatar: 'A',
      color: '#10B981'
    }
  ];

  // Navigate to next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous review
  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); // Added currentIndex to dependencies

  return (
    <section className="py-20 px-6 bg-white" id="reviews">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-right mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-dark">
            آراء <span className="text-primary">عملائنا</span>
          </h2>
          <div className="w-20 h-2 bg-primary mt-4 mr-0 ml-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full 
            shadow-lg hover:bg-primary hover:text-white transition-all -translate-x-4 
            hidden md:flex items-center justify-center"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full 
            shadow-lg hover:bg-primary hover:text-white transition-all translate-x-4 
            hidden md:flex items-center justify-center"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Reviews Carousel - Fixed version */}
          <div className="overflow-hidden px-4 md:px-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(${-currentIndex * 100}%)` // Fixed: negative for RTL
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-full flex-shrink-0 px-4"
                >
                  {/* Review Card */}
                  <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-md 
                  hover:shadow-xl transition-shadow relative">
                    {/* Quote Icon */}
                    <div className="absolute top-8 left-8 opacity-10">
                      <Quote size={80} className="text-primary" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6 justify-end">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 
                    text-right font-medium">
                      "{review.text}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4 justify-end">
                      <div className="text-right">
                        <p className="font-bold text-lg text-dark">.{review.name}</p>
                        <p className="text-gray-500">{review.location}</p>
                      </div>
                      
                      {/* Avatar */}
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center 
                        text-white text-2xl font-bold shadow-lg"
                        style={{ backgroundColor: review.color }}
                      >
                        {review.avatar}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevReview}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-primary 
              hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={nextReview}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-primary 
              hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;