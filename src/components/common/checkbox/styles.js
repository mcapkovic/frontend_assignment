import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"]:focus + label {
    border-color: #cd8b65;
  }
`;

export const Check = styled.input.attrs({
  type: "checkbox",
})`
  position: absolute;
  opacity: 0;
`;

export const CustomCheckbox = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  border-radius: 8px;
  width: 34px;
  height: 34px;
  border: 1px solid #f3e2d9;
  &:hover {
    border-color: gray;
  }
`;

export const Label = styled.label`
  margin-left: 16px;
`;

export const CheckPath = styled(motion.path)`
  fill: none;
  stroke-width: 2px;
  stroke: #AB7455;
`;
