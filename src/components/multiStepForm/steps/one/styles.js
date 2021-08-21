import styled from "styled-components";

export const Step = styled.div`
  margin-top: 28px;
  margin-bottom: 72px;
`;

export const StyledPicker = styled.div`
  & > * {
    margin-bottom: 7px;
    margin-right: 7px;
  }

  & > *:last-of-type {
    margin-right: 0;
  }
`;
