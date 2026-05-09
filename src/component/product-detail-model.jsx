import { products } from "../constant";
export default function ProductDetailModal({ onClose, id }) {
  // find product to show
  const product = products.find((p) => p.id === id);
  const { name, desc, category, img, price } = product;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.35)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-xl mx-4 p-8 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#222"
            strokeWidth={2.5}
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Product Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-neutral-100 rounded-lg flex-shrink-0 overflow-hidden">
            <img src={img} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-base font-semibold text-neutral-900">{name}</p>
            <p className="text-sm text-neutral-500">{category}</p>
            <p className="text-base font-semibold text-neutral-900 mt-1">
              {price}
            </p>
            <p className="text-xs text-neutral-400">Inclusive of all taxes</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-700 leading-relaxed mb-5">{desc}</p>

        {/* Benefits */}
        <p className="text-base font-bold text-neutral-900 mb-3">Benefits</p>

        {/* Product Details */}
        <p className="text-base font-bold text-neutral-900 mb-3">
          Product Details
        </p>

        {/* Net Quantity */}
        <p className="text-sm text-neutral-700">
          <span className="font-bold">Net Quantity: </span>1 Pair of Shoes
        </p>
      </div>
    </div>
  );
}
