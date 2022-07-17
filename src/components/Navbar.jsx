function Nav() {
  return (
    <nav id="home" className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-12 lg:px-24 w-full">
        <div className="text-lg font-bold">Arushi.Singh</div>
        <div className="hidden md:flex space-x-12 items-center">
          <a className="text-selected-text" href="#home">
            Home
          </a>
          <a href="#work">My work</a>
          <a href="#clients">Clients</a>
          <a href="#hire">
            <button className="bg-theme py-1.5 px-4 font-bold">Hire me</button>
          </a>
        </div>
        <div class="md:hidden">
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
