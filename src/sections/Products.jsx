import { ShoppingCart } from "lucide-react";


const products = [
  {
    id: 1,
    name: "Nike Waffle One - White/Black",
    price: "18,500 DA",
    imageName: "download (25).webp"
  },
  {
    id: 2,
    name: "New Balance 327 - Triple Black",
    price: "22,000 DA",
    imageName: "download (27).webp"
  },
  {
    id: 3,
    name: "Nike M2K Tekno - White/Pure Platinum",
    price: "19,500 DA",
    imageName: "Nike😮_💨💓.webp"
  },
  {
    id: 4,
    name: "Nike Air Max 1 - White/Brown",
    price: "24,000 DA",
    imageName: "Nike air max.webp"
  },
  {
    id: 5,
    name: "New Balance 327 - White/Navy/Gum",
    price: "21,500 DA",
    imageName: "New Balance 327 Shoes.webp"
  },
  {
    id: 6,
    name: "Puma Speedcat / Palermo - Triple Black",
    price: "16,000 DA",
    imageName: "download (30).webp"
  },
  {
    id: 7,
    name: "Nike x Sacai VaporWaffle - Sail/Cream",
    price: "28,500 DA",
    imageName: "download (32).webp"
  }
];

const getImageUrl = (name) => {
    return new URL(`../assets/Images/${name}`,
    import.meta.url).href;
};

const Products = ({addToCart}) => {
  return (
    <section className="py-20 px-6 bg-white" id="products">
      <div className="container mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-dark">أحدث <span className="text-primary">التشكيلات</span></h2>
          <div className="w-20 h-2 bg-primary mt-4 mr-0 ml-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-1">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col w-full h-full  rounded-2xl p-4 
            transition-all  hover:shadow-md hover:-translate-y-2.5 ease-in-out duration-300 border border-transparent hover:border-gray-100">
              
              {/* صورة المنتج مع انميشن */}
              <div className="relative h-64  w-full mb-4 overflow-hidden rounded-2xl 
              bg-white justify-center items-center">
                <img 
                  src={getImageUrl(product.imageName)} 
                  alt={product.name} 
                  className=" w-full h-full object-cover  transition-transform 
                  duration-500 hover:scale-110 hover:rotate-6"
                />
              </div>

              {/* تفاصيل المنتج */}
              <div className="text-right ">
                
                <div className="flex flex-col flex-1 text-center">

                <h3 className="text-lg min-h-10 line-clamp-2 font-bold text-dark mb-1">{product.name}</h3>
                <p className="text-primary font-black mt-auto text-xl mb-4">{product.price}</p>
                
                <button onClick={() => addToCart(product)}
                 className="w-full bg-dark text-white py-3 rounded-xl font-bold 
                flex items-center justify-center gap-2 hover:bg-primary transition-colors 
                active:scale-95 cursor-pointer">
                  <ShoppingCart size={20} />
                  أضف للسلة
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Products;