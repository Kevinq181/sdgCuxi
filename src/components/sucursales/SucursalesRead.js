import React, { useState, useEffect } from "react";
import "./Sucursales_Read.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
const API = process.env.REACT_APP_API;

export const SucursalesRead = () => {
  /*const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");*/
  const [requests, setRequests] = useState();
  const readRequests = async () => {
    const response = await fetch(`${API}/requests`);
    const data = await response.json();
    setRequests(data);
  };

  useEffect(() => {
    readRequests();
  }, []);

  return (
    <>
      <div className="tabla">
        <table className="table table-striped">
          <tbody id="myTable">
            <tr className="bg-info">
              <th>NOMBRE</th>
              <th>DESCRIPCIÓN</th>
              <th>SUCURSAL</th>
              <th>FECHA</th>
              <th>PRIORIDAD</th>
              <th>ACCIONES</th>
            </tr>
            {requests &&
              requests.map((row) => (
                <tr key={JSON.stringify(row._id)}>
                  {<td> {row.nombre}</td>}
                  {<td> {row.descripcion}</td>}
                  {<td> {row.sucursal}</td>}
                  {<td> {row.fecha}</td>}
                  {<td> {row.estado}</td>}
                  {
                    <td>
                      <button className="btn-borrar">
                        Borrar <FontAwesomeIcon icon={faTrashCan} />
                      </button>

                      <button className="btn-actualizar">
                        Actualizar <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </td>
                  }
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
