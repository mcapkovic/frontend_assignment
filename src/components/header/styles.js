import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  color: #9f9f9f;
  font-weight: 600;
`;

export const HeaderStart = styled.div`
  background: purple;
  grid-area: headerStart;
  background-color: #fefefe;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

export const HeaderEnd = styled.div`
  background: gray;
  grid-area: headerEnd;
  background-color: #fefefe;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
`;
