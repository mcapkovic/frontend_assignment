import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
`;

export const Button = styled.button`
  all: unset;
  flex: 1;
  cursor: pointer;
  padding: ${(props) => (props.selected ? "25px 24px 25px 24px" : "24px")};
  border: ${(props) => (props.selected ? "none" : "1px solid #cd8b65")};
  background: ${(props) =>
    props.selected
      ? "linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%)"
      : "none"};
  box-shadow: ${(props) =>
    props.selected
      ? "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),  0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)"
      : "none"};
  color: ${(props) => (props.selected ? "#FFFFFF" : "#585757")};

  svg {
    transition: opacity 200ms ease-out;
    opacity: 1;
  }

  &:hover svg {
    opacity: 0.7;
  }
`;

export const ButtonStart = styled(Button)`
  border-radius: 24px 0px 0px 24px;

  path {
    stroke: ${(props) => (props.selected ? "#FFFFFF" : "#9F9F9F")};
  }
`;

export const ButtonEnd = styled(Button)`
  border-radius: 0px 24px 24px 0px;
  path {
    fill: ${(props) => (props.selected ? "#FFFFFF" : "#9F9F9F")};
  }
`;

export const IconCircle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  background: #2f2f2f29;
  border-radius: 50%;
`;

export const Label = styled.div`
  font-family: Public Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  margin-top: 17px;
`;
