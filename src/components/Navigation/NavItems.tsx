import { navItems } from "@/constrains"

const NavItems = ({ scrollToSection }: { scrollToSection: (section: string) => void }) => {
  return <>
    {navItems.map((item) => (
      <button
        key={item}
        onClick={() => scrollToSection(item)}
        className="text-[14px] font-medium text-[#706b66] transition hover:text-[#ed5b22] dark:text-[#aaa39d] dark:hover:text-[#ed6a35]"
      >
        {item}
      </button>
    ))}
  </>
}
export default NavItems;