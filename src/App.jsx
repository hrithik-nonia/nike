import Landing from "./pages/landing";
import NavBar from "./component/navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/contact-page";
import AboutPage from "./pages/about-page";
import Collection from "./pages/collection-page";
import Cart from "./pages/cart";

export default function App() {
  const location = useLocation();

  // condition based routing
  const isRoutable =
    location.pathname === "/about" ||
    location.pathname === "/collection" ||
    location.pathname === "/cart";

  return (
    // ✅ Ek hi wrapper — sab routes isme
    <div
      className={`relative w-full bg-black ${!isRoutable ? "h-screen overflow-hidden" : ""}`}
    >
      {/* ✅ Sirf ye 3 divs conditional hain — Routes nahi */}
      {!isRoutable && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1f1f1f_100%,#0a0a0a_1%,#000_1%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-black to-transparent" />
        </>
      )}

      {/* ✅ NavBar hamesha ek baar */}
      <NavBar />

      {/* ✅ Ek hi Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
