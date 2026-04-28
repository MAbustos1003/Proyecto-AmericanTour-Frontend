import React from 'react';

// Componente que contiene los campos de entrada de datos
const RegisterForm = () => {
  return (
    <div className="register-form-container">
      <h2>Crea tu cuenta corporativa</h2>
      <p>Únete a la red de transporte de American Tour S.A.S.</p>
      
      <form>
        {/* Campo para el nombre de la empresa o cliente */}
        <div className="input-group">
          <label>Nombre completo</label>
          <input type="text" placeholder="Ej: Juan Pérez" />
        </div>

        {/* Campo para el correo institucional */}
        <div className="input-group">
          <label>Correo electrónico</label>
          <input type="email" placeholder="correo@empresa.com" />
        </div>

        {/* Campo para la contraseña */}
        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" placeholder="Mínimo 8 caracteres" />
        </div>

        <button type="submit" className="btn-register">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;