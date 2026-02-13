import { ShoppingCart } from "lucide-react";
import { getImageUrl } from "../utilies";


const products = [
  {
    id: 1,
    name: "Nike Waffle One",
    price: "18,500 DA",
    imageName: "download (30).webp",
    sizes: [39, 40, 41, 42, 43, 44],
  },
  {
    id: 2,
    name: "New-Balance-327 - Triple Black",
    price: "22,000 DA",
    imageName: "download-(27).webp",
    imageName1:"New-Balance-327.webp",
    colors: [
      { name: 'Black', code: '#000000' },
      { name: 'white', code: '#6B7280' }
    ],
    sizes: [39, 40, 41, 42, 43, 44],
  },
  {
    id: 3,
    name: "Nike M2K Tekno",
    price: "19,500 DA",
    imageName: "download-(32).webp",
    imageName1:"download (31).jpg",
    imageName2:"Nike.jpg",
    colors: [
      { name: 'Black', code: '#000000' },
      { name: 'White', code: '#FFFFFF' },
      { name: 'Grey', code: '#6B7280' }
    ],
    sizes: [39, 40, 41, 42, 43, 44],

  },
  {
    id: 4,
    name: "Nike Air Max 1",
    price: "24,000 DA",
    imageName: "Nike-air-max.webp",
    imageName1:"download (33).jpg",
    colors: [
        { name: 'Black', code: '#000000' },
        { name: 'Grey', code: '#6B7280' }
      ],
      sizes: [40, 41, 42, 43, 44],
    }
  ]
  



const Products = ({ addToCart, onProductClick }) => {
  console.log("Image path test:", getImageUrl("Nike.webp"));
  console.log("Expected URL: /images/Nike.webp");
  console.log("First product image URL:", getImageUrl(products[0].imageName));
  
  return (
    <section className="py-20 px-6 bg-white" id="products">
      <div className="container mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-dark">أحدث <span className="text-primary">التشكيلات</span></h2>
          <div className="w-20 h-2 bg-primary mt-4 mr-0 ml-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col w-full h-full rounded-2xl  
            transition-all hover:shadow-md hover:-translate-y-2.5 ease-in-out duration-300 border border-transparent hover:border-gray-100">
              
              {/* صورة المنتج مع انميشن */}
              <div 
                onClick={() => onProductClick(product)}
                className="relative h-64 w-full mb-4 overflow-hidden  
                bg-white justify-center items-center cursor-pointer"
              >
                <img 
                  src={getImageUrl(product.imageName)} 
                  alt={product.name} 
                  className=" w-full h-full object-cover transition-transform 
                  duration-500 rounded-t-xl hover:scale-102 group"
                />
                <button 
                  onClick={() => addToCart(product)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-40 opacity-0  bg-dark
                 text-white py-2 px-4 rounded-xl font-bold flex items-center justify-center gap-2 whitespace-nowrap  group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary  
                  active:scale-95 cursor-pointer transition-transform ease-in-out duration-500"
                >
                  <ShoppingCart size={20} />
                  أضف للسلة
                </button>
              </div>

              {/* تفاصيل المنتج */}
              <div className="text-right">
                
                <div className="flex flex-col flex-1 text-center">

                <h3 
                  onClick={() => onProductClick(product)}
                  className="text-md text-right line-clamp-1 md:line-clamp-2 truncate  font-bold
                  text-dark mb-1 px-2 cursor-pointer group-hover:text-primary transition-colors"
                >
                  {product.name}
                </h3>
                <p onClick={() => onProductClick(product)}
                 className="text-primary font-black mt-auto text-sm mb-4 px-2 text-right cursor-pointer">
                  {product.price}</p>
                
                
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