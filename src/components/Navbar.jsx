import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fafaf3]/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-12 py-6 max-w-[1440px] mx-auto">

        <h1 className="text-xl font-headline font-bold text-on-surface">
          Chiku Creatives
        </h1>

        <div className="hidden md:flex gap-8 items-center font-headline text-sm">
          <Link to="/" className="text-primary">Work</Link>
          <Link to="/services" className="text-on-surface/70 hover:text-primary">Services</Link>
          <Link to="/about" className="text-on-surface/70 hover:text-primary">About</Link>
          <Link to="/contact" className="text-on-surface/70 hover:text-primary">Contact</Link>
        </div>

        <Link
          to="/contact"
          className="px-6 py-2 bg-primary text-white rounded-md text-sm font-medium"
        >
          Inquire
        </Link>

      </div>
    </nav>
  );
}