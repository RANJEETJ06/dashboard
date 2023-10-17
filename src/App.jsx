import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs,userInputs } from "./formSources";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="users">
              <Route index element={<List/>}></Route>
              <Route path=":userId" element={<Single/>}></Route>
              <Route path="new" element={<New input={userInputs} title="Add New User"/>}></Route>
            </Route>
            <Route path="product">
              <Route index element={<List/>}></Route>
              <Route path=":productId" element={<Single/>}></Route>
              <Route path="new" element={<New input={productInputs} title="Add New Product"/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
