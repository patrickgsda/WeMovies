import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    mobile_360: "(max-width: 360px)",
    mobile_375: "(max-width: 375px)",
    mobile_385: "(max-width: 385px)",
    mobile_395: "(max-width: 395px)",
    mobile_405: "(max-width: 405px)",
    mobile: "(max-width: 425px)",
    tablet: "(max-width: 768px)",
    laptop: "(max-width: 1024px)",
    desktop: "(min-width: 1024px)",
  },
});
