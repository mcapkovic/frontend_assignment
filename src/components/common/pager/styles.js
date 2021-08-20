import styled from "styled-components";

export const StyledPager = styled.div`
  display: flex;
`;

export const Page = styled.div`
  margin-right: 5px;
  opacity: 0.36;
  height: 6px;
  border-radius: 10px;
  background: ${(props) =>
    props.selected
      ? "linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), #CD8B65;"
      : "#9F9F9F"};
  opacity: ${(props) => (props.selected ? 1 : 0.36)};
  width: ${(props) => (props.selected ? "43.77px" : "20.6px")};
`;
