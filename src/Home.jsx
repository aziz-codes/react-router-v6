import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Dashboard, About, Users } from "./pages/index";

const Home = () => {
  return (
    <>
      <div className="flex h-auto w-screen flex-row">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="px-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
