import { Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicePage";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
}