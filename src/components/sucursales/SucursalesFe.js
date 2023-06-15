import "./Sucursales_fe.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileWaveform,
  faBarsStaggered,
  faListOl,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faUser,
  faHospital,
} from "@fortawesome/free-regular-svg-icons";
const API = process.env.REACT_APP_API;
export const SucursalesFe = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");

  function createData(id_int, codigo, sucursal) {
    return { id_int, codigo, sucursal };
  }

  const rows = [
    createData(2, 1.02, "CUXIBAMBA"),
    createData(3, 1.03, "BAYER"),
    createData(4, 1.04, "VIDA"),
    createData(5, 1.05, "MEDICOS"),
    createData(6, 1.06, "LOURDES"),
    createData(9, 1.07, "BOLIVAR"),
    createData(10, 1.08, "JUAN JOSE PEÑA"),
    createData(11, 1.09, "JOSÉ FELIX"),
    createData(12, 1.1, "CATAMAYO1"),
    createData(13, 1.11, "MAYORISTA"),
    createData(14, 1.12, "CATACOCHA"),
    createData(15, 1.13, "SINDICATO"),
    createData(16, 1.14, "ZAMORA"),
    createData(17, 1.15, "ORTOPEDIA"),
    createData(18, 1.16, "YANTZAZA"),
    createData(19, 1.17, "AMBATO"),
    createData(20, 1.18, "OLMEDO-ABENDAÑO"),
    createData(21, 1.19, "DERMATOLÓGICA"),
    createData(22, 1.2, "LAURO GUERRERO-EMERGENCIA"),
    createData(23, 1.21, "18 DE NOVIEMBRE"),
    createData(24, 1.22, "SAN SEBASTIAN"),
    createData(25, 1.23, "LEOPOLDO PALACIOS-UTPL"),
    createData(26, 1.24, "HUACHI CHICO"),
    createData(27, 1.25, "MOGROVEJO"),
    createData(28, 1.26, "PASAJE LA FEUE-VILCABAMBA"),
    createData(29, 1.27, "EL VALLE"),
    createData(30, 1.28, "FICOA"),
    createData(31, 1.29, "LA CONDAMINE-RIOBAMBA"),
    createData(32, 1.3, "GUARANDA"),
    createData(33, 1.31, "BALSAS"),
    createData(34, 1.32, "PIÑAS EL ORO"),
    createData(37, 1.34, "LATACUNGA EL SALTO"),
    createData(38, 1.35, "ZAPOTILLO"),
    createData(39, 1.36, "CARIAMANGA"),
    createData(40, 1.37, "MACARA1"),
    createData(41, 1.38, "ROCAFUERTE"),
    createData(42, 1.39, "SAN AGUSTIN-LATACUNGA CLINICA"),
    createData(43, 1.4, "ALAMOR-REAL ALAMOR"),
    createData(44, 1.41, "TERMINAL"),
    createData(45, 1.42, "ZARUMA"),
    createData(46, 1.43, "AMBATO CATEDRAL"),
    createData(47, 1.44, "PALANDA"),
    createData(48, 1.45, "ZUMBA"),
    createData(50, 1.46, "AMALUZA"),
    createData(51, 1.47, "GONZANAMA"),
    createData(52, 1.48, "CELICA"),
    createData(53, 1.49, "10 DE AGOSTO"),
    createData(54, 1.5, "LALAMA AMBATO"),
    createData(55, 1.51, "LAS PITAS"),
    createData(56, 1.52, "MALACATOS"),
    createData(57, 1.53, "CATAMAYO2"),
    createData(58, 1.54, "PIO JARAMILLO"),
    createData(59, 1.55, "CUXIBAMBA CENTRAL"),
    createData(60, 1.56, "SAN FRANCISCO"),
    createData(61, 1.57, "SIMON BOLIVAR"),
    createData(62, 1.58, "INDEPENDENCIA PIÑAS"),
    createData(63, 1.59, "TOMAS SEVILLA AMBATO"),
    createData(64, 1.6, "GARCIA MORENO RIOBAMBA"),
    createData(65, 1.61, "IBARRA Y AV CUXIBAMBA LOJA"),
    createData(68, 1.63, "ARGELIA LOJA"),
    createData(69, 1.64, "MACARA2"),
    createData(70, 1.62, "QUILANGA"),
    createData(71, 1.65, "PORTOVELO"),
    createData(72, 1.67, "PINDAL"),
    createData(73, 1.66, "COLEGIO MILITAR LOJA"),
    createData(74, 1.68, "COLISEO CIUDAD DE LOJA"),
    createData(75, 1.69, "SAN PEDRO DE LA BENDITA"),
    createData(76, 1.7, "EL CISNE"),
    createData(77, 1.81, "CHAGUARPAMBA"),
    createData(78, 1.71, "GUALAQUIZA"),
    createData(79, 1.73, "EL PANGUI"),
    createData(80, 1.87, "CENTINELA DEL CONDOR ZUMBI"),
    createData(81, 1.86, "LATACUNGA IESS"),
    createData(82, 1.75, "PUJILI OLMEDO"),
    createData(83, 1.84, "SAQUISILI  9 DE OCTUBRE"),
    createData(84, 1.78, "SALCEDO MERCADO CENTRAL 24-05"),
    createData(85, 1.72, "AMBATO MARTINEZ"),
    createData(86, 1.8, "AMBATO PICAIHUA"),
    createData(87, 1.83, "PARQUE CENTRAL ROCAFUERTE PILL."),
    createData(88, 1.74, "AV SUCRE Y NUEVA YORK R."),
    createData(89, 1.77, "UNIDAD NACIONAL RIOBAMBA"),
    createData(90, 1.76, "BYPASS PANAMERICANA NORTE R."),
    createData(91, 1.79, "SALCEDO ROCAFUERTE"),
    createData(92, 1.89, "MARIANO EGUEZ   AMBATO"),
    createData(93, 1.85, "BOLIVAR Y CLAVIJO PILLARO"),
    createData(94, 1.88, "MERCADO FLORES URBINA PILLARO"),
    createData(95, 1.82, "PELILEO"),
    createData(97, 1.9, "SOLCA LOJA"),
    createData(98, 1.91, "PARROQUIA VILCABAMBA"),
    createData(99, 1.92, "IGLESIA SAN JOSE LOJA"),
    createData(100, 1.93, "SOZORANGA"),
    createData(101, 1.94, "CATAMAYO3"),
    createData(102, 1.95, "HOSPITAL CATACOCHA"),
    createData(103, 1.96, "PINLLO AMBATO "),
    createData(104, 1.99, "BAÑOS DE AMBATO "),
    createData(105, 2.03, "ESPAÑA Y PIO JARAMILLO - LOJA"),
    createData(106, 2.05, "ATAHUALPA  AMBATO"),
    createData(107, 2.06, "SUCRE Y JOSE ANTONIO - LOJA"),
    createData(109, 1.97, "PRIMERA CONSTITUYENTE RIOBAMBA "),
    createData(110, 1.98, "ABDON CALDERON AMBATO"),
    createData(111, 2.04, "ESTOCOLMO Y LEOPOLDO FREIRE RIOBAMBA "),
    createData(112, 2.01, "CLOTARIO PAZ Y BOLIVAR - CARIAMANGA"),
    createData(113, 2.02, "IZAMBA - AMBATO"),
    createData(114, 2.0, "SUCRE Y BERNARDO - CARIAMANGA "),
    createData(117, 2.07, "5 ESQUINAS  ALAMOR"),
    createData(118, 2.08, "RIO AMAZONAS  QUITO"),
    createData(119, 2.09, "AMABLE MARIA  LOJA"),
    createData(120, 2.1, "OCCIDENTAL  LOJA"),
    createData(121, 2.11, "EUGENIO ESPEJO RIOBAMBA"),
    createData(122, 2.12, "TEBAIDA LOJA"),
    createData(123, 2.13, "OSCAR REYES  BANOS"),
    createData(124, 2.14, "25 DE JUNIO  CATACOCHA"),
    createData(125, 2.15, "GASOLINERA  VILCABAMBA"),
    createData(126, 2.16, "AV. OCTAVA  MACHALA"),
    createData(127, 2.17, "OLMEDO  MACHALA"),
    createData(128, 2.18, "GUAYAS  MACHALA"),
    createData(129, 2.19, "LAS PALMERAS  MACHALA "),
  ];

  const createReports = async (e) => {
    try {
      e.preventDefault();
      await fetch(`${API}/requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          sucursal,
          fecha,
          estado,
        }),
      });
      alert("Registro correcto");
    } catch (error) {
      alert("Registro fallido");
    }
  };

  const listItems = rows.map((number) => (
    <option key={number.id_int} value={number.codigo + " " + number.sucursal}>
      {number.sucursal}
    </option>
  ));

  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substring(0, 10);

  return (
    <>
      <div className="contenedor">
        <div className="centro">
          <h3 className="tittle1">
            Formulario de reportes de sucursales{" "}
            <FontAwesomeIcon
              icon={faFileWaveform}
              className="icon-form"
              size="xl"
              beat
            />
          </h3>
          <div className="form">
            <form className="formulario" onSubmit={createReports}>
              <div className="form-group">
                <label>
                  <FontAwesomeIcon icon={faUser} /> Nombre del responsable
                </label>
                <input
                  required
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="nombre"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                  placeholder="Ingrese el nombre del responsable"
                />
              </div>
              <div className="form-group">
                <label className="descripcion">
                  {" "}
                  <FontAwesomeIcon icon={faBarsStaggered} /> Descripción del
                  problema
                </label>
                <textarea
                  required
                  name="descripcion"
                  id="descripcion"
                  className="descripcion"
                  rows="3"
                  cols="60"
                  placeholder="Ingrese por favor una descripción precisa para atender el problema lo más pronto posible"
                  onChange={(e) => setDescripcion(e.target.value)}
                  value={descripcion}
                ></textarea>
              </div>
              <div className="form-group">
                <label className="sucursal">
                  <FontAwesomeIcon icon={faHospital} /> Sucursal
                </label>
                <select
                  required
                  name="sucursales"
                  id="sucursales"
                  className="sucursales"
                  onChange={(e) => setSucursal(e.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Elija una opción por favor
                  </option>
                  {listItems}
                </select>
              </div>

              <div className="form-group">
                <label className="fecha">
                  <FontAwesomeIcon icon={faCalendar} /> Fecha
                </label>
                <input
                  required
                  type="date"
                  name="fecha"
                  id="fecha"
                  className="fecha"
                  defaultValue={date}
                ></input>
              </div>

              <div className="form-group">
                <label className="prioridad">
                  {" "}
                  <FontAwesomeIcon icon={faListOl} /> Prioridad
                </label>
                <select
                  required
                  name="prioridad"
                  id="prioridad"
                  className="prioridad"
                  onChange={(e) => setEstado(e.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Elija una opción por favor
                  </option>

                  <option selected value={"Alta"}>
                    Alta
                  </option>
                  <option value={"Media"}>Media</option>
                  <option value={"Baja"}>Baja</option>
                </select>
              </div>
              <div className="form-group1">
                <button className="btn" onClick={() => [setFecha(date)]}>
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
