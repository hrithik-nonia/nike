import { useState, useContext } from "react";
import { AppContext } from "../context-store/app-context";

export const FilterDropdown = ({ filter }) => {
  // take value from context
  const { setFilterBy } = useContext(AppContext);

  const [open, setOpen] = useState(false);

  // index of sizes
  const [currentIndex, setCurrentIndex] = useState(0);

  // total no of size
  const totalSize = filter.options.length;

  // esitch to next index of link
  const goToSlide = (index) => {
    const newIndex = (index + totalSize) % totalSize;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-sm font-semibold text-white">{filter.label}</span>

        <span className="text-xs text-gray-500">{open ? "▲" : "▼"}</span>
      </button>
      <hr />

      {/* Options */}
      {open &&
        (filter.label === "Size" ? (
          <ul className="mt-2 grid grid-cols-4 gap-1">
            {filter.options.map((option, index) => {
              const isActive = index === currentIndex;
              return (
                <li
                  key={index}
                  className={` w-full h-8 rounded-full text-[11px] border transition-all between cursor-pointer 
                  ${
                    isActive
                      ? "text-black/70 bg-white/100 border-black/40"
                      : " text-white/70 bg-white/7 border-white/40 backdrop-blur-md"
                  }`}
                  onClick={() => {
                    goToSlide(index);
                    setFilterBy(option);
                  }}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        ) : (
          <ul className="mt-2 space-y-1">
            {filter.options.map((option) => (
              <li key={option}>
                <label
                  className="flex items-center gap-2 text-sm text-white/90 cursor-pointer hover:text-white/60"
                  onClick={() => setFilterBy(option)}
                >
                  <input type="checkbox" className="accent-black" />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
};
