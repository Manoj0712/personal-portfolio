import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { SHORT_NAME } from "@/constrains";
import Navigation from "../Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // Remember which page the menu was opened on, so navigating closes it
  const [menuOpenedOn, setMenuOpenedOn] = useState<string | null>(null);
  const { pathname } = useLocation();
  const mobileMenu = menuOpenedOn === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled || mobileMenu
        ? "border-b border-white/10 bg-black/90 shadow-lg backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="font-signature overflow-visible bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text px-2 py-4 text-2xl text-transparent transition-all duration-300 hover:from-blue-300 hover:to-purple-300 md:text-3xl"
          >
            {SHORT_NAME}
          </Link>
          <Navigation />
          <button
            onClick={() => setMenuOpenedOn(mobileMenu ? null : pathname)}
            className="inline-flex h-9 items-center justify-center rounded-md p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
          >
            {mobileMenu ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
      <MobileNavigation mobileMenu={mobileMenu} />
    </motion.nav>
  )
}

export default Header;
