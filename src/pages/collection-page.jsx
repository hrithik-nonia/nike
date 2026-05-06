import { productsType } from "../constant/index";
import ProductType from "../component/product-types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { MainSection } from "../component/main-section";

// register plugin
gsap.registerPlugin(useGSAP, SplitText);

export default function Collection() {
  // heading text animation
  useGSAP(() => {
    // heading text split
    const headingSplit = new SplitText(".product-section-head", {
      type: "chars,words",
    });

    // gradient class add
    gsap.set(headingSplit.words, { overflow: "visible" });

    // gradient class add
    headingSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Animation
    gsap.from(headingSplit.chars, {
      y: 16,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Para — left se stagger hote hue aaye (entry animation)
    gsap.from(".para", {
      y: 60, // left side se aayega
      opacity: 0,
      duration: 0.8,
      stagger: 0.15, // har para thodi der baad aaye
      ease: "power3.out",
    });
  });
  return (
    <>
      <div className="min-h-screen ">
        {/* Header */}
        <header className="text-center px-6 pt-16 pb-12 border-b border-gray-100">
          <h1
            className="product-section-head text-[clamp(64px,10vw,120px)] leading-none tracking-wide text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            SPOTLIGHT
          </h1>
          <p className="para mt-4 text-base font-light text-gray-500 tracking-wide">
            Classic silhouettes and cutting-edge innovation to build your game
            from the ground up.
          </p>
        </header>

        {/* Grid */}
        <main className="max-w-screen-xl mx-auto px-10 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1">
            {productsType.map((product, i) => (
              <ProductType key={product.id} product={product} index={i} />
            ))}
          </div>
        </main>

        {/* products */}
        <div className="border-t border-gray-200 py-3">
          <MainSection />
        </div>

        {/* Google Font import via style tag */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
      </div>
    </>
  );
}
