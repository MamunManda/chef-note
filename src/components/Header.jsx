import { Link, NavLink } from "react-router-dom";
import { RiMenuAddLine } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageLoad, setisPageLoad] = useState(false);
  const menu = [
    {
      name: "Home",
      path: "/",
      type: "public",
    },
    {
      name: "Recipies",
      path: "/recipies",
      type: "public",
    },
    {
      name: "Login",
      path: "/login",
      type: "public",
    },
    {
      name: "Register",
      path: "/registration",
      type: "public",
    },
  ];
  return (
    <nav>
      <div className="w-11/12 mx-auto py-5 flex justify-between items-center relative">
        <Link to="/" className="logo">
          <span className="text-xl font-bold text-stone-700">
            Chef 🍳 Notes
          </span>
        </Link>

        {/* menu-lg start */}
        <ul className="hidden lg:flex gap-5 ">
          {menu.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </ul>

        <div className="lg:hidden ">
          {!isMenuOpen ? (
            <RiMenuAddLine
              onClick={() => {
                setIsMenuOpen(true);
                setisPageLoad(true);
              }}
              className="text-2xl cursor-pointer"
            ></RiMenuAddLine>
          ) : (
            <CgMenuMotion
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl cursor-pointer"
            ></CgMenuMotion>
          )}

          {
            <ul
              className={`flex animate__animated bg-white flex-col lg:hidden gap-5 absolute w-full top-14  left-0 ${
                isMenuOpen
                  ? "animate__fadeInRight "
                  : isPageLoad
                  ? "animate__fadeOutRight flex "
                  : "hidden"
              } `}
            >
              {menu.map((item) => (
                <NavLink className="border-b-2" key={item.path} to={item.path}>
                  {item.name}
                </NavLink>
              ))}
            </ul>
          }
        </div>
      </div>
    </nav>
  );
};

export default Header;
