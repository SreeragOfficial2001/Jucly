
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

  const amount = location.state?.amount || 0;
  const formData = location.state?.formData;
  const cart = location.state?.cart;

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => alert("Failed to load Razorpay SDK.");
    script.onload = () => {
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "Jucly",
        description: "Premium Juice Booking",
        handler: function (response) {
          navigate("/confirmation", {
            state: {
              formData,
              cart,
              amount,
              paymentId: response.razorpay_payment_id,
            },
          });
        },
        prefill: {
          name: formData?.name || "Customer",
          email: formData?.email || "customer@example.com",
          contact: formData?.phone || "0000000000",
        },
        theme: {
          color: "#C49A6C",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f1] via-[#fbe9dd] to-[#f5d9b2] flex items-center justify-center px-6 py-20 font-sans">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl p-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4b2e2e] mb-6 tracking-tight">
          Secure Payment
        </h2>
        <p className="text-lg text-[#6b4f4f] mb-8 leading-relaxed">
          You're just one step away from enjoying your premium juices. Click below to complete your payment.
        </p>

        <div className="mb-10">
          <div className="inline-block bg-[#f6efea] text-[#8c5e2a] px-6 py-3 rounded-full font-semibold shadow-md text-xl">
            Amount to Pay: ₹{amount}
          </div>
        </div>

        <button
          onClick={loadRazorpay}
          className="bg-[#2f1b12] hover:bg-[#b78b53] transition-all duration-300 text-white px-10 py-4 text-lg rounded-full shadow-lg hover:scale-105"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
