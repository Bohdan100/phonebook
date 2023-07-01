import styled from "styled-components";

export const FilterInput = styled.input<{ filter: string }>`
  width: 100%;
  margin-bottom: 24px;
  padding: 6px ${(p) => p.theme.space[4]}px;

  font-family: "Segoe UI";
  font-weight: ${(p) => p.theme.fontWeights.middle};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  letter-spacing: 0.03em;

  background-color: ${(p) => p.theme.colors.whiteFirst};
  border-radius: ${(p) => p.theme.radii.highRound};
  border: 2px solid ${({ filter }) => (filter ? "#713200" : "#89888ba6")};
  outline: none;

  &:focus {
    border: 2px solid ${(p) => p.theme.colors.brownFirst};
  }

  @media screen and (min-width: 400px) {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;
