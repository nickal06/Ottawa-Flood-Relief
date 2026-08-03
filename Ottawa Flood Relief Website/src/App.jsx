import { HeaderBar } from "./components/header-bar";
import { Home } from "./pages/home";
import { Map } from "./pages/map";
import { InfoSection } from "./components/info-section";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AIChatWidget } from "./components/AI-chat-widget";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/map" element={<Map/>} />
        </Routes>
      </BrowserRouter>
      <AIChatWidget />
    </>
  );
}
