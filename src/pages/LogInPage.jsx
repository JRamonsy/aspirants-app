import React from 'react'
import './Styles/LogInPage.css'
import { useNavigate } from 'react-router-dom';


const LogInPage = () => {

  const navigate = useNavigate();

  const handleNavigateToForm = ()=> {
    navigate('/form')
  }



  return (
    <div className="section-log">
      <div className="github-logo">
      </div>
      <div className="container-log">
        <div className="login-icon">
          <img
            alt=""
     
            src="\logo cruz.jpg"

          />
        </div>
        <h1>Iniciar sesión en Seguimiento de Aspirantes</h1>
        <hr />
        <p>Ingresa tus credenciales para iniciar sesión.</p>
        <form>
          <label htmlFor="username">Correo electronico</label>
          <input id="username" name="username" type="text" />
          <label htmlFor="password">
            Contraseña
            <a className="forgot-password" href="#">
            ¿Has olvidado tu contraseña?
            </a>
          </label>
          <input id="password" name="password" type="password" />
          <button className="sign-in-button" type="submit" onClick={handleNavigateToForm}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default LogInPage
