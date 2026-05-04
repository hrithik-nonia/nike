const Contact = () => {
  return (
    <>
      <div className="  w-full flex  absolute h-screen">
        <div className=" w-full h-full between relative">1</div>

        {/* form section */}
        <div className=" absolute right-15 border border-white/30 bg-white/5 rounded-lg py-10 px-15 top-20 backdrop-blur-md ">
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
          <br />
          <button className="mt-5 rounded-lg p-2 w-full border-white/40 bg-white/20 border text-white/100">
            submit
          </button>
        </div>
      </div>
    </>
  );
};
export default Contact;
