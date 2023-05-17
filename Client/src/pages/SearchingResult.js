import React from "react";
import "./pages.css";
import Table from 'react-bootstrap/Table';

const SearchingResult = () => {
    return (
        <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>DIRECCION</th>
            <th>COMUNA</th>
            <th>REGION</th>
            <th>SALUD</th>
            <th>Fec_Nac</th>
            <th>CORREO</th>
            <th>CELULAR</th>
            <th>RUT</th>
            <th>DV</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </Table>
    </div>
    );
};
export default SearchingResult;
