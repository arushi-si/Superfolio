function HNavItem(props) {
  return (
    <a
      href={`${props.id}`}
      className={`${props.selected} nav-dot block w-4 h-4 rounded-full border-2 border-nav bg-body`}
    >
      <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
        {props.name}
      </span>
    </a>
  );
}

export default HNavItem;
