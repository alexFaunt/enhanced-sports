

## Techs
preact
redux
react-router 4
css modules
babel
webpack
koa

## Notes
Using aliasing to set react to preact-compat on node rather than webpack the server
using webpack to do the same for the bundle

To get css modules importing on server side need to use webpack loaders for node



## TODOS
Double render when hitting client - don't know why, might be my global error action, or might be react-router doing it twice

Post css doesnt WORK because of webpack apparently.???

Add jest tests

minify CSS in prod
minify HTML in prod

Maybe sagas?

Dont let everything die if the bundle fails

Webpack tree shaking

History in index.jsx?!!? do i need it?!!
