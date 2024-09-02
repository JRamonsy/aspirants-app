import React, { useEffect, useState } from 'react'
import './Styles/FormularioPage.css'
import { useNavigate } from 'react-router-dom'
import useCrud from '../hooks/useCrud'
import { useForm } from 'react-hook-form'
import SeguimientoPage from './SeguimientoPage'
import EncabezadoSeguimientoPage from './EncabezadoSeguimientoPage'

const FormularioPage = () => {

  const [formIsClose, setFormIsClose] = useState(true)



  const BASE_URL = 'https://aspirants-api-1.onrender.com'
  const [aplicants, getAplicants, createAplicants, deleteAplicants, updateAplicants] = useCrud(BASE_URL)

  useEffect(() => {
    getAplicants('/aspirants/')
  }, [])
  console.log(aplicants)

  const [aplicantEdit, setAplicantEdit] = useState()

  const { handleSubmit, register, reset } = useForm()

  const submit = data => {

    alert('Registro guardado exitosamente');

    // Verifica y reemplaza valores por 'null' para select y date
    if (data.interestProgram === 'default') {
      data.interestProgram = null;
    }
    if (data.status === 'default') {
      data.status = null;
    }
    if (data.numberOfContacts === 'default') {
      data.numberOfContacts = null;
    }
  
    // Verifica y reemplaza campos de fecha vacíos por 'null'
    if (!data.appointment) {
      data.appointment = null;
    }
    if (!data.lastContact) {
      data.lastContact = null;
    }




    if (aplicantEdit) {
      // update
      updateAplicants('/aspirants/', aplicantEdit.id, data)
      setAplicantEdit()      
    }else {
      // create
      createAplicants('/aspirants/', data);
    }

    setFormIsClose(true)
  
    reset({
      name: '',
      paternalSurname: '',
      motherSurname: '',
      phone: '',
      email: '',
      interestProgram: 'default',
      appointment: null,
      attendance: null,
      status: 'default',
      numberOfContacts: 'default',
      lastContact: null,
      observations: ''
    });
  }
  

  
  
  useEffect(() => {
    reset(aplicantEdit)
  }, [aplicantEdit] )

  const handleFormClose = () => {
    setFormIsClose(true)
    reset({
      name: '',
      paternalSurname: '',
      motherSurname: '',
      phone: '',
      email: '',
      interestProgram: 'default',
      appointment: null,
      attendance: null,
      status: 'default',
      numberOfContacts: 'default',
      lastContact: null,
      observations: ''
    });
    setAplicantEdit()
  }

    const handleOpenForm = () => {
    setFormIsClose(false); 
  }


  return (
    <div>
      <div className={`container-form ${formIsClose && 'form-close' }`}>
        <form className="form" onSubmit={handleSubmit(submit)}>
          <h2>Formulario de Aspirante</h2>

          <div className="section">
            <h3>Información del Aspirante</h3>
            <div onClick={handleFormClose} className='form-exit'>X</div>
            <label htmlFor="nombres">Nombre(s):</label>
            <input {...register('name')} className='input-type-text' type="text" id="nombres" maxLength="50" placeholder="Escriba el o los nombre(s)" />

            <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
            <input {...register('paternalSurname')} className='input-type-text' type="text" id="apellidoPaterno" maxLength="30" placeholder="Escriba el apellido paterno" />

            <label htmlFor="apellidoMaterno">Apellido Materno:</label>
            <input {...register('motherSurname')} className='input-type-text' type="text" id="apellidoMaterno" maxLength="30" placeholder="Escriba el apellido materno" />

            <label htmlFor="numeroContacto">Número de Contacto:</label>
            <input {...register('phone')} className='input-type-text' type="text" id="numeroContacto" maxLength="10" placeholder="Escriba el numero de contacto a 10 digitos" />

            {/* <label htmlFor="correo">Correo Electrónico:</label>
            <input {...register('email')} type="email" id="correo" placeholder="Escriba el correo electrónico" /> */}

            <label htmlFor="programaInteres">Programa de Interés:</label>
            <select {...register('interestProgram')} id="programaInteres">
              <option value="default">Seleccione un programa de interés</option>
              <option value="Enfermería">Enfermería</option>
              <option value="Fisioterapia">Fisioterapia</option>
              <option value="Trabajo Social">Trabajo Social</option>
              <option value="Pedagogía">Pedagogía</option>
              <option value="Administración de Empresas Gastronómicas y Nutricionales">Administración de Empresas Gastronómicas y Nutricionales</option>
            </select>
          </div>

          <div className="section-2">
            <h3>Seguimiento del Aspirante</h3>
            <div className='section-2-flex'>
              <div className='div-inputs'>
                <label htmlFor="citas">Citas:</label>
                <input {...register('appointment')} type="date" id="date" />
              </div>

              <div className='div-inputs'>
                <label htmlFor="asistio">Asistió:</label>
                <input {...register('attendance')} type="checkbox" id="asistio" />
              </div>

              <div className='div-inputs'>
                <label htmlFor="estatus">Estatus:</label>
                <select {...register('status')} id="estatus">
                  <option value="default">Seleccione un Estatus</option>
                  <option value="No contactado">No contactado</option>
                  <option value="Contactado">Contactado</option>
                  <option value="Asistió">Asistió</option>
                  <option value="Aspirante">Aspirante</option>
                  <option value="Inscrito">Inscrito</option>
                  <option value="Inservible">Inservible</option>
                </select>
              </div>

              <div className='div-inputs'>
                <label htmlFor="numeroContactos">Número de Contactos:</label>
                <select {...register('numberOfContacts')} id="numeroDeContactos">
                  <option value="default">Seleccione un número</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>

              <div className='div-inputs'>
                <label htmlFor="ultimoContacto">Último contacto:</label>
                <input {...register('lastContact')} type="date" id="ultimoContacto" />
              </div>

              <div className='div-inputs'>
                <label htmlFor="observaciones">Observaciones:</label>
                <textarea {...register('observations')} id="observaciones" rows="4" cols="70" style={{ resize: 'none' }}></textarea>
              </div>
            </div>

            <div className='section-btn'>
              <button className='btn-save'>Guardar</button>
            </div>
          </div>
          {/* <button onClick={handleNavigateToLogIn}>Salir</button> */}
        </form>
      </div>
      <div>
        <EncabezadoSeguimientoPage
        setFormIsClose={setFormIsClose}
        handleOpenForm={handleOpenForm}
        />
      </div>

      <div>
        {
          aplicants?.map(aplicant => (
            <SeguimientoPage
           key={aplicant.id}
           aplicant={aplicant}
           deleteAplicants={deleteAplicants}
           setAplicantEdit={setAplicantEdit}
           setFormIsClose={setFormIsClose}
           handleOpenForm={handleOpenForm}
           />
          ))
        }
      </div>
    
    </div>


  )
}

export default FormularioPage
