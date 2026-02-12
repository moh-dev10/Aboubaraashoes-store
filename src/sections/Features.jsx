import { Truck,CreditCard,ShieldCheck,Headphones } from "lucide-react";

const features = [
  {
    icon: <Truck size={32} className="text-primary group-hover:text-white" />,
    title: "توصيل سريع",
    desc: "لـ 58 ولاية حتى باب المنزل"
  },
  {
    icon: <CreditCard size={32} className="text-primary group-hover:text-white" />,
    title: "الدفع عند الاستلام",
    desc: "تأكد من طلبك ثم ادفع بأمان"
  },
  {
    icon: <ShieldCheck size={32} className="text-primary group-hover:text-white
    " />,
    title: "جودة أصلية",
    desc: "أحذية مختارة من أجود الخامات"
  },
  {
    icon: <Headphones size={32} className="text-primary group-hover:text-white" />,
    title: "دعم 24/7",
    desc: "نحن معك في كل وقت للإجابة"
  }
];

const Features = () => {
    return (
        <section className="py-12 bg-gray-50 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-2  lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div key={index}
                            className="flex flex-col items-center text-center 
                            p-6 bg-white rounded-2xl shadow-sm hover:shadow-md 
                            transition-shadow duration-300 border border-gray-100">
                            <div className="mb-4 hover:bg-gray-800 hover:text-white  transition-colors group duration-700
                             ease-in-out p-2 rounded-full">{item.icon}</div>
                            <h3 className="text-xl font-bold text-dark 
                            mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Features;