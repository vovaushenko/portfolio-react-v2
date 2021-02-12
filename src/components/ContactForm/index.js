import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Russo One', sans-serif;
}
p {
    font-family: 'Poppins', sans-serif;
}

 
 body {
    font-family: 'Poppins', sans-serif;
    background:#010606;
    color:#fff
 }
 `;

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
`;

const StyledTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
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

const index = () => {
    return (
        <>
            <GlobalStyle />
            <StyledFormWrapper>
                <StyledForm>
                    <h2>Feel free to contact</h2>
                    <label htmlFor="name">Name</label>
                    <StyledInput type="text" name="name" />
                    <label htmlFor="email">Email</label>
                    <StyledInput type="email" name="email" />
                    <StyledFieldset>
                        <legend>Subject</legend>
                        <label>
                            <input
                                type="radio"
                                value="personal"
                                name="personal"
                            />
                            Personal
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="ecommerce"
                                name="ecommerce"
                            />
                            E-commerce
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="landing"
                                name="landing"
                            />
                            Landing Page
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="cooperation"
                                name="cooperation"
                            />
                            Cooperation
                        </label>
                    </StyledFieldset>
                    <label htmlFor="message">Message</label>
                    <StyledTextArea name="message" />
                    <StyledError>
                        <p>Error Message</p>
                    </StyledError>
                    <StyledButton type="submit">Send Message</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    );
};

export default index;
