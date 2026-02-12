import React from 'react'
import {X,Trash2,Plus,Minus,ShoppingBag,} from 'lucide-react'
import { getImageUrl } from '../utilies';

const Cartdrawer = ({isOpen,onClose,cartItems,removeFromCart,updateQuantity,onCheckout}) => {

  // calculate total
  const total = cartItems.reduce((acc,item) => { 
  const price = parseInt(item.price.replace(/\D/g,'')); 
  
  return acc + (price * (item.quantity || 1));
  
},0);

  return (
    <div className={`fixed inset-0 z-100 transition-all duration-500 ${isOpen?'visible':
    'invisible'}`}>
      {/* background overlay */}
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm
        transition-opacity ${isOpen?'opacity-100':'opacity-0'}`}
        onClick={onClose}/>

  {/* نافذة السلة الجانبية */}
    <div className={`absolute right-0 top-0
      h-full w-full max-w-sm bg-white shadow-2xl transition-transform
      duration-500 flex flex-col ${isOpen?'translate-x-0':'translate-x-full'}`}>

        {/* header */}

        <div className=' flex justify-between items-center 
        bg-gray-800 text-white  py-2 px-2 mb-4 border-b border-gray-800'>
          <button onClick={onClose}
          className='p-2 hover:bg-gray-400 rounded-xl 
          transition-colors'>
            <X size={16}/>
            </button>
          <h2 className='text-xl font-bold flex items-center
           gap-2 px-1'> سلة التسوق<ShoppingBag size={20}/></h2>
        </div>
      
      {/* list of products */}

      <div className='flex-1 overflow-y-auto
       p-4 space-y-4 '>
        {cartItems.length === 0?(
          <div className=' flex flex-col items-center justify-center 
          h-full text-gray-500 '>
            <ShoppingBag size={64} className='mb-4 opacity-20'/>
           <p> السلة فارغة.اذهب للتسوق</p>
           </div>
        ):(
         cartItems.map((item,index) =>{

         
          console.log("Image Path:", getImageUrl(item.imageName)); // انظر للرابط في الكونسول 
          return (
          <div key={`${item.id}-${index}`} className='flex  gap-4 items-start bg-gray-50 border border-gray-100 p-2 
        rounded-sm'>
            
            <img src={getImageUrl(item.imageName)} 
            alt={item.name} 
            className=' w-16 h-16 object-cover rounded-xl' />
            <div  className='flex-1 '>
              <h4 className=' text-sm line-clamp-1
               mb-1'>{item.name}</h4>
                <p className='text-primary font-bold'>{item.price}</p>
            
            <div className='flex items-center gap-4 
             p-1'>

              <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
              className='p-1 bg-white border border-gray-300 rounded-sm 
              hover:bg-primary hover:text-white transition-colors duration-300'>
                  <Plus size={16}/></button>
                  <span className='font-bold w-4 text-center'>{item.quantity || 1}</span>
              <button  onClick={() => updateQuantity(item.id, Math.max(1,(item.quantity || 1) - 1))}
              className='p-1 bg-white border border-gray-300 rounded-sm
               hover:bg-primary hover:text-white transition-colors duration-300'>
                  <Minus size={16}/></button>
            </div>
            </div>
            <button onClick={() => 
              removeFromCart(item.id)} className='p-2 rounded-sm hover:text-red-600 hover:bg-gray-300'>
                {/* remove-item */}
                <X size={18}/>
            </button>
          </div>
         )}
        ))}
        </div>

      {/* footer and checkout button */}
      {cartItems.length > 0 && (
        <div className='p-6 border-t bg-gray-50'>
          <div className='flex justify-between items-center mb-4'>
            <span className='text-xl font-black text-dark'> 
             {total.toLocaleString()} DA
            </span>
            <span className='font-bold text-gray-500'>المجموع</span>
          </div>
          <button 
            onClick={onCheckout}
            className='w-full bg-gray-800 text-white py-4
            rounded-xl font-bold flex items-center justify-center gap-2
            hover:bg-gray-600 transition-all shadow-lg'>
            اتمام الطلب
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Cartdrawer