import { FilterDropdown } from "./cropdown";
import { filters, products } from "../constant";
import ProductCard from "../component/product-card";
import Footer from "./footer";
import { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "../context-store/app-context";

const getFilter = (label) => filters.find((f) => f.label === label);

const BATCH = 6; //how many products laod on scroll

export function MainSection() {
  // take value from context
  const { productTitle } = useContext(AppContext);

  const filteredProduct = productTitle
    ? products.filter(
        (p) =>
          (p.type || "").replace(/\s/g, "").toUpperCase() ===
          (productTitle || "").replace(/\s/g, "").toUpperCase(),
      )
    : products;

  const [visible, setVisible] = useState(BATCH);
  const loaderRef = useRef(null);

  const visibleProducts = filteredProduct.slice(0, visible);
  const hasMore = visible < filteredProduct.length;

  // load products when loder div comes on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setVisible((prev) => prev + BATCH);
        }
      },
      { threshold: 1.0 },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore]);
  return (
    <div className="px-8 pt-4">
      <h1 className="text-2xl text-white font-semibold pb-5">
        {productTitle ? productTitle : "All Products"} (
        {filteredProduct ? filteredProduct.length : products.length})
      </h1>
      <div className="grid grid-cols-12 items-start ">
        <div className="col-span-2 border border-white/40 bg-white/10 backdrop-blur-md rounded-lg p-5 text-white sticky top-0 min-h-screen">
          {/* side bar  */}
          <div className="space-y-6">
            <FilterDropdown filter={getFilter("Gender")} />
            <FilterDropdown filter={getFilter("Size")} />
            <FilterDropdown filter={getFilter("Shop By Price")} />
            <FilterDropdown filter={getFilter("Product Label")} />
            <FilterDropdown filter={getFilter("Launched In")} />
            <FilterDropdown filter={getFilter("Colour")} />
            <FilterDropdown filter={getFilter("Shoe Height")} />
          </div>
        </div>

        {/* product section */}
        <div className="col-span-10  grid grid-cols-2 lg:grid-cols-3 gap-4  ps-15">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* loder div */}
        {hasMore && (
          <div ref={loaderRef} className="flex justify-center py-8">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {!hasMore && (
          <p className="text-center text-white/40 text-sm py-8">
            All products loaded
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
