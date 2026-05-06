import { useState } from "react";

const SignUp = ({ onClose }) => {
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email daalo";
    if (form.password.length < 6)
      errs.password = "Password 6+ characters hona chahiye";
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);
    console.log("Login:", form);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Card */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[400px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-white text-xl font-semibold mb-1">Welcome back</h2>
        <p className="text-white/50 text-sm mb-6">
          Sign in to your Nike account
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-white/60 text-xs mb-1 block">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 outline-none focus:border-white/50 text-sm"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-white/60 text-xs mb-1 block">Password</label>
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 pr-10 text-white placeholder:text-white/30 outline-none focus:border-white/50 text-sm"
            />
            <button
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
            >
              {showPwd ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Forgot */}
        <div className="flex justify-end mb-5">
          <a href="#" className="text-white/40 text-xs hover:text-white">
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-white text-black font-semibold py-2.5 rounded-lg hover:bg-white/90 transition-all text-sm"
        >
          Sign in
        </button>

        <p className="text-center text-white/40 text-xs mt-4">
          Account nahi hai?{" "}
          <span className="text-white cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </>
  );
};

export default SignUp;
