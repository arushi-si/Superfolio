import HIntro from "./HIntro";
import HNavbar from "./HNavbar";

function Header() {
  return (
    <div className="container mt-16 flex flex-col md:flex-row justify-between items-center mx-auto px-8 md:px-12 lg:px-24 w-full overflow-hidden">
      <div className="flex flex-wrap md:no-wrap">
        <HNavbar />
        <HIntro />
      </div>
    </div>
  );
}

export default Header;
