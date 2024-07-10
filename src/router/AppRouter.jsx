import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import DetalleScreen from "../pages/DetalleScreen";
import NavReact from "../common/NavReact";
import FavoritoScreen from "../pages/FavoritoScreen";
import Footer from "../common/Footer";

const AppRouter = () => {
  return (
    <section className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <NavReact />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/detalle/:name" element={<DetalleScreen />} />
          <Route path="/favoritos" element={<FavoritoScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
};

export default AppRouter;
