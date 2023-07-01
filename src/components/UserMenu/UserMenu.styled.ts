import styled from 'styled-components';

export const UserMenuWrap = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Libre Baskerville', serif;
  color: ${p => p.theme.colors.whiteFirst};
`;

export const UserEmail = styled.span`
  margin-right: ${p => p.theme.space[4]}px;
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.thick};
  letter-spacing: 0.03em;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }

  @media screen and (min-width: 1024px) {
    margin-right: 60px;
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-style: italic;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.thick};
  letter-spacing: 0.03em;
  color: inherit;
  background-color: inherit;
  border: ${p => p.theme.borders.none};
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.blueFirst};
  }
`;
