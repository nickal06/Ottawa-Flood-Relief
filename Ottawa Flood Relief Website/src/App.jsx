import { HeaderBar } from "./components/header-bar";
import { Home } from "./pages/home";
import { Map } from "./pages/map";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/map" element={<Map/>} />
      </Routes>
    </BrowserRouter>
  );
}
