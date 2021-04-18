import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import emailjs from 'emailjs-com';
import ReusableButton from '../ReusableButton/ReusableButton';
import { RotateSpinner } from 'react-spinners-kit';
import avatarDarkMode from '../../images/avatar.svg';
import avatarLightMode from '../../images/avatar-light-mode.svg';
import { useGlobalContext } from '../../context/context';

const sharedStyles = css`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  height: 2rem;
  border: 2px solid;
  border-color: ${({ theme }) => theme.mainColor};
  border-radius: 5px;
  margin: 0.5rem 0 1rem 0;
  padding: 1.5rem;
  letter-spacing: 1.1px;
  font-size: 1.125rem;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  h2 {
    text-align: center;
    color: ${({ theme }) => theme.mainColor};
  }
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.mainColor};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;

  ${sharedStyles}

  :focus {
    background-color: transparent;
    outline: none !important;
    box-shadow: 0 0 10px ${({ theme }) => theme.mainColor};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  color: ${({ theme }) => theme.text};
  min-height: 100px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.mainColor};
  background-color: transparent;
  border-radius: 5px;
  letter-spacing: 1.1px;
  resize: none;
  font-size: 1.5rem;

  :focus {
    outline: none !important;
    box-shadow: 0 0 10px ${({ theme }) => theme.mainColor};
  }
`;

const StyledFieldset = styled.fieldset`
  border: 2px solid;
  border-color: ${({ theme }) => theme.mainColor};
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;

    @media screen and (max-width: 500px) {
      display: flex;
    }
  }

  input {
    margin-right: 10px;
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

const StyledAvatar = styled.img`
  width: 150px;
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
const StyledHeader = styled.h2`
  letter-spacing: 1.1px;
  margin-top: 1rem;
  color: ${({ theme }) => theme.mainColor};
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

  const { theme } = useGlobalContext();

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
      <AvatarWrapper id="footer">
        <StyledAvatar
          src={theme === 'dark' ? avatarDarkMode : avatarLightMode}
          alt="friendly avatar"
        />
        <StyledHeader>Always happy to hear from you </StyledHeader>
      </AvatarWrapper>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Connect With Me 👋</h2>
          <label htmlFor="name">
            Name
            <StyledInput
              type="text"
              name="name"
              value={state.name}
              onChange={handleInput}
            />
          </label>

          <label htmlFor="email">
            Email
            <StyledInput
              type="email"
              name="email"
              //TODO:regex validation pattern=""
              value={state.email}
              onChange={handleInput}
            />
          </label>
          <StyledFieldset>
            <legend>Subject</legend>
            <label htmlFor="personal">
              <input
                type="radio"
                value="personal"
                name="subject"
                checked={state.subject === 'personal'}
                onChange={handleInput}
              />
              Personal
            </label>
            <label htmlFor="ecommerce">
              <input
                type="radio"
                value="ecommerce"
                name="subject"
                checked={state.subject === 'ecommerce'}
                onChange={handleInput}
              />
              E-commerce
            </label>
            <label htmlFor="landing">
              <input
                type="radio"
                value="landing"
                name="subject"
                checked={state.subject === 'landing'}
                onChange={handleInput}
              />
              Landing Page
            </label>
            <label htmlFor="cooperation">
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
          <label htmlFor="message">
            Message
            <StyledTextArea
              name="message"
              value={state.message}
              onChange={handleInput}
            />
          </label>

          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          {loading && (
            <StyledLoading>
              <RotateSpinner size={50} color="#01bf71" />
            </StyledLoading>
          )}

          {success && (
            <StyledSuccess>
              <p>✨✨✨Your message was successfuly sent✨✨✨</p>
            </StyledSuccess>
          )}

          <ReusableButton type="submit" text="Send Message" />
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default ContactForm;
