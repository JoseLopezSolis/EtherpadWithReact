import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus, faTrash,faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

import ContenedorPrincipal from '../DisePag/ContenedorPrincipal';
import SegundoContenedor from '../DisePag/SegundoContenedor';

export default function CreatePad() {
  const [VentanaCrearPad, setVentanaCrearPad] = useState(false);
  const [VentanaConfirmCreacionPad, setVentanaConfirmCreacionPad] = useState(false);
  const [PadId, setPadId] = useState('');

  // Manejar la ventana de crear Pad
  const handleCrear = () => {
    setVentanaCrearPad(true); // Activar la ventana de creación de Pad
  };

  const crearPad = async () => {
    const ETHERPAD_API_URL = 'http://localhost:9001/api/1';
    const API_KEY = '311ea29fe4a4ae8b9bdcae5e9341717a2b3173edaa12e5def1ceeb67b7a75f19'; // Cambia tu API KEY

    try {
      const url = `${ETHERPAD_API_URL}/createPad?padID=${PadId}&apikey=${API_KEY}`;
      await axios.post(url);
      console.log("Se ah creado el pad " + PadId + " exitosamente")
    } catch (error) {
      console.error('Error al crear el archivo:', error);
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Manejar el evento de crear un pad
    if (VentanaCrearPad && PadId !== null) {
      await crearPad();
      setVentanaCrearPad(false);
      setVentanaConfirmCreacionPad(true);
    }
  };

  const handleClose = () => {
    setVentanaCrearPad(false); //Cerrar la ventana de crear Pad
  };

  const handleOK = () => {
    setVentanaConfirmCreacionPad(false);  //cerrar la ventana de info de creación del Pad
    setPadId('');

  };


  return (
    <ContenedorPrincipal>
      {VentanaCrearPad && (
        <div className="modal" >
          <div className="modal-content" >
            <button className="close-button" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <form className='formulario' onSubmit={handleSubmit}>
              <h2>Crear pad</h2>
              <input
                type="text"
                value={PadId}
                onChange={(event) => setPadId(event.target.value)}
                placeholder="Ingresa el nombre del Pad"
              />
              <div>
                <button className='submit-button' type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {VentanaConfirmCreacionPad && (
        <div className="modal" >
          <div className="modal-content" >
            <form  className='formulario' onSubmit={handleOK}>
              <h2>Información de creación de Pad</h2>
              <span>Se ha creado el pad: {PadId}  </span>
              <div>
                <button className='submit-button' type="submit">OK</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <SegundoContenedor>
        <div className="header">
          <h1>Pads</h1>
          <div className="icons">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faPencilAlt} onClick={() => {}} />
            </div>
            <div className="icon-wrapper" onClick={handleCrear}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="icon-wrapper" onClick={() => {}}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </div>
      </SegundoContenedor>
    </ContenedorPrincipal>
  );
}
