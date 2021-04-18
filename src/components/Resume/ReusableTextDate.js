import styled from 'styled-components';
import ReusableSectionSubHeader from './ReusableSectionSubHeader';

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ReusableTextDate = ({ header, date }) => {
  return (
    <TextWrapper>
      <ReusableSectionSubHeader>{header}</ReusableSectionSubHeader>

      <p>{date}</p>
    </TextWrapper>
  );
};

export default ReusableTextDate;
