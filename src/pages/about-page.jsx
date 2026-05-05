import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutPageText } from "../constant/index.js";

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

  useGSAP(() => {
    // target individual divs
    gsap.utils.toArray(".cont-container").forEach((container) => {
      // container popup from bottom
      gsap.from(container, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // us container ke andar text aur image
      gsap.from(container.querySelectorAll(".text-content, .img-content"), {
        y: 60,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: container, // ✅ same container trigger
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    });
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

        <div className="disc-section flex flex-col gap-10 py-10">
          {aboutPageText.map((item, index) => (
            <div
              className={`cont-container flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-stretch  gap-10 p-10 text-white border border-white/50 bg-white/5 backdrop-blur-sm rounded-lg`}
              key={index}
            >
              {/* LEFT TEXT */}
              <div className="md:w-1/2 border-white/50 bg-white/5 backdrop-blur-lg rounded-lg border p-6 flex items-center">
                <h3 className="text-content text-xl font-semibold leading-relaxed">
                  {item.text}
                </h3>
              </div>

              {/* RIGHT IMAGE */}
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  className="img-content w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
