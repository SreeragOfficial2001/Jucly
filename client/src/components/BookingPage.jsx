import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import products from "../data/products";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedProducts = location.state?.selectedProducts || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [cart, setCart] = useState(selectedProducts);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const currentQty = prevCart[productId] || 0;
      if (currentQty >= 10) return prevCart;
      return { ...prevCart, [productId]: currentQty + 1 };
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const product = products.find((p) => p.id === parseInt(id));
      const price = parseInt(product.price.replace("₹", ""));
      return total + price * qty;
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = calculateTotal();
    navigate("/payment", {
      state: {
        amount: totalAmount,
        formData,
        cart,
      },
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#fdf8f3] to-[#f3e8e1] min-h-screen px-6 md:px-20 py-12 font-sans">
      <h2 className="text-5xl font-bold text-[#2e1f1f] mb-12 text-center tracking-wide">
        🍹 Premium Juice Booking
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <div className="md:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["name", "email", "phone"].map((field, i) => (
              <input
                key={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c59d5f] shadow-sm"
              />
            ))}
          </div>
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#c59d5f] shadow-sm"
          />

          <h3 className="text-2xl font-semibold text-[#3b2f2f] mt-10">
            Selected Juices
          </h3>

          {Object.keys(cart).length === 0 ? (
            <p className="text-sm text-red-500">
              Please select juices from the homepage first.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {products
                .filter((product) =>
                  Object.keys(cart).includes(product.id.toString())
                )
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition duration-200 border border-gray-100"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-[#2d1d1d] text-lg">
                          {product.name}
                        </h4>
                        <p className="text-sm text-gray-500">{product.price}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => addToCart(product.id)}
                        className="bg-[#3b2f2f] hover:bg-[#5c3d3d] text-white px-4 py-2 rounded-full text-sm shadow-md"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl sticky top-28 h-fit border border-gray-100">
          <h4 className="text-2xl font-semibold mb-6 text-[#2d1d1d]">
            Your Cart
          </h4>
          {Object.keys(cart).length === 0 ? (
            <p className="text-sm text-gray-500">No items selected yet.</p>
          ) : (
            <ul className="space-y-4 mb-6">
              {Object.entries(cart).map(([id, qty]) => {
                const product = products.find((p) => p.id === parseInt(id));
                return (
                  <li
                    key={id}
                    className="flex justify-between items-start text-sm"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {product.name} x {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        className="text-red-500 text-xs hover:underline mt-1"
                      >
                        Cancel
                      </button>
                    </div>
                    <span className="font-semibold text-[#3b2f2f]">
                      ₹{parseInt(product.price.replace("₹", "")) * qty}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

          <hr className="my-4 border-gray-200" />
          <div className="flex justify-between font-semibold text-lg mb-6">
            <span>Total</span>
            <span>₹{calculateTotal()}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#c59d5f] hover:bg-[#b58945] text-white font-semibold py-3 rounded-full shadow-md transition-all duration-200"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
