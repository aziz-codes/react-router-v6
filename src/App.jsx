import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="flex h-auto w-screen flex-row">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <div className="px-4">
            <h2>Someother content</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              mollitia provident nesciunt officiis cupiditate, accusantium
              voluptate eos repellendus tempora. Numquam quaerat quas molestias
              maxime culpa pariatur, iusto reiciendis quo veniam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
