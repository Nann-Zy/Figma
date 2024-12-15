import React from "react";
import ProductCard from "../Components/ProductCard";
import shoes1 from "../assets/sepatu1.jpeg";
import shoes2 from "../assets/sepatu2.jpeg";
import shoes3 from "../assets/sepatu3.jpeg";
import shoes4 from "../assets/sepatu4.jpeg";
import shoes5 from "../assets/sepatu5.jpeg";
import shoes6 from "../assets/sepatu6.jpeg";
import racket1 from "../assets/raket1.jpeg"; 
import racket2 from "../assets/raket2.jpeg"; 
import racket3 from "../assets/raket3.png"; 
import racket4 from "../assets/raket4.jpeg"; 
import racket5 from "../assets/raket5.jpeg"; 
import racket6 from "../assets/raket6.jpeg"; 

const products = [
  { id: 1, name: "Sepatu 1", price: 100, image: shoes1, category: "Shoes" },
  { id: 2, name: "Sepatu 2", price: 120, image: shoes2, category: "Shoes" },
  { id: 3, name: "Sepatu 3", price: 150, image: shoes3, category: "Shoes" },
  { id: 4, name: "Sepatu 4", price: 130, image: shoes4, category: "Shoes" },
  { id: 5, name: "Sepatu 5", price: 160, image: shoes5, category: "Shoes" },
  { id: 6, name: "Sepatu 6", price: 140, image: shoes6, category: "Shoes" },

  { id: 7, name: "Raket 1", price: 150, image: racket1, category: "Racket" },
  { id: 8, name: "Raket 2", price: 130, image: racket2, category: "Racket" },
  { id: 9, name: "Raket 3", price: 100, image: racket3, category: "Racket" },
  { id: 10, name: "Raket 4", price: 120, image: racket4, category: "Racket" },
  { id: 11, name: "Raket 5", price: 140, image: racket5, category: "Racket" },
  { id: 12, name: "Raket 6", price: 160, image: racket6, category: "Racket" },
];

const Home = () => {
  const shoes = products.filter((product) => product.category === "Shoes");
  const rackets = products.filter((product) => product.category === "Racket");

  return (
    <div id="product" className="w-full bg-white mx-auto py-8">
      {/* Kategori Shoes */}
      <h1 id="shoes" className="text-3xl font-bold font-playfair text-center mb-8" style={{ color: "#FCE96A" }}>
        Shoes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shoes.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
            {/* Kategori Racket */}
            <h1 id="racket" className="text-3xl font-bold font-playfair text-center mt-16 mb-8" style={{ color: "#FCE96A" }}>
        Racket
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rackets.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;