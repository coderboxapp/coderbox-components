
export const breakpoints = {
  MOBILE: '340px',
  TABLET: '740px',
  DESKTOP: '980px'
}

let { MOBILE, TABLET } = breakpoints

export const mq = ({from, to}) => {
  if (!from) {
    return `@media (max-width: ${to}) `
  }

  if (from && !to) {
    return `@media (min-width: ${from})`
  }

  let media = `@media (min-width: ${from}) and (max-width: ${to}) `
  return media
}

export const onlyOnMobile = mq({from: 0, to: MOBILE})
export const onlyOnTablet = mq({from: MOBILE, to: TABLET})
export const mobileAndTablet = mq({from: 0, to: TABLET})
