
const HireMeButton = ({ scrollToSection, className }:
  {
    scrollToSection: (section: string) => void;
    className: string
  }) => {

  return <>
    <button
      onClick={() => scrollToSection("Contact")}
      className={className}
    >
      Hire me
    </button>
  </>
}
export default HireMeButton;