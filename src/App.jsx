import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <section className="mx-auto max-w-[1440px]">
        <Outlet />
      </section>
    </>
  );
}

export default App;
