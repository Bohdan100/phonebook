import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;

  margin: 0;
  background-color: transparent;

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const FooterText = styled.div`
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  text-align: center;

  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: 1.5;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  color: ${(p) => p.theme.colors.whiteFirst};

  @media screen and (min-width: 700px) {
    margin: ${(p) => p.theme.space[0]}px;
    font-size: 20px;
  }
`;

export const SocialList = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 10px 0;
  padding: ${(p) => p.theme.space[0]}px;
  list-style-type: none;
  gap: 7px;

  @media screen and (min-width: 700px) {
    margin: 0 0 0 20px;
    justify-content: flex-start;
  }
`;

export const SocialLink = styled.a`
  margin: ${(p) => p.theme.space[0]}px;
  padding: ${(p) => p.theme.space[0]}px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.whiteFirst};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.whiteForth};
  }
`;

export const SocialIcon = styled.div`
  font-size: 15px;

  @media screen and (min-width: 700px) {
    font-size: 22px;
  }
`;
