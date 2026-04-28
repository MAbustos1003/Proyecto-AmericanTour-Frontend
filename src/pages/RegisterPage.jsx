import React from 'react';
import RegisterForm from '../components/RegisterForm';
import './RegisterPage.css';

// Página principal de registro que divide la pantalla en dos secciones
const RegisterPage = () => {
  return (
    <div className="auth-container">
      {/* Sección izquierda: Imagen decorativa de American Tour */}
      <div className="auth-image-side">
        <div className="overlay-text">
          <h1>American Tour S.A.S.</h1>
          <p>Excelencia en transporte especial desde Sopó.</p>
        </div>
      </div>

      {/* Sección derecha: Formulario de registro */}
      <div className="auth-form-side">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;