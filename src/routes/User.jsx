import { useNavigate, useParams } from "react-router";
import { deleteUser, getUser } from "../users";

export function User() {
  //userParams captura los parametros de ruta
  const { userId } = useParams();
  //llamo a la funcion definida en users.js
  //const params = useParams();
  //const user = getUser(parseInt(params.userId);
  const user = getUser(+userId);

  //hook useNavigate para redirigir a una pagina cuando se haga en este caso la operacion de borrar un usuario
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteUser(+userId);
    navigate("/users");
  };

  if (!user) {
    return <div>No se encuentra el usuario</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <div>
        <strong>Phone: </strong> {user.phone}
      </div>
      <div>
        <strong>Website: </strong> {user.website}
      </div>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
