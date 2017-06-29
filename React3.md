
I'm not going to go into detail here of how this was achieved through react-router 3 as it's an entire blog post in itself - but the approach i've seen regularly follows:

* Component defines static property 'needs' containing actions to be fired.
* Server side rendering calls react-router's `match(routes, location, callback)`.
* Callback is provided render details including the components to be rendered.
* Loop over components and fire any actions found in `Component.needs`.
* Await all actions completion then render the app with resultant state.
* Client side state is fetched through lifecycle hooks such as componentDidMount or componentWillReceiveProps.

This has worked well until now, though there are some downsides. Using the lifecycle methods to fetch data can produce a lot of repeated similar code, or have lots of conditions for firing actions depending on state.

Other approaches exist such as [redux-async-connect](https://github.com/Rezonans/redux-async-connect) but I believe this will also only apply to react-router 3.










### Components Define Initial State

Each component needs to define it's required state so when rendering we only fetch the minimum data needed to render. In previous versions this was done through a static property on the Component.

```javascript
  class Profile extends Component {
    // Actions to populate initial state of component
    static needs [
      getProfile
    ]
    render() {
      // Where id is supplied by url params, profiles is a reducer containing a profile map
      const { params: { id }, profiles } = this.props
      const { name, age } = profiles[id]
      return (
        <div className="Profile">
          <p>{ name }</p>
          <p>{ age }</p>
        </div>
      )
    }
  }
  // redux connects the profiles reducer to component
  export default connect(({ profiles }) => ({ profiles }))(Profile)
```

This approach achieves our requirement and clearly states the getProfile action must be called for this component. A disadvantage to note is that the getProfile action can't be passed props, it must get them from another means, and may make that action inflexible to other uses (a better name may be).

### Server awaits app state completion

match

fetch component data

### State updating

.needs middleware

componentDidMount && componentWillReceiveProps


## React router 4 suggestion




CODE FOR LOUISE 436
