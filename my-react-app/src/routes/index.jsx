import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export { RoutesApp };
