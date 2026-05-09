import { useState, useContext } from "react";
import { AppContext } from "../context-store/app-context";
AppContext;
export default function ProductType({ product, index }) {
  // take value from context
  const { setProductTitle } = useContext(AppContext);
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-3 p-5 rounded-xl cursor-pointer transition-all duration-200"
      style={{
        background: hovered ? "#f5f5f5" : "transparent",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        animationDelay: `${index * 40}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setProductTitle(product.type)}
    >
      <div className="w-full  h-24 between">
        {imgError ? (
          <div className="w-24 h-16 bg-white rounded-lg between">
            <span className="text-xs text-gray-400 text-center px-1">
              {product.name}
            </span>
          </div>
        ) : (
          <img
            src={product.img}
            alt={product.name}
            className="max-h-24 max-w-full object-contain transition-transform duration-200"
            style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <span className="text-[13px] font-medium text-white text-center tracking-wide leading-tight">
        {product.name}
      </span>
    </div>
  );
}
