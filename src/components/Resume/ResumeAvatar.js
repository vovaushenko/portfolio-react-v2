import styled from 'styled-components';

const StyledAvatar = styled.div`
  img {
    display: block;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.mainColor};
  }
`;

const ResumeAvatar = ({ avatar, desc }) => {
  return (
    <StyledAvatar>
      <img src={avatar} alt={desc} />
    </StyledAvatar>
  );
};

export default ResumeAvatar;
