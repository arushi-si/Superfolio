import Client from "./Client";

function Clients() {
  return (
    <div
      id="clients"
      className="container mx-auto mt-14 px-8 md:px-12 lg:px-24"
    >
      <h1 className="pl-10 font-bold text-2xl">
        <div className="h-1 w-[35px] bg-theme rounded-sm mb-[2px]" />
        Clients
      </h1>
      <p className="pl-10 w-3/4 text-secondary mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </p>
      <div className="px-10">
        <Client />
        <Client />
        <Client />
      </div>
    </div>
  );
}

export default Clients;
