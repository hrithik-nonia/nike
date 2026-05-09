import { useState } from "react";
import { products } from "../constant";
import { useParams } from "react-router-dom";

const PiHeartLight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 256 256"
    fill="none"
    stroke="currentColor"
    strokeWidth="16"
  >
    <path d="M128 216S28 160 28 92a52 52 0 0 1 100-20 52 52 0 0 1 100 20c0 68-100 124-100 124z" />
  </svg>
);
const PiHeartFill = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 256 256"
    fill="#ef4444"
  >
    <path d="M128 216S28 160 28 92a52 52 0 0 1 100-20 52 52 0 0 1 100 20c0 68-100 124-100 124z" />
  </svg>
);
const RulerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M21.3 8.7 8.7 21.3a2 2 0 0 1-2.8 0L2.7 18a2 2 0 0 1 0-2.8L15.3 2.7a2 2 0 0 1 2.8 0l3.2 3.2a2 2 0 0 1 0 2.8z" />
    <line x1="11" y1="6" x2="6" y2="11" />
    <line x1="14" y1="9" x2="9" y2="14" />
    <line x1="17" y1="12" x2="12" y2="17" />
  </svg>
);

export default function ProductDetail() {
  // take id of clicked product
  const { id } = useParams();

  // finding product by id
  const selectdProduct = products.find((product) => product.id === Number(id));

  // destructure selected product
  const { img, name, badge, category, price, size, desc } = selectdProduct;

  // index \of size arr
  const [currentIndex, setCurrentIndex] = useState(0);

  // total length of arr
  const totalSize = size.length;

  // esitch to next index of size
  const goToSlide = (index) => {
    const newIndex = (index + totalSize) % totalSize;
    setCurrentIndex(newIndex);
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [faved, setFaved] = useState(false);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 1800);
      return;
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="min-h-screen bg-black between p-6 pt-10">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-0  ">
        {/* ── LEFT: Image Panel ── */}
        <div className=" relative ">
          {/* image div */}
          <div className="bg-[#f5f5f5] between p-4 rounded-xl relative min-h-[480px]">
            <img
              src="../../public/nike-shoe/air-force/nike-air-force-1'07-next-nature.avif"
              alt={name}
            />
          </div>
        </div>

        {/* right panel */}
        <div className=" relative ">
          <div className="bg-white flex flex-col p-8 overflow-y-auto max-h-[600px] rounded-xl">
            {/* Header */}
            <p className="text-[11px] font-bold tracking-widest uppercase text-orange-600 mb-1.5">
              {badge}
            </p>
            <h1 className="text-[22px] font-bold text-neutral-900 leading-tight mb-1">
              {name}
            </h1>
            <p className="text-sm text-neutral-400 mb-5">{category}</p>

            {/* Price */}
            <p className="text-xl font-bold text-neutral-900 mb-0.5 pb-5">
              {price}
            </p>

            {/* Size header */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-neutral-800">
                Select Size
              </span>
              <button className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-800 transition-colors font-medium">
                <RulerIcon />
                Size Guide
              </button>
            </div>

            {/* Sizes grid — 2 cols like screenshot */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {size.map((s, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={index}
                    className={`px-3 py-2 rounded-full text-sm border transition-all
                    ${
                      isActive
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 text-neutral-600 hover:border-neutral-400"
                    }`}
                    onClick={() => goToSlide(index)}
                  >
                    {s}
                  </button>
                );
              })}
            </div>

            {/* Add to Bag */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 mb-3
              ${
                added
                  ? "bg-green-700 text-white"
                  : "bg-neutral-900 text-white hover:bg-neutral-700 active:scale-[0.98]"
              }`}
            >
              {added ? "Added to Bag ✓" : "Add to Bag"}
            </button>

            {/* Favourite */}
            <button
              onClick={() => setFaved((p) => !p)}
              className={`w-full py-3.5 rounded-full border text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200
              ${
                faved
                  ? "border-red-400 text-red-500 bg-red-50"
                  : "border-neutral-300 text-neutral-700 hover:border-neutral-400 bg-white"
              }`}
            >
              Favourite
              {faved ? <PiHeartFill /> : <PiHeartLight />}
            </button>

            {/* Description */}
            <hr className="my-5 border-neutral-100" />
            <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>

            {/* view product detail */}
            <p className="pt-4 text-[15px] underline underline-offset-4">
              View Product Detail
            </p>

            {/* Delivery Check */}
            <div className="pt-6">
              <p className="text-sm font-semibold text-neutral-900 mb-1">
                Check delivery date
              </p>
              <p className="text-sm text-neutral-400 mb-3">
                Enter pincode to know exact delivery dates/charges
              </p>
              <div className="flex items-center border border-neutral-300 rounded-xl px-4 h-12">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Pincode"
                  className="flex-1 text-sm text-neutral-800 bg-transparent outline-none placeholder-neutral-400 "
                />
                <button className="text-sm font-medium text-neutral-500 hover:text-neutral-800 transition-colors">
                  Check
                </button>
              </div>
            </div>

            {/* Return & Delivery Info */}
            <div className="flex flex-col gap-3 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {/* Return icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888"
                    strokeWidth={1.8}
                  >
                    <path d="M3 12h18M3 12l4-4m-4 4l4 4" />
                    <rect x={3} y={8} width={18} height={8} rx={2} />
                  </svg>
                  <span className="text-sm text-neutral-800">
                    14-day return and size exchange
                  </span>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-2 whitespace-nowrap"
                >
                  Know More
                </a>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {/* Truck icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#888"
                    strokeWidth={1.8}
                  >
                    <rect x={1} y={3} width={15} height={13} rx={1} />
                    <path d="M16 8h4l3 5v3h-7V8z" />
                    <circle cx={5.5} cy={18.5} r={2.5} />
                    <circle cx={18.5} cy={18.5} r={2.5} />
                  </svg>
                  <span className="text-sm text-neutral-800">
                    Free delivery available
                  </span>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-2 whitespace-nowrap"
                >
                  Know More
                </a>
              </div>
            </div>

            <div className="border-t border-neutral-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
