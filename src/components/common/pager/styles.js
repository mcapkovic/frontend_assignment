import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPager = styled.div`
  display: flex;
  margin: ${({ margin }) => margin};
`;

export const Page = styled(motion.div)`
  margin-right: 5px;
  opacity: 0.36;
  height: 6px;
  border-radius: 10px;
  background: ${(props) =>
    props.selected
      ? "linear-gradient(94.75deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%), #CD8B65;"
      : "#9F9F9F"};
  opacity: ${(props) => (props.selected ? 1 : 0.36)};
`;
