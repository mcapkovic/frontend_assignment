import styled from "styled-components";

export const Step = styled.div`
  margin-top: 42px;
  margin-bottom: 58px;
`;

export const Summary = styled.div`
  margin-bottom: 46px;
  & > * + * {
    margin-top: 22px;
  }
`;
