const AboutPage = () => {
  return (
    <>
      <div className="absolute w-full pt-4">
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src="about-banner-img.jpg"
            alt="banner"
            className="w-full object-contain"
          />

          {/* Nike Text Clip */}
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <h3 className="text-xl ">About Us</h3> <br />
            <p>
              We design for those who move forward. Built with precision, driven
              by performance, and inspired by everyday athletes — our products
              are made to keep up with your pace. Every step matters. And we
              make sure yours counts.
            </p>
            <br />
            <h1
              className="text-[20vw] font-black uppercase select-none"
              style={{
                backgroundImage: "url('about-banner-img.jpg')",
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
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
