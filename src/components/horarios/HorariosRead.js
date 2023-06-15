import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
const API = process.env.REACT_APP_API;
export const HorariosRead = () => {
    const [requests, setRequests] = useState();
    const readRequests = async () => {
      const response = await fetch(`${API}/minutes`);
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
                <th>PROBLEMA</th>
                <th>SUCURSAL</th>
                <th>FECHA</th>
                <th>HORA INICIO</th>
                <th>HORA FIN</th>
                <th>ACCIONES</th>
              </tr>
              {requests &&
                requests.map((row) => (
                  <tr key={JSON.stringify(row._id)}>
                    {<td> {row.nombre}</td>}
                    {<td> {row.descripcion}</td>}
                    {<td> {row.sucursal}</td>}
                    {<td> {row.fecha}</td>}
                    {<td> {row.hora_inicio}</td>}
                    {<td> {row.hora_fin}</td>}
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