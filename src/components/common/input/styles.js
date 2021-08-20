import styled from "styled-components";

export const StyledInput = styled.div`
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 23px;

  &:hover {
    border-color: #9c9c9c;
  }

  &:focus-within {
    border-color: #cd8b65;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  color: #2f2f2f;
`;

export const InnerInput = styled.input`
  all: unset;
  width: 100%;
  font-size: 16px;
  line-height: 21px;
  &::placeholder {
    color: #9f9f9f;
  }
`;
