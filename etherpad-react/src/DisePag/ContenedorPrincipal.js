import React from 'react';
import "../css/disepag.css";
const ContenedorPrincipal = ({ children }) => {
  return (
    <div id="div-principal">
      {children}
    </div>
  );
};

export default ContenedorPrincipal;
