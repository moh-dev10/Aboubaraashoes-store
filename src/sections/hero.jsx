import React, { useEffect, useState } from 'react'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import herobanner from '/Images/New-Balance-327.webp';
import { getImageUrl } from '../utilies'

const images = [
    getImageUrl('herobanner.webp'),
    getImageUrl('Nike_Dunk_Low_wallpaper__1.png'),
    getImageUrl('Nike_SB_Dunk_Low.png')
]

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setIsTransitioning(false);
        }, 300); // Half of transition duration
    }, 4000); // Increased from 3000 for smoother experience
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative w-full min-h-screen flex flex-col
    md:flex-row items-center
    justify-between py-20 px-6 md:px-16 bg-white
    overflow-hidden '>

        <div className='flex-1 text-right md:text-right w-full
        z-10 md:order-1'>
         <h1 className='flex flex-col items-center md:items-end text-5xl md:text-8xl font-black 
         text-dark leading-[1.1] tracking-tight'>
             <span>أناقة </span>
              <span className='text-primary px-2 italic inline-block mt-2'>بلا حدود</span>
             </h1>
             <p className='mt-6 text-gray-600 text-lg
             md:text-xl max-w-lg ml-auto'>اكتشف مجموعتنا الجديدة من الأحذية الرياضية والكلاسيكية
                 . جودة أصلية وتصميم مريح يناسب كل خطواتك.</p>
        
            {/* CTA btn */}
            <div className='mt-10 flex flex-col sm:flex-row-reverse
            gap-4 justify-center md:justify-start items-center'>
                 <a href='#products'>
                     <button className='bg-primary text-white px-8 py-4 
                     rounded-full font-bold text-lg flex items-center justify-center w-fit gap-2 hover:bg-dark
                      min-w-40 transition-all cursor-pointer shadow-lg shadow-primary/30
                      active:scale-95'>
                         تسوق الان
                         <ShoppingCart size={22}/>
                     </button>
                 </a>
                 <a href='#sales' className='scroll-smooth'>
                     <button className='border-2 border-black px-8 py-4 rounded-full
                      font-bold text-lg flex items-center gap-2 justify-center w-fit min-w-40 
                      hover:border-primary transition-all cursor-pointer
                      active:scale-95 group'>
                         <ArrowLeft size={22} className='group-hover:-translate-x-2 group-hover:scale-110 group-hover:text-primary transition-all'/>
                         تصفح العروض
                     </button>
                 </a>
            </div>
        </div>

        {/* Enhanced background img for mobile with smooth animation */}
        <div className='absolute inset-0 z-0 md:hidden overflow-hidden'>
            <div 
                className='w-full h-full opacity-20 transition-all duration-1000'
                style={{
                    backgroundImage: `url(${herobanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    animation: 'slowZoom 20s ease-in-out infinite',
                }}
            />
            {/* Gradient overlay for better text readability */}
            <div 
                className='absolute inset-0 bg-linear-to-t from-white/60 via-transparent to-white/40'
                style={{
                    animation: 'fadeOverlay 8s ease-in-out infinite',
                }}
            />
        </div>

        {/* Enhanced desktop carousel with smooth transitions */}
        <div className='hidden md:flex justify-center
        items-center bg-gray-50 w-120 h-120 rounded-full relative
        overflow-hidden'>
            {/* Background animation effect */}
            <div className='absolute inset-0 rounded-full'
                style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%)',
                    animation: 'pulse 4s ease-in-out infinite',
                }}
            />
            
            {/* Smooth fade-in carousel images */}
            <img 
                key={currentIndex}
                src={images[currentIndex]}
                alt="New Balance"
                className={`relative drop-shadow-2xl -rotate-12 
                    ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
                    transition-all duration-700 ease-in-out 
                    hover:scale-110 hover:rotate-[-8deg]`}
                style={{width: '85%', maxWidth: 'none'}}
            />

            {/* Progress indicators */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-500 ${
                            index === currentIndex 
                                ? 'w-8 bg-primary' 
                                : 'w-2 bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>

        {/* Add keyframes for animations */}
        <style>{`
            @keyframes slowZoom {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.08);
                }
            }

            @keyframes fadeOverlay {
                0%, 100% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.7;
                }
            }

            @keyframes pulse {
                0%, 100% {
                    transform: scale(1);
                    opacity: 0.5;
                }
                50% {
                    transform: scale(1.05);
                    opacity: 0.8;
                }
            }
        `}</style>
    </section>
  )
}

export default Hero