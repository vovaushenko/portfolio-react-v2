import React from 'react';
import styled from 'styled-components';
import { JellyfishSpinner } from 'react-spinners-kit';
import { useGlobalContext } from '../../context/context';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #010606;
`;

const LoadingPage = () => {
  const { theme } = useGlobalContext();
  const color = theme === 'dark' ? '#01bf71' : '#715CDA';
  console.log(theme);
  return (
    <>
      <LoadingContainer>
        <JellyfishSpinner size={150} color={color} />
      </LoadingContainer>
    </>
  );
};

export default LoadingPage;
