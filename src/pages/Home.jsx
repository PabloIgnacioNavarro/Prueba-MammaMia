import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import pizza from "../assets/pizza-3007395_1280.jpg";

export default function Home() {
  const { pizzas, carrito, agregarCarrito } = useContext(PizzaContext);
  return (
    <>
      <nav className="d-flex flex-row mb-3 text-bg-primary p-3">
        Pizzería MammaMia! - Carrito:{carrito.length}
      </nav>
      <div>
        <img className="d-flex flex-row mb-3 p-3 border border-0" src={pizza} />
      </div>
      {pizzas.map((e) => (
        <div className="container text-center row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <p>nombre de pizza: {e.name}</p>
          <p>precio: {e.price}</p>
          <img style={{ width: "200px" }} src={e.img} alt="" />
          <button onClick={() => agregarCarrito(e)}>Agregar al carrito</button>
        </div>
      ))}
      <footer>Derechos reservados</footer>
    </>
  );
}
