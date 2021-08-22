import styled from "styled-components";

export const StyledMultiStepForm = styled.form`
  padding: 50px 35px 126px 35px;

  @media (min-width: 768px) {
    padding: 95px 35px 126px 100px;
  }
`;

export const Controls = styled.div`
  display: flex;
`;

export const SubmitMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  font-size: 24px;
  text-align: center;
`;
