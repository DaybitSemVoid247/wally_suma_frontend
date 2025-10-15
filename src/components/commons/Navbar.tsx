import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12 relative">
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link to="/" className="text-2xl font-bold text-slate-800">
          Wally Suma
        </Link>
      </div>

      <div className="flex-1"></div>

      <div className="flex gap-5 items-center ml-auto">
        <Link
          to="/account"
          className="border-2 border-slate-700 w-9 h-9 rounded-full grid place-items-center text-lg font-bold"
        >
          F
        </Link>
      </div>
    </header>
  );
};
