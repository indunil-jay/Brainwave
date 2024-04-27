import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants/data";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";

const Header = () => {
  const path = useLocation();
  const [isOpenNavigation, setIsOpenNavigation] = useState<boolean>(false);

  const handleToggleMenu = () => {
    if (isOpenNavigation) {
      setIsOpenNavigation(false);
      enablePageScroll();
    } else {
      setIsOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!isOpenNavigation) return;

    setIsOpenNavigation(false);
    enablePageScroll();
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 px-6 py-4 z-50 xl:px-8 2xl:px-10 bg-dark-1/90  border-b border-b-stroke-1 backdrop-blur-sm ">
        <div className="grid items-center   grid-cols-[1fr_1fr]  lg:grid-cols-[14rem_1fr_14rem]    xl:grid-cols-[20rem_1fr_20rem] 2xl:grid-cols-[25rem_1fr_25rem]">
          {/* logo */}
          <div className="w-[9.5rem] justify-self-start lg:w-[10rem] xl:q-[12rem]  2xl:w-[14rem] h-auto flex items-center">
            <a href="/" className="inline-block leading-6">
              <img src={brainwave} className="h-full w-full object-contain" />
            </a>
          </div>
          {/* nav */}
          <nav className="hidden relative lg:block justify-self-center">
            <div className="flex items-center lg:gap-5 xl:gap-9">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  onClick={handleClick}
                  href={item.url}
                  className={`${
                    item.onlyMobile ? "hidden" : "inline-block"
                  }  lg:px-5 xl:px-8 py-4 font-code uppercase text-xs font-semibold transition-colors hover:text-primary-1 leading-5 ${
                    path.hash === item.url ? "text-light-1" : "text-light-1/50"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* theme toggler */}
          <div className="flex justify-self-end  items-center justify-end gap-9">
            <Button
              styles="text-light-1/50 hidden md:block  border-none"
              href="/#signin"
            >
              New Account
            </Button>
            <Button
              href="/#signup"
              styles="hover:text-primary-1 hover:border-primary-1/50 hidden md:block"
            >
              Sign in
            </Button>
            <Button
              styles="lg:hidden py-2  hover:border-light-1 "
              onClick={handleToggleMenu}
            >
              <HamburgerMenu isOpen={isOpenNavigation} />
            </Button>
          </div>
        </div>
      </header>

      {isOpenNavigation && <MobileNav onClick={handleClick} />}
    </>
  );
};

export default Header;
