import React from 'react';
import ProductCard from './components/productCard';

function App() {
  const handleBuyClick = (productName) => {
    alert(`Anda telah memasukan ${productName} ke dalam Bag`);
  };

  const product = {
    name: "Exmood EDP",
    price: 175000,
    image: "https://spaces.ilfen.co/assets/image/produk/EB918091-A5A3-4A3E-A0B9-0C46B23116BC.jpeg",
    sold: "44.000 sold."
  };

  return (
    <div className="container flex mx-auto p-8 mt-8 bg-white">
      <ProductCard
        name={product.name}
        price={product.price}
        image={product.image}
        sold={product.sold}
        onBuyClick={handleBuyClick}
      />

      
    </div>
  );
}

export default App;