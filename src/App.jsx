import Login from "./components/Login";
import Home from "./Home";

const App = () => {
  let isLoggedIn = true;
  return <>{isLoggedIn ? <Home /> : <Login />}</>;
};

export default App;
