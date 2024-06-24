import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<Detalle />} /> */}
        {/* <Route path="/:carrito" element={<Carrito />} /> */}
      </Routes>
    </>
  );
}

export default App;
