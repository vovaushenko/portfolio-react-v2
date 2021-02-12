import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import emailjs from 'emailjs-com';
import { WaveSpinner } from 'react-spinners-kit';

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
    box-shadow: 0 0 10px #01bf71;
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
    font-family: 'Poppins', sans-serif;
  }
  label {
    padding-right: 20px;
    font-family: 'Poppins', sans-serif;

    @media screen and (max-width: 500px) {
      font-size: 12px;
    }
  }

  input {
    margin-right: 10px;
    font-family: 'Poppins', sans-serif;
  }
`;

const StyledError = styled.div`
  color: #ff0000;
  border-radius: 5px;
  font-weight: 800;
  text-align: center;
  margin-top: 10px;
`;
const StyledSuccess = styled.div`
  color: #00ff00;
  padding: 10px;

  border-radius: 5px;
  font-weight: 800;
  text-align: center;
  margin-top: 10px;
`;
const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === '') {
        setError(`😔 Please, provide the ${key}`);
        return;
      }
    }
    setError('');

    setLoading(true);

    emailjs
      .sendForm(
        'service_zkbmlar',
        'template_lr1w6mq',
        e.target,
        'user_KEdsdmn9zhqBYb1cfXl6I'
      )
      .then(
        (result) => {
          setSuccess(true);
          setState(initialState);
          setLoading(false);
        },
        (error) => {
          setSuccess(false);
          setLoading(false);
          setError(error);
        }
      );
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
          <h2 style={{ color: '#01bf71' }}>Connect With Me 👋</h2>
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
                checked={state.subject === 'personal'}
                onChange={handleInput}
              />
              Personal
            </label>
            <label>
              <input
                type="radio"
                value="ecommerce"
                name="subject"
                checked={state.subject === 'ecommerce'}
                onChange={handleInput}
              />
              E-commerce
            </label>
            <label>
              <input
                type="radio"
                value="landing"
                name="subject"
                checked={state.subject === 'landing'}
                onChange={handleInput}
              />
              Landing Page
            </label>
            <label>
              <input
                type="radio"
                value="cooperation"
                name="subject"
                checked={state.subject === 'cooperation'}
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
          {loading && (
            <StyledLoading>
              <WaveSpinner size={50} color="#01bf71" />
            </StyledLoading>
          )}

          {success && (
            <StyledSuccess>
              <p>Your message was successfuly sent 😉</p>
            </StyledSuccess>
          )}

          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactForm;
