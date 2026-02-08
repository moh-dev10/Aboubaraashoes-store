import { useState } from "react";
import {Menu,X,ShoppingBag,Search, MenuIcon} from 'lucide-react';
import { navLinks } from "../data/navigation";



const Navbar = ({cartCount}) => {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <nav className="bg-dark text-white p-4 font-cairo 
        sticky top-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">

                {/* logo */}
                <div className="text-xl font-bold text-primary 
                tracking-tighter cursor-pointer">AbouBaraa<span className="text-white">Shoes</span>
                </div>

                {/* Desktop Menu */}

                <ul className="hidden md:flex gap-8 font-semibold items-center">
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
                    {/* search icon */}
                    <Search className=" text-white w-4 h-4  cursor-pointer
                     hover:text-primary "/>
                     <div className="relative cursor-pointer mr-2 border-r border-gray-700 group">
                        <ShoppingBag className="w-4 h-4 text-white group-hover:text-primary
                         transition-colors  "/>
                        
                        {/* Always show the badge, but only show content when > 0 */}
                        <span className="absolute -top-2 -right-2 bg-primary text-[10px] min-w-4 h-4 
                         rounded-full flex items-center justify-center font-bold animate-bounce
                         transition-all duration-300 group-hover:text-primary group-hover:bg-white shadow-sm
                         px-1 z-50">
                          {cartCount > 0 ? cartCount : '0'}
                        </span>
                    </div>
                    {/* X/Menu Toggle */}

                <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white hover:text-primary
                transition-transform active:scale-90
                 focus:outline-none cursor-pointer">
                    {isOpen? <X size={22}/>:<MenuIcon size={22}/>}
                 </button>
                </div>

                {/* background menu overlay  */}
                <div className={`
                fixed top-15 right-0 w-full h-[calc(100vh-15)] bg-dark/95 
                backdrop-blur-md transition-all duration-300 ease-in-out
                 md:hidden ${isOpen ? 'translate-x-0  opacity-100':
                 'translate-x-full opacity-0'}
                `}>

                    <ul className="flex flex-col p-8 text-right gap-4">
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