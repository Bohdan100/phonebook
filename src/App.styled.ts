import styled from "styled-components";

export const AppWrapper = styled.div<{ imgWrap: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${(p) => p.theme.colors.blackFirst};
  background: url(${({ imgWrap }) => imgWrap});
  background-size: cover;
  background-position: right top;
  overflow-y: scroll;

  @media screen and (min-width: 700px) {
    background-position: center top;
  }
`;

export const SpinerWrapper = styled.div`
  width: 100%;
  height: 100vh;

  margin: ${(p) => p.theme.space[0]}px auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;
