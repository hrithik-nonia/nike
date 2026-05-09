import { useState } from "react";

const steps = [
  { label: "Sign Up", status: "done" },
  { label: "Address", status: "active" },
  { label: "Payment", status: "upcoming", num: 3 },
];

const bagItems = [
  {
    id: 1,
    name: "Air Jordan 1 Low SE Men's Shoes",
    size: "UK 10",
    color: "White",
    qty: 1,
    price: 11495,
    oldPrice: null,
  },
  {
    id: 2,
    name: "LeBron Witness IX EP Basketball Shoes",
    size: "UK 7",
    color: "Pink",
    qty: 1,
    price: 6956,
    oldPrice: 8695,
  },
];

function Stepper() {
  return (
    <div className="flex items-center justify-center w-full max-w-lg mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm
              ${step.status !== "upcoming" ? "bg-black text-white" : "bg-neutral-200 text-neutral-500"}`}
            >
              {step.status === "done" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth={2.5}
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : step.status === "active" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth={2.5}
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              ) : (
                step.num
              )}
            </div>
            <span
              className={`text-xs mt-1 font-medium ${step.status === "upcoming" ? "text-neutral-400" : "text-neutral-800"}`}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="w-32 h-px bg-neutral-300 mx-2 mb-4" />
          )}
        </div>
      ))}
    </div>
  );
}

function BagSection() {
  const [open, setOpen] = useState(true);
  const total = bagItems.reduce((s, i) => s + i.price, 0);

  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-base font-bold text-neutral-900">Bag</span>
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-500">
            {bagItems.length} Items
          </span>
          <button onClick={() => setOpen((o) => !o)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#888"
              strokeWidth={2}
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Items */}
      {open && (
        <div className="divide-y divide-neutral-100">
          {bagItems.map((item) => (
            <div key={item.id} className="px-5 py-4">
              <div className="flex gap-4 mb-3">
                <div className="w-20 h-20 bg-neutral-100 rounded-lg flex-shrink-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-900 leading-snug">
                    {item.name}
                  </p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                      Size {item.size}
                    </span>
                    <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                      {item.color}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">
                  Quantity : {item.qty}
                </span>
                <div className="flex items-center gap-2">
                  {item.oldPrice && (
                    <span className="text-sm text-neutral-400 line-through">
                      ₹{item.oldPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-sm font-bold text-neutral-900">
                    ₹{item.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Price Details */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-neutral-200">
        <span className="text-sm font-bold text-neutral-900">
          Price Details
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-neutral-700">
            ₹{total.toLocaleString()}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888"
            strokeWidth={2}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="px-5 py-3 bg-neutral-50 border-t border-neutral-100">
        <p className="text-xs text-neutral-400 text-center">
          Powered by Nykaa Fashion Limited
        </p>
      </div>
    </div>
  );
}

export default function AddressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="border-b border-neutral-200 px-8 py-4 flex items-center justify-between">
        <span className="text-xl font-black">NIKE</span>
        <Stepper />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">
            Choose Address
          </h1>
          <p className="text-sm text-neutral-500 mb-8">
            Detailed address will help our delivery partner reach your doorstep
            quickly
          </p>

          {/* Add Address Card */}
          <div className="border border-neutral-200 rounded-xl flex flex-col items-center justify-center gap-2 py-16 cursor-pointer hover:bg-neutral-50 transition-colors max-w-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#333"
              strokeWidth={1.5}
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span className="text-sm font-medium text-neutral-700">
              Add New Address
            </span>
          </div>
        </div>

        {/* Right — Bag */}
        <div className="md:col-span-1">
          <BagSection />
        </div>
      </div>
    </div>
  );
}
