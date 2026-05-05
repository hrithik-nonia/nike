import Landing from "./pages/landing";
import NavBar from "./component/navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./pages/contact-page";
import AboutPage from "./pages/about-page";
import Collection from "./pages/collection-page";
export default function App() {
  const location = useLocation();
  const isAbout = location.pathname === "/about";
  return (
    <>
      {isAbout ? (
        <div className="bg-black">
          <NavBar />
          <AboutPage />
        </div>
      ) : (
        <div className="relative h-screen w-full bg-black overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1f1f1f_100%,#0a0a0a_1%,#000_1%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-black to-transparent" />
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collection" element={<Collection />} />
          </Routes>
        </div>
      )}
    </>
  );
}
