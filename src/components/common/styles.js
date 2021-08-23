import styled from "styled-components";

export const UnstyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ButtonBase = styled(UnstyledButton)`
  border-radius: 100px;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  padding: 20px 24px;
  &:hover {
    opacity: 0.9;
  }
  &:disabled{
    cursor: not-allowed;
  }
`;

export const Button = styled(ButtonBase)`
  background: #f3e2d9;
  color: #2f2f2f;
  &:focus {
    border: 1px solid #0000001f;
    padding: 19px 23px;
  }
`;

export const ButtonPrimary = styled(ButtonBase)`
  color: #ffffff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  background: ${(props) =>
    props.disabled
      ? "#9F9F9F"
      : "linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%)"};
  &:focus {
    border: 1px solid #00000070;
    padding: 19px 23px;
  }
`;
