import { NAVITEMS } from "@/constrains"
import { NavItemsProps } from "@/types"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const NavItems = ({ mobile = false }: { mobile?: boolean }) => {
  const { pathname } = useLocation();

  const renderNavItem = (item: NavItemsProps, index: number) => {
    const Icon = item.icon
    const active = pathname === item.routerName

    if (mobile) {
      return <motion.div
        key={item.routerName}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
      >
        <Link
          to={item.routerName}
          className={`flex items-center rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 ${active
            ? "border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400"
            : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
        >
          <Icon size={18} className="mr-3" />
          {item.label}
        </Link>
      </motion.div>
    }

    return <Link
      key={item.routerName}
      to={item.routerName}
      className={`group relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${active
        ? "bg-blue-400/10 text-blue-400 shadow-lg shadow-blue-400/20"
        : "text-white/70 hover:bg-white/10 hover:text-white"
        }`}
    >
      <Icon size={16} className="relative z-10 mr-2" />
      <span className="relative z-10">{item.label}</span>
      {active && (
        <motion.div
          layoutId="activeTab"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className="absolute inset-0 rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        />
      )}
    </Link>
  }

  return <>
    {NAVITEMS.map((item, index) => renderNavItem(item, index))}
  </>
}
export default NavItems;
