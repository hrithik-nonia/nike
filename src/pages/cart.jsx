import { useState } from "react";

const shoeSvg = (
  <svg
    viewBox="0 0 120 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <ellipse cx="60" cy="55" rx="52" ry="8" fill="#e8c5c5" opacity="0.3" />
    <path
      d="M10 45 Q20 20 55 18 Q80 16 100 28 Q112 34 108 44 Q106 50 90 52 L18 52 Q8 52 10 45Z"
      fill="#e88fa0"
    />
    <path d="M55 18 Q70 10 85 15 Q95 18 100 28 Q80 16 55 18Z" fill="#d4748a" />
    <path
      d="M18 52 L90 52 Q106 50 108 44 Q106 48 90 50 L16 50 Q10 50 12 45 L10 45 Q8 52 18 52Z"
      fill="#c96070"
    />
    <path
      d="M30 35 Q45 28 65 30"
      stroke="#1a1a1a"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M28 41 Q50 34 72 36"
      stroke="#1a1a1a"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path d="M48 20 Q52 15 58 16 Q62 17 60 22" fill="#1a1a1a" opacity="0.7" />
    <path
      d="M56 18 Q65 12 75 14 Q82 16 80 22 Q70 18 56 18Z"
      fill="#1a1a1a"
      opacity="0.6"
    />
    <path d="M10 45 Q12 38 20 36 L16 50 Q8 50 10 45Z" fill="#b85060" />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);

const HeartIcon = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const PromoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export default function Cart() {
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const unitPrice = 6956;
  const mrp = 8695;
  const discount = mrp - unitPrice;
  const total = unitPrice * qty;
  const totalMrp = mrp * qty;
  const totalDiscount = discount * qty;

  const fmt = (n) => `₹ ${n.toLocaleString("en-IN")}`;

  return (
    <div
      className="min-h-screen bg-gray-50 py-10 px-4 mt-3 "
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .qty-btn { transition: background 0.15s, transform 0.1s; }
        .qty-btn:hover { background: #f0f0f0; }
        .qty-btn:active { transform: scale(0.92); }
        .wishlist-btn { transition: color 0.2s, transform 0.15s; }
        .wishlist-btn:active { transform: scale(0.88); }
        .proceed-btn { transition: background 0.2s, transform 0.1s, box-shadow 0.2s; }
        .proceed-btn:hover { background: #222 !important; box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
        .proceed-btn:active { transform: scale(0.98); }
        .promo-row { transition: background 0.15s; }
        .promo-row:hover { background: #f7f7f7; }
        .card-enter { animation: fadeUp 0.4s ease both; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px);} to { opacity:1; transform:none;} }
        .tag-badge { letter-spacing: 0.04em; }
        .summary-row { border-bottom: 1px solid #f0f0f0; }
        .summary-row:last-of-type { border-bottom: none; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
          Bag
          <span className="ml-2 text-sm font-normal text-gray-400">
            ({qty} item{qty > 1 ? "s" : ""})
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left — Cart Items */}
          <div
            className="flex-1 card-enter"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex gap-5">
                {/* Shoe image box */}
                <div className="w-28 h-28 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                  {shoeSvg}
                </div>

                {/* Product info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-gray-900 text-base leading-snug">
                        LeBron Witness IX EP
                      </p>
                      <p className="text-sm text-gray-400 mt-0.5">
                        Basketball Shoes · Pink
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-base font-semibold text-gray-900">
                        {fmt(unitPrice * qty)}
                      </p>
                      <p className="text-xs text-gray-400 line-through mt-0.5">
                        {fmt(mrp * qty)}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="tag-badge text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium">
                      14 Day Return
                    </span>
                    <span className="tag-badge text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium underline cursor-pointer">
                      Size UK 7
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 mt-5 pt-4 flex items-center gap-3">
                {/* Delete */}
                <button className="qty-btn w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-200">
                  <TrashIcon />
                </button>

                {/* Quantity */}
                <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1 py-1">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="qty-btn w-7 h-7 rounded-full flex items-center justify-center text-lg text-gray-600 font-light select-none"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm font-semibold text-gray-800 tabular-nums">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="qty-btn w-7 h-7 rounded-full flex items-center justify-center text-lg text-gray-600 font-light select-none"
                  >
                    +
                  </button>
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => setWishlisted((w) => !w)}
                  className={`wishlist-btn w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                    wishlisted
                      ? "text-red-500 border-red-200 bg-red-50"
                      : "text-gray-400 border-gray-200 hover:text-red-400 hover:border-red-200"
                  }`}
                >
                  <HeartIcon filled={wishlisted} />
                </button>

                {wishlisted && (
                  <span className="text-xs text-red-400 font-medium animate-pulse">
                    Wishlisted
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right — Summary */}
          <div
            className="w-full lg:w-80 card-enter"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5 tracking-tight">
                Summary
              </h2>

              <div className="space-y-0">
                {[
                  {
                    label: "Bag Total",
                    value: fmt(totalMrp),
                    color: "text-gray-800",
                  },
                  {
                    label: "Discount on MRP",
                    value: `-₹ ${totalDiscount.toLocaleString("en-IN")}`,
                    color: "text-emerald-500",
                  },
                  {
                    label: "Sub Total",
                    value: fmt(total),
                    color: "text-gray-800",
                  },
                  {
                    label: "Shipping Charges",
                    value: "Free",
                    color: "text-emerald-500",
                  },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="summary-row flex justify-between items-center py-3"
                  >
                    <span className="text-sm text-gray-500">{label}</span>
                    <span className={`text-sm font-medium ${color}`}>
                      {value}
                    </span>
                  </div>
                ))}

                <div className="flex justify-between items-center py-3 mt-1">
                  <span className="text-sm font-semibold text-gray-900">
                    You Pay
                  </span>
                  <span className="text-base font-bold text-gray-900">
                    {fmt(total)}
                  </span>
                </div>
              </div>

              {/* Promo */}
              <div className="border-t border-gray-100 mt-2 pt-4">
                <button
                  onClick={() => setPromoOpen((o) => !o)}
                  className="promo-row w-full flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-1"
                >
                  <span className="text-gray-400">
                    <PromoIcon />
                  </span>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-gray-800">
                      Have a promo code?
                    </p>
                    <p className="text-xs text-gray-400">
                      Apply now to get instant savings
                    </p>
                  </div>
                  <span
                    className={`text-gray-400 transition-transform duration-200 ${promoOpen ? "rotate-90" : ""}`}
                  >
                    <ChevronRight />
                  </span>
                </button>

                {promoOpen && (
                  <div className="mt-3 flex gap-2">
                    <input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-gray-400 transition-colors"
                    />
                    <button className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-gray-700 transition-colors">
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* CTA */}
              <button className="proceed-btn mt-5 w-full bg-gray-900 text-white font-semibold text-sm py-4 rounded-2xl tracking-wide">
                Proceed to Buy
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                Free shipping · Secure checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
