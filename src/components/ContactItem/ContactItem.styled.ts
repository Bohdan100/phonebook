import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactWrap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(p) => p.theme.space[2]}px;

  font-family: "Segoe UI";
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.heading};
  letter-spacing: 0.01em;
  border: 1px solid ${(p) => p.theme.colors.brownSecond};

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: ${(p) => p.theme.colors.brownSecond};
`;

export const DataWrap = styled.div`
  display: flex;
  gap: 5px;
`;
export const PhoneLink = styled.a`
  text-decoration: none;
`;

export const PhoneLinkText = styled.div`
  display: flex;
  gap: 5px;
  color: ${(p) => p.theme.colors.brownThird};

  &:hover {
    color: ${(p) => p.theme.colors.brownThirdAccent};
  }
`;

export const OptionsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
`;

export const UpdateContactLink = styled(Link)`
  color: ${(p) => p.theme.colors.brownSecondAccent};
  text-decoration: none;
  background: inherit;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.redFirst};
  }
`;

export const DeleteButton = styled.button`
  color: ${(p) => p.theme.colors.brownSecondAccent};
  cursor: pointer;
  background: inherit;
  border: none;
  padding: 0;

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.redFirst};
  }
`;
