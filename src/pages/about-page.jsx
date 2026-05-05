import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutPage = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".clip-section",
        start: "top top",
        end: "+=600",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to(".nike-text", {
      opacity: 0,
      scale: 1.5,
      duration: 1,
    }).to(
      ".text-overlay",
      {
        opacity: 0,
        duration: 0.5,
      },
      "<",
    );
  });

  return (
    <>
      <div className="w-full bg-black pt-3">
        {/* Hero Section */}
        <div className="clip-section relative h-screen overflow-hidden">
          <img
            src="/about-banner-img.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />

          {/* Clip Text Overlay */}
          <div className="text-overlay absolute inset-0 bg-black flex flex-col items-center justify-center">
            <h1
              className="nike-text text-[20vw] font-black uppercase select-none"
              style={{
                backgroundImage: "url('/about-banner-img.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              NIKE
            </h1>
            <h3 className="nike-text text-xl text-white mt-4">About Us</h3>
            <p className="nike-text text-white text-center max-w-xl mt-4 px-4">
              We design for those who move forward. Built with precision, driven
              by performance, and inspired by everyday athletes — our products
              are made to keep up with your pace.
            </p>
          </div>
        </div>

        {/* ✅ Yeh sab ab dikh rahe hain */}
        <div className="bg-green-300 p-10">hello green</div>
        <div className="bg-blue-300 p-10">hello blue</div>
        <div className="bg-gray-300 p-10">hello gray</div>
        <div className="bg-blue-800 p-10 text-white">hello dark blue</div>
      </div>
    </>
  );
};

export default AboutPage;
