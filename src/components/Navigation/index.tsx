import NavItems from "./NavItems";

const Navigation = ({ scrollToSection }:
  { scrollToSection: (section: string) => void }) => {

  return (<nav className="hidden items-center gap-8 md:flex">
    <NavItems scrollToSection={scrollToSection} />
  </nav>
  );
};

export default Navigation;
