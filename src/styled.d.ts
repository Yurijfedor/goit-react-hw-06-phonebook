import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      accent: string;
      primaryText: string;
      secondaryText: string;
      backgroundColorStats: string;
      background: string;
      text: string;
      green: string;
      red: string;
      blue: string;
      tableTextColor: string;
      theadBgColor: string;
      tableTrSecondaryBgColor: string;
    };
    space: number[];
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      md: string;
      l: string;
      xl: string;
    };
    fontWeights: {
      normal: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    borders: {
      none: string;
      normal: string;
      medium: string;
    };
    radii: {
      none: string;
      normal: string;
      medium: string;
      round: string;
    };
    shadows: {
      sm: {
        shadowColor: string;
        shadowOffset: {
          width: number;
          height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;

        elevation: number;
      };

      md: {
        shadowColor: string;
        shadowOffset: {
          width: number;
          height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;

        elevation: number;
      };
    };
  }
}
