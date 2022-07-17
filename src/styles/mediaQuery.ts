// deprecated
export const onXSmall = '@media only screen and (max-width: 600px)' // mobile portrait or tablet landscape
export const onSmall = '@media only screen and (min-width: 601px) and (max-width: 900px)'
export const onLarge = '@media only screen and (min-width: 901px) and (max-width: 1200px)'
export const onXLarge = '@media only screen and (min-width: 1201px)'

// use this
const breakpoints = {
  XSmall: 320,
  Small: 600,
  Large: 900,
  XLarge: 1200,
}

type BP = keyof typeof breakpoints

export const SCREEN_BREAKPOINT = (name: BP) => `@media (min-width: ${breakpoints[name]}px)`
