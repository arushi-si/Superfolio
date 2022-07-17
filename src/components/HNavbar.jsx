import HNavItem from "./HNavItem";

function HNavbar() {
  return (
    <nav className="lg:inline-block lg:w-4 hidden fixed xl:block mt-24">
      <div className="absolute left-50 transform -translate-x-1/2 space-y-6">
        <HNavItem selected="selected-circle" name="Home" id="#home" />
        <HNavItem id="#work" name="Work" />
        <HNavItem id="#clients" name="Clients" />
        <HNavItem id="#hire" name="Hire" />
      </div>
    </nav>
  );
}

export default HNavbar;
