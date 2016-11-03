

## Techs
preact
redux
react-router 4
css modules
babel
webpack


## Notes
Using aliasing to set react to preact-compat on node rather than webpack the server
using webpack to do the same for the bundle

To get css modules importing on server side need to use webpack loaders for node



## TODOS
Double render when hitting client - don't knwo why, mgiht be my global error action, or might be react-router doing it twice

Post css doesnt WORK because of webpack apparently.

Try out jest

Reloading when changes in dev

prod build
minify HTML in prod

Env file doesn't get picked up fix scripts -r dotenv/config
