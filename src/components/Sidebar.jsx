import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" h-screen w-24 lg:w-56 border ">
      <div className="fixed top-0 left-0 bg-green-400 w-48">
        <div className="w-full bg-red-500 flex flex-col gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
