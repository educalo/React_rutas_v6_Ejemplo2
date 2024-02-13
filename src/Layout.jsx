import { Link, Outlet } from "react-router-dom";


//el componente Outlet, me permite que dentro de la plantila nav definido donde quiero cargar los diferentes elementos hijos
//Outlet define el lugar donde se añadiria los componentes
export function Layout() {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
