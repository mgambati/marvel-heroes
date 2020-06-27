import tailwindTheme from "@theme-ui/preset-tailwind";

export type BaseTheme = typeof tailwindTheme;

export const BASE_THEME: BaseTheme = {
  ...tailwindTheme,
  colors: {
    ...tailwindTheme.colors,
    primary: tailwindTheme.colors.dark,
  },
};
