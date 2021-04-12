import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  padding: 0.5em 1em;
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  :before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 1rem;
  }

  :active {
    color: #000;
  }

  :active:after {
    background: transparent;
  }

  :hover {
    color: ${({ theme }) => theme.mainColor};
  }

  :hover:before {
    opacity: 1;
  }

  :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 2rem;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
