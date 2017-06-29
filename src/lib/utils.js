 /* eslint-disable import/prefer-default-export  */
export const omit = (items, target) => Object
  .keys(target)
  .reduce((result, prop) => (items.includes(prop) ? result : { ...result, [prop]: target[prop] }), {})
