import styled from "styled-components";

export const StyledFooter = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid rgba(47, 47, 47, 0.16);
  padding: 100px 50px;

  & > * + * {
    margin-left: 72px;
  }

  @media (min-width: 768px) {
    padding: 100px 0;
  }

  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

export const StyledSection = styled.div`
  width: 170px;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 130%;
`;

export const SectionTitle = styled.div`
  font-weight: 800;
  margin-bottom: 24px;
`;

export const Logo = styled.div`
  min-width: 220px;
  margin-right: 26px;
`;

export const Link = styled.a`
  display: block;
  line-height: 200%;
`;
