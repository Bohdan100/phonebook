import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(p) => p.theme.space[4]}px;
`;

export const Title = styled.h1`
  margin-bottom: ${(p) => p.theme.space[4]}px;
  text-align: ${(p) => p.theme.position.center};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.lineHeights.thick};
  letter-spacing: 0.03em;
  padding-bottom: 6px;
  border-bottom: 1px solid ${(p) => p.theme.colors.brownSecond};
  color: ${(p) => p.theme.colors.brownSecond};

  @media screen and (min-width: 400px) {
    font-size: 30px;
  }
`;

export const ContactsLink = styled(Link)`
  margin: ${(p) => p.theme.space[8]}px auto;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.grayFirst};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(p) => p.theme.colors.brownFirst};
    text-decoration: underline;
  }

  @media screen and (min-width: 400px) {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;
