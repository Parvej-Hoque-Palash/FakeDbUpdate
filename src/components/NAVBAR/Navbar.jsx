const Navbar = () => {
  return (
    <div
      className=" fixed flex items-center justify-between
    px-3 py-1 bg-gray-100 shadow-md backdrop-blur-md w-full z-50 "
    >
      <div className="flex gap-3 items-center">
        <div className="text-2xl">&#9776;</div>
        <h1 className=" text-3xl font-semibold ">MOCKDB</h1>
      </div>
      <div className="flex items-center gap-2 ">
        <div className=" font-semibold">Tutorial</div>
        <div className=" font-semibold">SignIn</div>
      </div>
    </div>
  );
};

export default Navbar;
