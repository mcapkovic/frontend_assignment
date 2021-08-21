import styled from "styled-components";

export const StyledRadio = styled.div`
  box-sizing: border-box;
  display: inline-block;
  font-weight: 800;
  font-size: 16px;
  line-height: 21px;
  position: relative;

  input[type="radio"]:checked + label {
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
    border-color: transparent;
    color: #ffffff;
  }

  input[type="radio"]:focus + label {
    border-color: black;
  }
`;

export const EditableRadio = styled(StyledRadio)`
  input[type="radio"]:checked + label {
    & > div:first-of-type {
      opacity: 0;
    }
    & + input {
      opacity: 1;
      z-index: 1;
      color: #ffffff;
    }
  }
`;

export const Dot = styled.input.attrs({
  type: "radio",
})`
  position: absolute;
  opacity: 0;
`;

export const Label = styled.label`
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  padding: 16px;
  display: inline-block;
`;

export const LabelWithUnderline = styled(Label)`
  padding: 16px 16px 15px 16px;
`;

export const Underline = styled.div`
  border-bottom: 1px solid #c9c9c9;
  min-width: 33px;
  display: inline-block;
  opacity: 1;
`;

export const Spacer = styled.div`
  display: inline-block;
  color: transparent;
`;


export const After = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

export const CustomInput = styled.input`
  all: unset;
  position: absolute;
  left: 16px;
  opacity: 0;
  width: 80%;
  z-index: -1;
  top: 50%;
  transform: translate(0, -50%);
`;
