# React router 4 Title

## Intro

React/Redux apps have been evolving all the time and there are ~1000 different boilerplates to help us get set up with the best way to work. This is a double edge sword of this stack, the flexibility is amazing and every project can be tailored to it's needs, but it can be stifiling to make decisions especially as a new starter.

One of the big new changes is React Router's upgrade to version 4. There has been commotion in the community at another breaking change by this ubiquitous library. This update reduces the scope the router controls to just swapping components in and out based on the url - which makes perfect sense. But there are a lot of features that are no longer supported so we must find other approaches.

This article will address some of the requirements of a standard React App using react router 4 - but it's also asking for help, if people have ideas or examples of better ways to achieve our needs i'd love to hear them please respond!

The key requirements:
* Components Define Initial State
* Server awaits app state completion
* State updates on client when needed


## React router 2 / 3 approach

I'm not going to go into detail here of how this was achieved through react-router 3 as it's an entire blog post in itself - but there are several approaches i've seen regularly



## React router 4

The shift in responsibilities of react router means we don't have a `match` function to calculate the components to be rendered. So we can't loop over the components and must find other ways to define the initial actions.


### Satisfy component

### Simple promise middleware (could be thunked)

### Server await promises

### Double render issue(?)
* Strange pattern, but other examples
* Optional condition
* As props update will refetch - all in one place
* Normal components dont need lifecycle
* Expiry example becomes easy

## Variations on approach

### Multiple components

### Wrap component instead of inline

### satisfy decorator


## Conclusion
