import { useNavigate } from 'react-router-dom'
import './Styles/EncabezadoSeguimientoPage.css'

const EncabezadoSeguimientoPage = ({setFormIsClose, handleOpenForm}) => {


    const navigate = useNavigate();
    const handleNavigateToLogIn = () => {
      navigate('/')
    }





  return (
    <div className="container-seguimeinto">
      <div className="header-seguimiento">
        <h1 className='title-seguimiento' >SEGUIMIENTO DE ASPIRANTES</h1></div>
        <div className='section-btns'>
          <button className='btn-enc' onClick={handleOpenForm} >Crear nuevo registro</button>
          <button className='btn-enc' onClick={handleNavigateToLogIn} >Salir</button>
        </div>
      <table>
        <thead>
          <tr>
            <th rowSpan="2">id</th>
          </tr>
          <tr>
            <th>NOMBRE(S)</th>
            <th>APELLIDO PATERNO</th>
            <th>APELLIDO MATERNO</th>
            <th>TELÉFONO</th>
            <th>PROGRAMA DE INTERES</th>
            <th>CITAS</th>
            <th>ASISTIO</th>
            <th>ESTATUS</th>
            <th># DE CONTACTOS</th>
            <th>ULTIMO CONTACTO</th>
            <th>OBSERVACIONES</th>
            <th>ACCIONES</th>

          </tr>
        </thead>

      </table>
    </div>
  )
}

export default EncabezadoSeguimientoPage
