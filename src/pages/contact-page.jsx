import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);
const Contact = () => {
  // animate heading
  useGSAP(() => {
    const split = new SplitText(".cont-heading", { type: "chars" });

    gsap.set(split.chars, { display: "inline-block" });

    gsap.from(split.chars, {
      x: -60,
      opacity: 0,
      duration: 0.5,
      stagger: 0.04,
      ease: "bounce.out",
    });

    return () => split.revert();
  }, []);

  // animate left section
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".para-1", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    tl.from(".cont-detail", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    tl.from(".para-2", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  // animate form
  useGSAP(() => {
    gsap.fromTo(
      ".form-section",
      { scale: 0, transformOrigin: "center", opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
      },
    );
  });
  return (
    <>
      <div className="  w-full flex  absolute h-screen">
        <div className=" w-full h-full top-20 left-15 relative">
          <div>
            <h1 className="cont-heading text-6xl font-bold leading-tight text-white">
              Get in Touch
            </h1>
            <p className="para-1 text-white/80 text-lg max-w-md">
              Questions, feedback, or need support? We’re here to help you move
              forward — every step of the way.
            </p>
            <div className="cont-detail text-sm text-white/70 space-y-2 mt-4">
              <p>
                <span className="text-white font-semibold">Email:</span>
                support@stepup.com
              </p>
              <p>
                <span className="text-white font-semibold">Phone:</span> +91
                98765 43210
              </p>
              <p>
                <span className="text-white font-semibold">Hours:</span> Mon –
                Sat | 9 AM – 8 PM
              </p>
            </div>
            <p className="para-2 text-white/50 text-sm mt-6 max-w-sm">
              Built for performance. Designed for movement. Let’s take your next
              step together.
            </p>
          </div>
        </div>

        {/* form section */}
        <form className="form-section absolute right-15 border border-white/30 bg-white/5 rounded-lg py-10 px-15 top-20 backdrop-blur-md ">
          <h2 className="text-xl font-semibold mb-6 text-white">
            Send Message
          </h2>
          <div className="flex gap-5 text-sm">
            <input
              type="text "
              placeholder="first name"
              className="  rounded-lg p-2 border-white/40 bg-white/20 border text-white/100"
            />
            <input
              type="text "
              placeholder="last name"
              className=" border-white/40 bg-white/20 border text-white/100 rounded-lg p-2"
            />
          </div>

          <input
            type="email"
            placeholder="email"
            className=" border-white/40 bg-white/20 border text-white/100 mt-5 rounded-lg p-2 w-full"
          />
          <br />

          <textarea
            name="enter"
            className=" border-white/40 bg-white/20 border text-white/100 mt-5 rounded-lg p-2 w-full"
          ></textarea>
          <br />

          <input type="checkbox" />
          <span className="ms-1 text-white text-sm">I agree to the terms</span>
          <br />

          <button className="mt-5 rounded-lg p-2 w-full border-white/40 bg-white/20 border text-white/100">
            submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
