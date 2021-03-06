/// <reference types="react-scripts" />
import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
        grey: string;
      };
      primary: IPalette;
      secondary: IPalette;
      tertiary: IPallete;
      lightPrimary: string;
    };
  }
}
