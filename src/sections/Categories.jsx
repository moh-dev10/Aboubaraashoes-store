import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getImageUrl } from '../utilies';

const Categories = ({ onCategoryClick }) => {
  // Reference to the scrollable container
  const scrollContainerRef = useRef(null);

  // Shoe categories data
  const categories = [
    {
      id: 1,
      name: 'أحذية رجالية',
      nameEnglish: 'Men Shoes',
      slug: 'men-shoes',
      image: '../../public/Images/download (20).jpg',
      itemCount: 45
    },
    {
      id: 2,
      name: 'أحذية نسائية',
      nameEnglish: 'Women Shoes',
      slug: 'women-shoes',
      image: '../../public/Images/download (22).jpg',
      itemCount: 38
    },
    {
      id: 3,
      name: 'أحذية أطفال',
      nameEnglish: 'Kids Shoes',
      slug: 'kids-shoes',
      image: '../../public/Images/download (23).jpg',
      itemCount: 28
    },
    {
      id: 4,
      name: 'أحذية رياضية',
      nameEnglish: 'Sport Shoes',
      slug: 'sport-shoes',
      image: '../../public/Images/download (30).webp',
      itemCount: 52
    },
    {
      id: 5,
      name: 'أحذية كاجوال',
      nameEnglish: 'Casual Shoes',
      slug: 'casual-shoes',
      image: '../../public/Images/download (31).jpg',
      itemCount: 34
    },
    {
      id: 6,
      name: 'أحذية رسمية',
      nameEnglish: 'Formal Shoes',
      slug: 'formal-shoes',
      image: '../../public/Images/download (35).jpg',
      itemCount: 24
    },
    {
      id: 7,
      name: 'أحذية شتوية',
      nameEnglish: 'Winter Boots',
      slug: 'winter-boots',
      image: '../../public/Images/download (38).jpg',
      itemCount: 19
    },
    {
      id: 8,
      name: 'صنادل وشباشب',
      nameEnglish: 'Sandals & Slippers',
      slug: 'sandals-slippers',
      image: '../../public/Images/download (40).jpg',
      itemCount: 31
    }
  ];

  /**
   * Smooth scroll function
   * @param {string} direction - 'left' or 'right'
   */
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Calculate scroll amount (one card width + gap)
    const scrollAmount = 320; // Approximate width of one card + gap
    
    if (direction === 'left') {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  /**
   * Handle category click
   * @param {object} category - Selected category
   */
  const handleCategoryClick = (category) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-50" id="categories">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-right mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-dark">
            تسوق حسب <span className="text-primary">الفئة</span>
          </h2>
          <div className="w-20 h-2 bg-primary mt-4 mr-0 ml-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full 
            shadow-xl hover:bg-primary hover:text-white transition-all -translate-x-6
            hover:scale-110 active:scale-95 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft size={28} strokeWidth={3} />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full 
            shadow-xl hover:bg-primary hover:text-white transition-all translate-x-6
            hover:scale-110 active:scale-95 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight size={28} strokeWidth={3} />
          </button>

          {/* Scrollable Categories Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth 
            scrollbar-hide pb-4 px-2"
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-72 group cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {/* Category Card */}
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg 
                group-hover:shadow-2xl transition-all duration-500 transform 
                group-hover:-translate-y-2">
                  {/* Category Image */}
                  <img
                    src={getImageUrl(category.image)}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 
                    transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Category Info */}
                  <div className="absolute bottom-0 right-0 left-0 p-6 text-white text-right">
                    <h3 className="text-2xl font-black mb-2 transform 
                    group-hover:translate-x-2 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-90 mb-3 font-medium">
                      {category.itemCount} منتج متاح
                    </p>
                    <button className="text-sm font-bold flex items-center gap-2 
                    group-hover:gap-4 transition-all mr-auto bg-white/20 backdrop-blur-sm 
                    px-4 py-2 rounded-full hover:bg-white/30">
                      <ChevronLeft size={16} />
                      عرض الكل
                    </button>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-4 border-primary opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint for Mobile */}
          <div className="md:hidden text-center mt-6">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <span>←</span>
              اسحب لرؤية المزيد
              <span>→</span>
            </p>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Hiding CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Categories;