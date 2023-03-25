import Home from "./Home";

const App = () => {
  let isLoggedIn = true;
  return (
    <>{isLoggedIn ? <Home /> : "Please Login to continue to your account"}</>
  );
};

export default App;
