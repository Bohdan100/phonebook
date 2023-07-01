import styled from "styled-components";

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.grayFirst};

  @media screen and (min-width: 400px) {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelName = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  height: ${(p) => p.theme.space[8]}px;
  padding-left: ${(p) => p.theme.space[2]}px;
  margin-bottom: ${(p) => p.theme.space[4]}px;
  background-color: ${(p) => p.theme.colors.whiteFirst};
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: ${(p) => p.theme.radii.smart};
  color: ${(p) => p.theme.colors.brownFirst};
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    outline: none;
    border: 2px solid ${(p) => p.theme.colors.brownFirst};
  }
`;

export const ErrorMessageWrap = styled.p`
  margin-bottom: 20px;
  color: ${(p) => p.theme.colors.brownFirst};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  letter-spacing: 0.01em;
`;

export const AddButton = styled.button`
  width: 140px;
  height: 30px;
  margin: ${(p) => p.theme.space[0]}px auto;
  font-family: inherit;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.grayFirst};
  background: ${(p) => p.theme.colors.whiteThird};
  border: ${(p) => p.theme.borders.none};
  border-radius: ${(p) => p.theme.radii.medium};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.brownFirst};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: ${(p) => p.theme.colors.whiteFirst};
  }

  @media screen and (min-width: 400px) {
    width: 160px;
    height: 40px;
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;
