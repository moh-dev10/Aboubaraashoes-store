import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Music2, X } from 'lucide-react';

const ContactUs = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

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
            <h1 className="text-2xl font-black text-dark">اتصل بنا</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">
                نحن هنا <span className="text-primary">لمساعدتك</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                لا تتردد في التواصل معنا. فريقنا جاهز للإجابة على جميع استفساراتك 
                ومساعدتك في أي وقت.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="font-bold text-lg mb-1">الهاتف</h3>
                    <p className="text-gray-600 direction-ltr text-right">+213 XXX XXX XXX</p>
                    <p className="text-gray-600 direction-ltr text-right">+213 XXX XXX XXX</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@novadz.com</p>
                    <p className="text-gray-600">support@novadz.com</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="font-bold text-lg mb-1">العنوان</h3>
                    <p className="text-gray-600">الجزائر العاصمة</p>
                    <p className="text-gray-600">الجزائر</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                    <p className="text-gray-600">السبت - الخميس: 9:00 - 18:00</p>
                    <p className="text-gray-600">الجمعة: مغلق</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-primary/5 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4 text-right">تابعنا على</h3>
              <div className="flex gap-4 justify-end">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center 
                  hover:bg-primary hover:text-white transition-colors shadow-md"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center 
                  hover:bg-primary hover:text-white transition-colors shadow-md"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center 
                  hover:bg-primary hover:text-white transition-colors shadow-md"
                >
                  <Music2 size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-black text-dark mb-6 text-right">
              أرسل لنا رسالة
            </h2>

            {isSubmitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-green-700">سنتواصل معك قريباً</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-right text-gray-700 font-bold mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-lg 
                    focus:outline-none focus:border-primary transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-right text-gray-700 font-bold mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-lg 
                    focus:outline-none focus:border-primary transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-right text-gray-700 font-bold mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-lg 
                    focus:outline-none focus:border-primary transition-colors"
                    placeholder="05XX XXX XXX"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-right text-gray-700 font-bold mb-2">
                    الموضوع *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-lg 
                    focus:outline-none focus:border-primary transition-colors"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-right text-gray-700 font-bold mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 text-right border-2 border-gray-200 rounded-lg 
                    focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold 
                  flex items-center justify-center gap-2 hover:bg-primary/90 transition-all 
                  active:scale-95 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  إرسال الرسالة
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;