import React, { useState } from 'react'
import './Styles/SeguimientoPage.css'

const SeguimientoPage = ({aplicant, deleteAplicants, setAplicantEdit, setFormIsClose, handleOpenForm}) => {

  

  const handleDeleteAplicant = () => {

    const confirmation = window.confirm('¿Estás seguro de que deseas borrar este registro?');
    if (confirmation) {
    alert('Registro borrado exitosamente');  
    
    deleteAplicants('/aspirants/', aplicant.id);
  }
  }

  const handleEditAplicant = () => {
    setAplicantEdit(aplicant);
    handleOpenForm();
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'No contactado':
        return { backgroundColor: 'grey', color: 'white' };
      case 'Contactado':
        return { backgroundColor: 'green', color: 'white' };
      case 'Asistió':
        return { backgroundColor: 'yellowgreen', color: 'white' }; 
      case 'Aspirante':
        return { backgroundColor: 'orange', color: 'white' };    
      case 'Inscrito':
        return { backgroundColor: 'turquoise', color: 'white' };
      case 'Inservible':
        return { backgroundColor: 'Red', color: 'white' };
        
      default:
        return { backgroundColor: 'transparent', color: 'black' };
    } 
  };


  

  return (
    <div className="container-seguimeinto">
      <div className="header-seguimiento">

        </div>

      <table>
        <thead>


        </thead>
        <tbody>
          <tr>
            <td> <span>{aplicant.id}</span> </td>
            <td> <span>{aplicant.name}</span> </td>
            <td> <span>{aplicant.paternalSurname}</span> </td>
            <td> <span>{aplicant.motherSurname}</span> </td>
            <td> <span>{aplicant.phone}</span> </td>
            <td> <span>{aplicant.interestProgram}</span></td>
            <td> <span>{aplicant.appointment}</span></td>
            <td><span>{aplicant.attendance === true ? 'Sí' : aplicant.attendance === false ? 'No' : ''}</span></td>
            <td  style={getStatusColor(aplicant.status)} > <span>{aplicant.status}</span> </td>
            <td> <span>{aplicant.numberOfContacts}</span> </td>
            <td> <span>{aplicant.lastContact}</span> </td>
            <td> <span>{aplicant.observations}</span> </td>
            <td>
              <button className='btn-enc-1' onClick={handleEditAplicant} >editar</button>
              <button className='btn-enc-1' onClick={handleDeleteAplicant} >borrar</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default SeguimientoPage
