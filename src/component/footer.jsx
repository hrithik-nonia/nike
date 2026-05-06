export default function Footer() {
  return (
    <footer className="border-t border-white/20 px-10 py-5">
      <div className="flex items-center gap-6 text-[13px] text-white/60">
        <span>© 2026 Nike, Inc. All rights reserved</span>
        <a href="#" className="hover:text-white transition-colors">
          Terms of Use
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Nike Privacy Policy
        </a>
        <a href="#" className="hover:text-white transition-colors">
          Store Claim Policy
        </a>
      </div>
    </footer>
  );
}
