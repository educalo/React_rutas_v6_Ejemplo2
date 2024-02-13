import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { About } from "./routes/About";
import { Home } from "./routes/Home";
import { User } from "./routes/User";
import { Users } from "./routes/Users";

//1.- Toda nuestra aplicación debe estar metida dentro de BrowserRouter
//2.- Dentro de BrowserRouter debemos tener Routers
//3.- Dentro de cada Route que se le pasa un elemento con un componente jsx

//Path="*" si hay una pagina que no exista hace lo que se indica en el element
//Navigate te permite redireccionar a una ruta, la parte de replace to es para que no se guarde en el history la ruta erronea
//ruta padre <Route path="/" element={<Layout />}> que va a tener todas las rutas como sus hijos
//Las demas rutas serán rutas relativas a esta ruta padre
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route index element={<div>Seleccione un usuario</div>} />
          <Route path=":userId" element={<User />} />
        </Route>
        <Route path="about" element={<About />} />
        
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
