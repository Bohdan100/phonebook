import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(p) => p.theme.space[4]}px;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;

  padding-left: ${(p) => p.theme.space[2]}px;
  padding-right: ${(p) => p.theme.space[2]}px;
  padding-bottom: ${(p) => p.theme.space[1]}px;
  margin-bottom: ${(p) => p.theme.space[4]}px;
  text-align: ${(p) => p.theme.position.center};

  border-bottom: 1px solid ${(p) => p.theme.colors.brownSecond};
  color: ${(p) => p.theme.colors.brownSecond};

  @media screen and (min-width: 768px) {
    padding-left: ${(p) => p.theme.space[4]}px;
    padding-right: ${(p) => p.theme.space[4]}px;
  }
`;

export const Title = styled.h2`
  font-family: "Segoe UI";
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.lineHeights.thick};
  letter-spacing: 0.03em;

  @media screen and (min-width: 400px) {
    font-size: 30px;
  }
`;

export const AddContactLink = styled(Link)`
  color: ${(p) => p.theme.colors.brownSecond};
  cursor: pointer;
  background: inherit;
  border: ${(p) => p.theme.borders.none};

  &:hover {
    color: ${(p) => p.theme.colors.blueSecond};
  }
`;
