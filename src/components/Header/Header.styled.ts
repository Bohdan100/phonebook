import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 700px) {
    justify-content: flex-end;
  }
`;
export const HeaderMenu = styled.div`
  padding: 8px 20px 0px;
  font-family: "Libre Baskerville", serif;
  color: ${(p) => p.theme.colors.whiteFirst};
  border-bottom: 1px solid ${(p) => p.theme.colors.whiteFirst};

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    padding: 8px 40px 0px;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: 30px;
  line-height: 1.3;
  letter-spacing: 0.03em;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSizes.xxl};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.xxxl};
  }
`;
