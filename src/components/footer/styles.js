import styled from "styled-components";

export const StyledFooter = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid rgba(47, 47, 47, 0.16);
  * + *{
      margin-left: 72px;
  }
  padding: 100px 50px;

  @media (min-width: 768px) {
    padding: 100px 0;
  }
  
  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

export const StyledSection = styled.div`
  max-width: 170px;
  min-width:100px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.div`
  font-weight: 800;
`;

export const Logo = styled.div`
  min-width: 220px;
`;
