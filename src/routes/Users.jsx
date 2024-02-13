
import { Link, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getAllUsers } from "../users";

//convertimos cada usuario importado de users.js en un enlace
//utilizo el hook searchParamas para capturar los parametros indicados en la ruta
export function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  //hook useLocation para mantener el filtrado
  const location = useLocation();
  const users = getAllUsers();

  //e.target.value contiene el valor que introducimos en el input
  //conforme se escriba en el input se rellenera en la url
  const handleChange = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  //por defecto comillas vacias
  const filter = searchParams.get("filter") ?? "";
  //el outlet para definir la posición que quiero que se muestre la información
  //<article> Un artículo debe tener sentido por sí solo y debe ser posible distribuirlo independientemente del resto del sitio
  //location.search para añadir el filtro definido previamente
  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        placeholder="filter user"
        value={filter}
        onChange={handleChange}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <ul>
          {users
            .filter((user) => {
              if (!filter) return true;

              return user.name.toLowerCase().includes(filter.toLowerCase());
            })
            .map((user) => (
              <li key={user.id}>
                <Link to={user.id.toString() + location.search}>
                  {user.name}
                </Link>
              </li>
            ))}
        </ul>

        <article>
          <Outlet />
        </article>
      </div>
    </div>
  );
}
