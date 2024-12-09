import React from "react";
import "./vista_registro.css";


function Perfil() {
 
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("Datos enviados:", data);

    fetch("enpoint", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Respuesta del servidor:", data))
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div>
      <h1>Gestión de Perfil</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Cédula:
          <input type="text" name="cedula" required />
        </label>

        <label>
          Nombres:
          <input type="text" name="nombres" required />
        </label>

        <label>
          Apellidos:
          <input type="text" name="apellidos" required />
        </label>

        <label>
          Celular:
          <input type="text" name="celular" required />
        </label>

        <label>
          Dirección:
          <input type="text" name="direccion" required />
        </label>

        <label>
          Contraseña:
          <input type="password" name="contrasena" required />
        </label>

        <label>
          Títulos Universitarios:
          <input type="text" name="titulos_uni" />
        </label>

        <label>
          Descripción:
          <textarea name="descripcion"></textarea>
        </label>

        <label>
          Correo:
          <input type="email" name="correo" required />
        </label>

        <label>
          Fecha de Nacimiento:
          <input type="date" name="fecha_nacimiento" required />
        </label>

        <label>
          Foto:
          <input type="file" name="foto" />
        </label>

        <label>
          Rol:
          <select name="rol_id" required>
            <option value="">Selecciona un rol</option>
            <option value="1">Admin</option>
            <option value="2">Usuario</option>
          </select>
        </label>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Perfil;
