import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Body /> */}
    </>
  );
}

export default App;
