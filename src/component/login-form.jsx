const Login = ({ onClose }) => {
  return (
    <>
      {/* Background overlay  */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Login Box */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[400px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-white text-2xl font-semibold mb-6">Sign Up</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 outline-none focus:border-white/50"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 outline-none focus:border-white/50"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 outline-none focus:border-white/50"
          />

          <button className="w-full bg-white text-black font-semibold py-2.5 rounded-lg hover:bg-white/90 transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
