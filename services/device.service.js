export const isMobile = element => getComputedStyle(element).getPropertyValue('--is-mobile').trim() === '"true"'
