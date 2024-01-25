import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <motion.header
        className="h-16 fixed w-full bg-white z-[999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        <nav className="w-full max-w-[1220px] mx-auto h-full px-[20px]  flex justify-between items-center">
          <span className="text-3xl">iManik</span>
          <ul className="space-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <Button>
              <NavLink to="/Login">Login</NavLink>
            </Button>
          </ul>
        </nav>
      </motion.header>
    </div>
  );
};

export default Navbar;
