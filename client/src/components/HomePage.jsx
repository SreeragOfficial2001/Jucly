import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import { motion } from "framer-motion";
import axios from "../api/axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(products);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products/list");
        setProducts(response.data); // adjust based on API structure
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  

  

  const handleSelect = (productId) => {
    if (selectedProducts[productId]) {
      const updated = { ...selectedProducts };
      delete updated[productId];
      setSelectedProducts(updated);
    } else {
      setSelectedProducts({ ...selectedProducts, [productId]: 1 });
    }
  };

  const handleQuantityChange = (productId, value) => {
    if (value < 1) return;
    setSelectedProducts({ ...selectedProducts, [productId]: value });
  };

  const goToBooking = () => {
    const selectedIds = Object.keys(selectedProducts);
    if (selectedIds.length > 0) {
      navigate("/booking", { state: { selectedProducts } });
    } else {
      alert("Please select at least one juice to book.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#fef9f4] to-[#f3e9e1] min-h-screen py-16 px-6 md:px-20 font-sans">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-[#2c1c1c] mb-10 drop-shadow-md">
        Explore Our Premium Juice Collection
      </h1>

      <div className="text-right mb-6 text-lg text-[#3b2f2f] font-medium">
        Selected Juices: {Object.keys(selectedProducts).length}
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => {
          const isSelected = selectedProducts[product.id];
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-6 border transition-all duration-300 ${
                isSelected ? "ring-4 ring-[#e6b800] scale-[1.02]" : "hover:scale-[1.03]"
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 bg-[#e6b800] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Selected
                </div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover rounded-xl mb-4 shadow-md"
              />
              <h2 className="text-2xl font-bold text-[#2d1d1d] mb-1">
                {product.name}
              </h2>
              <p className="text-gray-700 text-sm mb-3">{product.description}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-[#e6b800]">
                  ₹{product.price}
                </span>
                <button
                  className={`px-5 py-2 rounded-full text-white font-semibold transition-all duration-200 shadow-md ${
                    isSelected
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-[#3b2f2f] hover:bg-[#5b3f3f]"
                  }`}
                  onClick={() => handleSelect(product.id)}
                >
                  {isSelected ? "Remove" : "Book Now"}
                </button>
              </div>

              {isSelected && (
                <div className="mt-5">
                  <label className="block text-sm font-medium text-[#3b2f2f] mb-1">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={selectedProducts[product.id]}
                    onChange={(e) =>
                      handleQuantityChange(product.id, parseInt(e.target.value))
                    }
                    className="w-24 px-4 py-2 border border-gray-300 rounded-full text-center shadow-inner focus:outline-none focus:ring-2 focus:ring-[#e6b800]"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center mt-14">
        <button
          onClick={goToBooking}
          className="bg-[#3b2f2f] text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-[#5b3f3f] shadow-lg transition duration-300"
        >
          Book Selected Juices ({Object.keys(selectedProducts).length})
        </button>
      </div>
    </div>
  );
};

export default HomePage;
