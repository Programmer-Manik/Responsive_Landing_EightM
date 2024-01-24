import { NavLink } from "react-router-dom";
import { Button } from "../button";

const Navbar = () => {
  return (
    <div>
      <header className="">
        <nav className="w-full max-w-[1220px] mx-auto bg-green-500 h-full px-[20px] flex justify-between items-center">
          <span className="text-3xl">iManik</span>
          <ul className="space-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <Button>
              <NavLink to="/Login">Login</NavLink>
            </Button>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
