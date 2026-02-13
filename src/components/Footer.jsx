import React from 'react';
import { Facebook, Instagram, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 text-right">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-black mb-4">
              NOVA<span className="text-primary">DZ</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              نوفا دي زي تقدم الأزياء العصرية للجزائر بجودة ممتازة وتصاميم حديثة.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4 mt-6 justify-end">
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center 
                hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center 
                hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center 
                hover:bg-primary transition-colors"
                aria-label="TikTok"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-primary transition-colors">
                  تسوق
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  وصل حديثاً
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  تخفيضات
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">خدمة العملاء</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  اتصل بنا
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400">
              دائماً هنا لمساعدتك
            </p>
            <button className="mt-4 bg-white text-gray-800 px-6 py-3 rounded-full font-bold 
            hover:bg-primary hover:text-white transition-all">
              اتصل بنا
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2026 NOVADZ. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;