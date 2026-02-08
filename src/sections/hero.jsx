import React from 'react'
import { ArrowRight ,ShoppingCart} from 'lucide-react'
import shoeImg from '../assets/Images/New Balance 327 Shoes.jpg';

const Hero = () => {

  return (
    <section className='relative w-full min-h-[100vh] flex flex-col
    md:flex-row items-center
    justify-between  py-8 px-6 md:px-16 bg-white
    overflow-hidden'>

        <div className='flex-1 text-right md:text-right w-full
        z-10 md:order-1'>
         <h1 className=' flex flex-col items-center  md:items-end text-5xl md:text-8xl font-black 
         text-dark leading-[1.1] tracking-tight'>
             <br/><span>أناقة </span>
              <span className='text-primary px-2 italic inline-block mt-2'>بلا حدود</span>
             </h1>
             <p className='mt-6 text-gray-600 text-lg
             md:text-xl max-w-lg ml-auto'>اكتشف مجموعتنا الجديدة من الأحذية الرياضية والكلاسيكية
                 . جودة أصلية وتصميم مريح يناسب كل خطواتك.</p>
        

            {/* CTA btn */}
 
            <div className='mt-10 flex flex-col sm:flex-row-reverse
            gap-4 justify-center md:justify-start items-center'>
                 <button className='bg-primary text-white px-8 py-4 
                 rounded-full font-bold text-lg flex items-center justify-center w-fit gap-2 hover:bg-dark
                  min-w-[160px] transition-all cursor-pointer shadow-lg shadow-primary/30
                  active:scale-95'>
                     تسوق الان
                     <ShoppingCart size={22}/>
                 </button>
                 <button className='border-2 border-black px-8 py-4 rounded-full
                  font-bold text-lg flex items-center gap-2 justify-center w-fit min-w-[160px] 
                  hover:bg-gray-100 transition-all cursor-pointer
                  active:scale-95'>
                     تصفح العروض
                     <ArrowRight size={22}/>
                 </button>
            </div>
            </div>

            {/* backround img for mobile */}
        <div className='absolute inset-0 z-0 md:hidden opacity-20'
        style={{
            backgroundImage:`url(${shoeImg})`,
            backgroundSize:`cover`,
            backgroundPosition:`center`,
            backgroundRepeat:`no-repeat`,
        }}>
             

        </div>
        


           <div className='hidden md:flex flex-1 justify-center
           items-center relative'>
            <div className='absoute w-[500px] h-[500]
            bg-primary/5 rounded-full blur-3xl'></div>
            <img src={shoeImg}
             alt="New Balance"
             className='relative w-full max-w-[550px]
             drop-shadow-2xl rotate-[-15deg]' />

           </div>

          
    </section>
  )
}

export default Hero


