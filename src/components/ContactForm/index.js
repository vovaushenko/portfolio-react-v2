import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const sharedStyles = css`
  background-color: #010606;
  color: #01bf71;
  border-radius: 5px;
  height: 40px;
  border: 2px solid #01bf71;
  border-radius: 5px;
  margin: 10px 0 20px 0;
  padding: 20px;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;

  h2 {
    text-align: center;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  border: 2px solid #01bf71;
  border-radius: 10px;
  box-sizing: borde-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;

  ${sharedStyles}

  :focus {
    color: #01bf71;
    background-color: #010606;
    outline: none !important;
    border-color: #01bf71;
    box-shadow: 0 0 5px #01bf71;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  color: #01bf71;
  min-height: 100px;
  border: 2px solid #01bf71;
  background-color: #010606;
  border-radius: 5px;
  resize: none;

  :focus {
    color: #01bf71;
    background-color: #010606;
    outline: none !important;
    border-color: #01bf71;
    box-shadow: 0 0 10px #01bf71;
  }
`;

const StyledButton = styled.button`
  display: block;
  background-color: #01bf71;
  color: #010606;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 2px solid #01bf71;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === '') {
        setError(`You shoud provide the ${key}`);
        return;
      }
    }
    setError('');

    console.log('submitted');
    console.log(state);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Connect With Me 👋</h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />

          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            //TODO:regex validation pattern=""
            value={state.email}
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Subject</legend>
            <label>
              <input
                type="radio"
                value="personal"
                name="subject"
                checked={state.checked === 'personal'}
                onChange={handleInput}
              />
              Personal
            </label>
            <label>
              <input
                type="radio"
                value="ecommerce"
                name="subject"
                checked={state.checked === 'ecommerce'}
                onChange={handleInput}
              />
              E-commerce
            </label>
            <label>
              <input
                type="radio"
                value="landing"
                name="subject"
                checked={state.checked === 'landing'}
                onChange={handleInput}
              />
              Landing Page
            </label>
            <label>
              <input
                type="radio"
                value="cooperation"
                name="subject"
                checked={state.checked === 'cooperation'}
                onChange={handleInput}
              />
              Cooperation
            </label>
          </StyledFieldset>
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />

          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}

          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactForm;
