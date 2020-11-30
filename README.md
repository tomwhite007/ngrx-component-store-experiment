# NgRx Component Store Experiment

This project is to show a progressive exploration of NgRx Component Store, as compared to using a BehaviourSubject to store local state in a view model object.

The demo code is in this [App](https://github.com/tomwhite007/ngrx-component-store-experiment/blob/main/apps/playground/src/app/app.component.ts), inside a Nrwl Nx Workspace. I used Nx because it comes with an excellent schematic for scaffolding the global NgRx state - so I could make this demo quicker.

The progression is in the form of branches on this repo, as follows:

### [main](https://github.com/tomwhite007/ngrx-component-store-experiment)

The base branch contains an example app (Book App) using a BehaviourSubject to store local state in a view model object.

[Link to main branch](https://github.com/tomwhite007/ngrx-component-store-experiment)

### [feature/convert-to-ngrx-component-store](https://github.com/tomwhite007/ngrx-component-store-experiment/tree/feature/convert-to-ngrx-component-store)

This branch converts the BehaviourSubject into Component Store, using direct commands to the NgRx lib.

It is pretty much the same amount of code as `main` branch, (maybe one line more), but now benefits from Type safety and fixed interface for the local state.

[Link to PR Feature/convert to ngrx component store #1](https://github.com/tomwhite007/ngrx-component-store-experiment/pull/1)

### [feature/factor-component-state-into-service](https://github.com/tomwhite007/ngrx-component-store-experiment/tree/feature/factor-component-state-into-service)

This branch refactors the Component Store commands into a Component-provided service which behaves like a facade.

This is the recommended structure by NgRx team, for when your local state is complex. I think it's pretty much the best way to use it at all times.

The service extends the Component Store so that it doesn't require DI and reduces a little boilerplate.

[Link to PR Feature/factor component state into service #4](https://github.com/tomwhite007/ngrx-component-store-experiment/pull/4)

### [feature/add-demo-effect](https://github.com/tomwhite007/ngrx-component-store-experiment/tree/feature/add-demo-effect)

This branch adds a dummy Google Analytics event to demonstrate how Component Store Effects might be used.

Component Store Updaters and Effects have a lot of overlap; both can be triggered by Observable streams or function calls, and both are asyncronous. The only obvious difference is that effects don't update the state unless they call updaters.

[Link to PR Feature/add demo effect #5](https://github.com/tomwhite007/ngrx-component-store-experiment/pull/5)

## Links

https://ngrx.io/guide/component-store/usage

https://ngrx.io/guide/component-store/read#selecting-from-global-ngrxstore

## About

This project was generated using [Nx](https://nx.dev).
