/** utility to ratate Y 180 */
export const rotateY180 = {
  transform: 'rotateY(180deg)',
};

export const breakpoints: any = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
};

/** FIXME any */
export const media = Object.keys(breakpoints).reduce((acc: any, item) => {
  acc[item] = `@media screen and (min-width: ${breakpoints[item]}px)`;
  return acc;
}, {});
