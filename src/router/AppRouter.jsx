import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import DetalleScreen from "../pages/DetalleScreen";
import NavReact from "../common/NavReact";

const AppRouter = () => {
  return (
    <section className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <NavReact />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/detalle/:name" element={<DetalleScreen />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default AppRouter;
