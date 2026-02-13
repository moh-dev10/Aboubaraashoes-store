import { useState } from "react";
import {Menu,X,ShoppingBag,Search, MenuIcon} from 'lucide-react';
import { navLinks } from "../data/navigation";



const Navbar = ({cartCount, onCartClick}) => {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <nav className="bg-dark text-white p-4 font-ibm-arabic 
        sticky top-0 z-50 shadow-md mb-0" dir="rtl">
            <div className="container mx-auto flex justify-between items-center">

                {/* logo */}
                <div className="text-xl font-bold text-primary 
                tracking-tighter cursor-pointer order-3">AbouBaraa<span className="text-white">Shoes</span>
                </div>

                {/* Desktop Menu */}

                <ul className="hidden md:flex gap-8 font-semibold items-center order-2">
                    {
                        navLinks.map((link) => (
                            <li key={link.id} className="hover:text-primary cursor-pointer
                            transition-colors">
                                {link.title}
                            </li>
                        ))
                    }
                </ul>

                <div className="flex items-center gap-4 
                 pr-4 ">
                    
                     <div  onClick={onCartClick}
                      className="relative cursor-pointer mr-2 p-1 rounded-sm border-r border-gray-700 group order-3
                       hover:bg-primary  transition-colors duration-300">
                        <ShoppingBag  size={20} className=" text-white group-hover:
                         transition-colors "/>
                        
                        {/* Always show the badge, but only show content when > 0 */}
                        <span className="absolute -top-2 -right-2 bg-primary text-[10px] min-w-4 h-4 
                         rounded-full flex items-center justify-center font-bold animate-bounce
                         transition-all duration-300 group-hover:text-primary group-hover:bg-white shadow-sm
                         px-1 z-50">
                          {cartCount > 0 ? cartCount : '0'}
                        </span>
                    </div>

                    {/* X / Menu Toggle */}

                <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-1 rounded-sm text-white hover:bg-primary
                transition-colors duration-300 active:scale-90
                 focus:outline-none cursor-pointer">
                    {isOpen? <X size={20}/>:<MenuIcon size={20}/>}
                 </button>
                </div>

                {/* background menu overlay  */}
                <div className={`
                fixed top-15 right-0 w-full h-[calc(100vh-15)] bg-dark/95 
                backdrop-blur-md transition-all duration-300 ease-in-out
                 md:hidden ${isOpen ? 'translate-x-0  opacity-100':
                 'translate-x-full opacity-0'}
                `}>

                    <ul className="flex flex-col p-8  gap-4 order-2 text-right ">
                        {
                        navLinks.map((link) => (
                            <li key={link.id} className="hover:text-primary cursor-pointer
                            transition-transform hover:scale-90 ease-in-out duration-300">
                                {link.title}
                            </li>
                        ))
                    }
                    </ul>
                </div>
                
            </div>

        </nav>
    )
}

export default Navbar