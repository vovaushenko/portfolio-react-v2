import React from 'react';
import styled from 'styled-components';
import { JellyfishSpinner } from 'react-spinners-kit';

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

const index = () => {
  return (
    <>
      <LoadingContainer>
        <JellyfishSpinner size={150} color="#01bf71" />
      </LoadingContainer>
    </>
  );
};

export default index;
