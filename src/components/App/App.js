import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/cart"  element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
