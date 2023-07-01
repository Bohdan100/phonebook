import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      brownFirst: string;
      brownSecond: string;
      brownSecondAccent: string;
      brownThird: string;
      brownThirdAccent: string;

      whiteFirst: string;
      whiteSecond: string;
      whiteThird: string;
      whiteForth: string;

      grayFirst: string;
      graySecond: string;
      grayThird: string;

      blueFirst: string;
      blueSecond: string;

      redFirst: string;
      blackFirst: string;
    };

    space: number[];
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };

    fontWeights: {
      normal: number;
      middle: number;
      bold: number;
    };

    lineHeights: {
      body: number;
      thick: number;
      heading: number;
      medium: number;
      clear: number;
    };

    borders: {
      none: number;
    };

    radii: {
      none: string;
      normal: string;
      smart: string;
      medium: string;
      highRound: string;
    };

    position: {
      center: string;
      auto: string;
      absolute: string;
      fixed: string;
      relative: string;
      sticky: string;
    };
  }
}
