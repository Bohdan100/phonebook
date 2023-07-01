import styled from "styled-components";

export const ErrorWrap = styled.div`
  width: 100%;
  height: 80vh;
  text-align: ${(p) => p.theme.position.center};
`;

export const ErrorText = styled.h2`
  position: relative;
  top: 200px;

  margin: ${(p) => p.theme.space[0]}px;
  padding: ${(p) => p.theme.space[0]}px;
  font-size: ${(p) => p.theme.fontSizes.xl};
  line-height: ${(p) => p.theme.lineHeights.thick};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.redFirst};
  text-align: center;

  @media screen and (min-width: 700px) {
    top: 300px;
    font-size: 35px;
  }
`;
