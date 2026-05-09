import { useState } from "react";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [imgErr, setImgErr] = useState(false);
  return (
    <>
      <div
        className="bg-[#f5f5f5]  font-sans mb-5 rounded-lg p-4 cursor-pointer group
        w-full                    
        sm:min-w-[280px]          
        md:min-w-[260px]"
      >
        {/* Image Box */}
        <div className="relative  rounded-xl overflow-hidden aspect-square mb-3 group">
          {imgErr ? (
            <div className="w-full h-full between">
              <span className="text-xs text-gray-400 text-center px-4">
                {product.name}
              </span>
            </div>
          ) : (
            <img
              src={product.img}
              alt={product.name}
              onError={() => setImgErr(true)}
              className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105 bg-white"
            />
          )}

          {/* Wishlist Button */}
          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-150"
          >
            <svg
              className={`w-5 h-5 transition-colors duration-200 ${
                liked
                  ? "fill-red-500 stroke-red-500"
                  : "fill-none stroke-gray-700"
              }`}
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
        {/* Info */}
        <div className="space-y-0.5 px-0.5">
          {product.badge && (
            <p className="text-[13px] font-semibold text-[#e44000]">
              {product.badge}
            </p>
          )}
          <p className="text-[14px] font-semibold text-gray-900 leading-snug">
            {product.name}
          </p>
          <p className="text-[13px] text-gray-500">{product.category}</p>

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex gap-1.5 pt-1">
              {product.colors.map((c, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full border border-gray-300 inline-block"
                  style={{ background: c }}
                />
              ))}
            </div>
          )}

          <p className="text-[14px] font-bold text-gray-900 pt-1">
            {product.price}
          </p>
        </div>
      </div>
    </>
  );
}
