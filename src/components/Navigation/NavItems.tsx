import { navItems } from "@/constrains"

const NavItems = ({ scrollToSection }: { scrollToSection: (section: string) => void }) => {
  return <>
    {navItems.map((item) => (
      <button
        key={item}
        onClick={() => scrollToSection(item)}
        className="text-[14px] font-medium transition hover:text-[#ed5b22] dark:hover:text-[#ed6a35]"
      >
        {item}
      </button>
    ))}
  </>
}
export default NavItems;