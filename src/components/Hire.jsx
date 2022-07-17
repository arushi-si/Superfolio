function Hire() {
  return (
    <div id="hire" className="container mx-auto mt-24 px-8 md:px-12 lg:px-24">
      <div className="pl-10">
        <h1 className="font-bold text-2xl">
          <div className="h-1 w-[35px] bg-theme rounded-sm mb-[2px]" />
          Hire Me
        </h1>
        <p className="w-3/4 text-secondary mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <form className="my-10">
          <label htmlFor="name" className="block text-lg font-bold mb-2">
            Name
          </label>
          <input
            name="name"
            type={"text"}
            className="lg:w-[55%] md:w-3/4 w-[80%] py-2 px-3 mb-10 bg-[#343a40] text-white border-2 border-[#495057] outline-0 leading-tight"
          />
          <label htmlFor="email" className="block text-lg font-bold mb-2">
            Email
          </label>
          <input
            name="email"
            type={"email"}
            className="lg:w-[55%] md:w-3/4 w-[80%] py-2 px-3 mb-10 bg-[#343a40] text-white border-2 border-[#495057] outline-0 leading-tight"
          />
          <label htmlFor="msg" className="block text-lg font-bold mb-2">
            Message
          </label>
          <textarea
            name="msg"
            rows={5}
            cols={50}
            className="lg:w-[55%] md:w-3/4 w-[80%] py-2 px-3 bg-[#343a40] text-white border-2 border-[#495057] outline-0 leading-tight"
          />
          <br />
          <input
            type={"submit"}
            value="Send it!"
            className="py-2 px-4 bg-theme mt-4 font-bold text-md"
          />
        </form>
      </div>
    </div>
  );
}

export default Hire;
