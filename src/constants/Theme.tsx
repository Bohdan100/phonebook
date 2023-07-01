import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    brownFirst: "#713200",
    brownSecond: "#4a3934",
    brownSecondAccent: "#4a3934ac",
    brownThird: "#6e4f40a0",
    brownThirdAccent: "#6e4f40",

    whiteFirst: "#f2f4f3",
    whiteSecond: "#ffffff",
    whiteThird: "#e5e3e9",
    whiteForth: "#f2f4f3d1",

    grayFirst: "#757575",
    graySecond: "#f2f4f3d1",
    grayThird: "#89888ba6",

    blueFirst: "#77aad4",
    blueSecond: "#4b80ac",

    redFirst: "#ca5757",
    blackFirst: "#3a3530",
  },

  space: [0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60],

  fontSizes: {
    xs: "10px",
    s: "14px",
    m: "18px",
    l: "24px",
    xl: "32px",
    xxl: "40px",
    xxxl: "50px",
  },

  fontWeights: {
    normal: 400,
    middle: 500,
    bold: 700,
  },

  lineHeights: {
    body: 1.43,
    thick: 1.3,
    heading: 1.167,
    medium: 1.125,
    clear: 1.07,
  },

  borders: {
    none: 0,
  },

  radii: {
    none: "0",
    normal: "2px",
    smart: "4px",
    medium: "8px",
    highRound: "20px",
  },

  position: {
    center: "center",
    auto: "auto",
    absolute: "absolute",
    fixed: "fixed",
    relative: "relative",
    sticky: "sticky",
  },
};

export { theme };
