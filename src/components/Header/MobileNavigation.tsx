import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import NavItems from "../Navigation/NavItems";

const MobileNavigation = ({ mobileMenu }: { mobileMenu: boolean }) => {

  if (!mobileMenu) {
    return null;
  }

  return (
    <div className="animate-fade-up overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
      <div className="max-h-[calc(100vh-5rem)] space-y-3 overflow-y-auto px-4 py-6">
        <NavItems mobile />
        <div className="mt-4 border-t border-white/10 pt-4">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-4 backdrop-blur-sm">
            <h3 className="mb-2 font-semibold text-white">Let's Connect</h3>
            <p className="mb-4 text-sm text-white/70">
              Ready to discuss your next project or just want to say hello?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-all hover:from-blue-500 hover:to-purple-500"
            >
              Get In Touch <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavigation;
