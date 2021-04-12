import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [register, setRegister] = useState({});
  const [validForm, setValidForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    validateRegister(name, email, password);
  }, [name, email, password]);

  const validateRegister = (name, email, password) => {
    const minCharacter = 5;
    const minLengthPassword = 6;
    const expectedFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/;
    const isValidEmail = expectedFormat.test(email);
    if (isValidEmail && name < minCharacter && password < minLengthPassword) return setValidForm(true);
    setValidForm(false);
  };
  const contextValue = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    validateRegister,
    validForm,
    setValidForm,
    register,
    setRegister,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.array,
]).isRequired };

export default Provider;