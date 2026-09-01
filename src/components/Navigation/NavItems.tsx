import { NAVITEMS } from "@/constrains"
import { NavItemsProps } from "@/types"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NavItems = () => {
  const [currentSection, setCurrentSection] = useState<string>("Home")
  const navigation = useNavigate();

  const routerNavigation = (item: NavItemsProps) => {
    setCurrentSection(item.label)
    navigation(item.routerName)
  }

  const renderNavItem = (item: NavItemsProps) => {
    const Icon = item.icon

    return <button
      onClick={() => routerNavigation(item)}
      className="inline-flex items-center justify-center whitespace-nowrap 
      ring-offset-background focus-visible:outline-none 
      focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
      disabled:pointer-events-none disabled:opacity-50 hover:bg-accent
      hover:text-white
       hover:text-accent-foreground h-9 relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group text-blue-400 bg-blue-400/10 shadow-lg shadow-blue-400/20">
      <Icon size={16} className="mr-2" />
      {item?.label}
      {currentSection === item.label && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30"
          style={{ transform: "none", transformOrigin: "50% 50% 0px" }}>
        </div>
      )}
    </button>
  }

  return <>
    {NAVITEMS.map((item) => renderNavItem(item))}
  </>
}
export default NavItems;