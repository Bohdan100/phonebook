import styled from "styled-components";

export const CardWrap = styled.div`
  width: 300px;
  margin: ${(p) => p.theme.space[0]}px auto;

  @media screen and (min-width: 400px) {
    width: 380px;
  }

  @media screen and (min-width: 600px) {
    width: 480px;
  }

  @media screen and (min-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: auto;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 75vh;

  margin-top: ${(p) => p.theme.space[2]}px;
  margin-bottom: ${(p) => p.theme.space[2]}px;
  padding-right: ${(p) => p.theme.space[4]}px;
  padding-left: ${(p) => p.theme.space[4]}px;
  padding-top: ${(p) => p.theme.space[1]}px;
  padding-bottom: ${(p) => p.theme.space[0]}px;

  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.whiteForth};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (min-width: 700px) {
    width: 40%;
    margin-top: ${(p) => p.theme.space[8]}px;
    margin-bottom: ${(p) => p.theme.space[5]}px;
    margin-right: 10%;
  }

  @media screen and (min-width: 1024px) {
    width: 34%;
    margin-right: 16%;
  }
`;
