import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSources";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkmodeContext } from "./context/darkmodeConext";

function App() {
  const { darkMode } = useContext(DarkmodeContext);
  return (
    <div className={darkMode ? "app dark":"app"}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List title="Add New User" />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New input={userInputs} title="Add New User" />}
              ></Route>
            </Route>
            <Route path="product">
              <Route index element={<List title="Add New Product" />}></Route>
              <Route path=":productId" element={<Single />}></Route>
              <Route
                path="new"
                element={<New input={productInputs} title="Add New Product" />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
