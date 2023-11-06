import React, { useEffect, useState } from 'react';
import '../steelheets/Form.css';
import { BiEnvelope } from 'react-icons/bi';
import { BiLock } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi'
import { BiPhone } from 'react-icons/bi'

const FormList = ({ isOpen, onClose, setFormSubmitted, formSubmitted, updateName, email, setEmail, nombre, setNombre, phone, setPhone }) => {
  
  const [password, setPassword] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [lettersBeforeAt, setLettersBeforeAt] = useState(0);
  const [lettersAfterAt, setLettersAfterAt] = useState(0);

  useEffect(() => {
    if (!formSubmitted) {
      // Restablecer los estados y errores del formulario
      
      
      setPassword('');
      setPhoneError('')
      setNombreError('');
      setEmailError('');
      setPasswordError('');
      setLettersBeforeAt(0);
      setLettersAfterAt(0);
    }
  }, [formSubmitted]);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    const atIndex = inputValue.indexOf('@');
    const lettersBefore = atIndex > 0 ? atIndex : 0;
    const lettersAfter = atIndex > 0 ? inputValue.length - atIndex - 1 : 0;

    if (lettersBefore >= 3 && lettersAfter >= 3) {
      setEmail(inputValue);
      setLettersBeforeAt(lettersBefore);
      setLettersAfterAt(lettersAfter);
      setEmailError('');
    } else {
      setEmailError();
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpClick = () => {
    // Validaciones
    let formValid = true;
  
    if (!nombre) {
      setNombreError('El nombre es obligatorio');
      formValid = false;
    } else {
      setNombreError('');
    }
    if (!phone) {
      setPhoneError('El numero es obligatorio');
      formValid = false;
    } else {
      setPhoneError('');
    }
  
    if (lettersBeforeAt < 3 || lettersAfterAt < 3) {
      setEmailError('El correo electrónico debe tener el "@"');
      formValid = false;
    }
  
    if (!password) {
      setPasswordError('La contraseña es obligatoria');
      formValid = false;
    } else {
      setPasswordError('');
    }
  
    // Si el formulario es válido, puedes enviarlo o realizar otras acciones
    if (formValid) {
      updateName(nombre);
      
      console.log('Formulario enviado');
      // Cerrar el formulario y mostrar la imagen
      onClose();
      setFormSubmitted(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="div-center-container-form">
      <div className="div-container-form">
        <header className="header-modal-form">
          <span className="close-button-form" onClick={onClose}>
            x
          </span>
          <h1 className="h1-title-form">Sign Up</h1>
        </header>

        <div className="flex-input">
          <div className="flex-input-container-text">
            <label htmlFor="name" className="label">
              Name
            </label>
            <div className="input">
              <input
                type="text"
                onChange={handleNombreChange}
                placeholder="Enter Your Name"
              />
              <i className="icon-user">
                <BiUserCircle />
              </i>
            </div>
            
          </div>
          {nombreError && <p className="error-message">{nombreError}</p>}

          <div className="flex-input-container-text">
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="input">
              <input
                type="email"
                onChange={handleEmailChange}
                placeholder="Enter Your Email"
              />
              <i className="icon-email">
                <BiEnvelope />
              </i>
            </div>
            
          </div>
          {emailError && <p className="error-message">{emailError}</p>}

          <div className="flex-input-container-text">
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="input">
              <input
                type="password"
                onChange={handlePasswordChange}
                placeholder="Enter Your Password"
              />
              <i className="icon-password">
                <BiLock />
              </i>
            </div>
            {console.log(nombre)}
            {console.log(email)}
            
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}

          <div className="flex-input-container">
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <div className="input">
              <input
                type="text"
                onChange={handlePhoneChange}
                placeholder="Enter Your Phone Number"
              />
              <i className="icon-phone">
                <BiPhone />
              </i>
            </div>
            
          </div>
          {phoneError && <p className="error-message">{phoneError}</p>}
        </div>

        <footer className="footer-modal-form">
          <button className="close-button-footer-form" onClick={onClose}>
            Close
          </button>
          <button className="comprar-button-footer-form" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </footer>
      </div>
    </div>
     
  );
 
};

export default FormList;

