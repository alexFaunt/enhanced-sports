export const AWAIT_PROMISE = 'AWAIT_PROMISE' // eslint-disable-line

export const awaitPromise = (promise) => ({
  type: AWAIT_PROMISE,
  promise
})
