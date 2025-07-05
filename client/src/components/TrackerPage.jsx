import React, { useState } from "react";

const statuses = ["Processing", "Packed", "Out for Delivery", "Delivered"];

const statusImages = {
  Processing: "https://cdn-icons-png.flaticon.com/512/5955/5955632.png",
  Packed: "https://cdn-icons-png.flaticon.com/512/3103/3103456.png",
  "Out for Delivery": "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  Delivered: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
};

const TrackerPage = () => {
  const [orderId, setOrderId] = useState("");
  const [currentStage, setCurrentStage] = useState(null);

  const trackOrder = () => {
    if (!orderId.trim()) return;
    const stage = Math.floor(Math.random() * statuses.length);
    setCurrentStage(stage);
  };

  return (
    <div className="bg-gradient-to-br from-[#fdfaf6] to-[#f3e5dc] min-h-screen px-6 md:px-20 py-16 font-sans">
      <h2 className="text-5xl font-extrabold text-center text-[#2c1f1f] mb-14 tracking-wide">
        Track Your Order
      </h2>

      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 mb-16 shadow-lg bg-white/60 backdrop-blur-lg p-6 rounded-xl border border-[#e2d6cc]">
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59d5f] text-gray-800 placeholder:text-gray-400"
        />
        <button
          onClick={trackOrder}
          className="bg-[#2a1d1d] text-white px-6 py-3 rounded-lg hover:bg-[#b78b53] transition duration-300 shadow-md"
        >
          Track
        </button>
      </div>

      {currentStage !== null && (
        <>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-lg border border-[#e2d6cc] p-10 rounded-3xl shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-between relative">
                {statuses.map((status, index) => (
                  <div key={index} className="flex flex-col items-center w-full text-center z-10">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full font-bold border-4 mb-3 transition-all duration-300 ${
                        index <= currentStage
                          ? "bg-[#c59d5f] text-white border-[#c59d5f] shadow-lg"
                          : "bg-gray-200 text-gray-500 border-gray-300"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`text-sm sm:text-base ${
                        index <= currentStage
                          ? "text-[#2a1d1d] font-semibold"
                          : "text-gray-400"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                ))}

                <div className="absolute top-6 left-6 right-6 h-1 bg-gray-300 z-0 sm:block hidden rounded-full" />
                <div
                  className="absolute top-6 left-6 h-1 bg-[#c59d5f] z-0 sm:block hidden transition-all duration-500 rounded-full"
                  style={{
                    width: `${(currentStage / (statuses.length - 1)) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-14 max-w-md mx-auto text-center">
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-[#e2d6cc]">
              <img
                src={statusImages[statuses[currentStage]]}
                alt={statuses[currentStage]}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#2a1d1d] mb-2">
                {statuses[currentStage]}
              </h3>
              <p className="text-gray-600 text-sm">
                Your order is currently at the <strong>{statuses[currentStage]}</strong> stage.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TrackerPage;
