import Landing from "./pages/landing";
import NavBar from "./component/navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/contact-page";
import AboutPage from "./pages/about-page";
import Collection from "./pages/collection-page";
import Cart from "./pages/cart";
import { useContext } from "react";
import { AppContext } from "./context-store/app-context";
import ProductDetail from "./pages/selected-product-page";

export default function App() {
  const location = useLocation();

  // condition based routing
  const isRoutable =
    location.pathname === "/about" ||
    location.pathname === "/collection" ||
    location.pathname === "/cart" ||
    location.pathname === "/contact" ||
    location.pathname.startsWith("/ProductDetail/");

  // set background color
  const { bgColor } = useContext(AppContext);
  return (
    // ✅ Ek hi wrapper — sab routes isme
    <div
      className={`relative w-full  ${!isRoutable ? "h-screen overflow-hidden" : ""}`}
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.8s ease", // smooth color change
      }}
    >
      {/* ✅ Sirf ye 3 divs conditional hain — Routes nahi */}
      {!isRoutable && (
        <>
          {/* Radial gradient - center dark, edges transparent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,transparent_10%,rgba(0,0,0,1)_100%)]" />

          {/* Bottom fade - thoda kam opacity */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

          {/* Right fade */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-black/70 to-transparent" />
        </>
      )}

      {/* ✅ NavBar hamesha ek baar */}
      <NavBar isSolid={isRoutable} />

      {/* ✅ Ek hi Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
