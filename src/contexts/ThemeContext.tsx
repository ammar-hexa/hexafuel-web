// @ts-ignore
import React from "react";

// themes or color-modes
enum Theme {
  LIGHT = "light",
  DARK = "dark",
  SUCCESS = "success",
}

// contrasting colors that are clearly visible against theme's background color
enum ThemeContrast {
    LIGHT = "dark",
    DARK = "light",
    SUCCESS = "light",
}

const ThemeContext = React.createContext(Theme.LIGHT);

function isColorTheme(theme: Theme): boolean {
  switch (theme) {
    case Theme.SUCCESS:
      return true;
    default:
      return false;
  }
}

function contrastingColor(theme: Theme): string {
    switch (theme) {
        case Theme.DARK:
            return ThemeContrast.DARK;
        case Theme.SUCCESS:
            return ThemeContrast.SUCCESS;
        default:
            return ThemeContrast.LIGHT;
    }
}

export { ThemeContext, Theme, isColorTheme, ThemeContrast, contrastingColor };
