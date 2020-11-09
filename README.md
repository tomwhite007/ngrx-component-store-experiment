# NgRx Component Store Experiment

This project is to show a progressive exploration of NgRx Component Store, as compared to using a BehaviourSubject to store local state in a view model object.

The progression is in the form of branches on this repo, as follows:

### [main](https://github.com/tomwhite007/ngrx-component-store-experiment)

The base branch contains an example app (Book App) using a BehaviourSubject to store local state in a view model object.

[Link to main branch](https://github.com/tomwhite007/ngrx-component-store-experiment)

### [feature/convert-to-ngrx-component-store](https://github.com/tomwhite007/ngrx-component-store-experiment/tree/feature/convert-to-ngrx-component-store)

The first feature branch converts the BehaviourSubject into Component Store, using direct commands to the NgRx lib.

It is pretty much the same amount of code as `main` branch, (maybe one line more), but now benefits from Type safety and fixed interface for the local state.

[Link to PR Feature/convert to ngrx component store #1](https://github.com/tomwhite007/ngrx-component-store-experiment/pull/1)

### [feature/factor-component-state-into-service](https://github.com/tomwhite007/ngrx-component-store-experiment/tree/feature/factor-component-state-into-service)

The second feature branch refactors the Component Store commands into a Component-provided service which behaves like a facade.

This is the recommended structure by NgRx team, for when your local state is complex. I think it's pretty much the best way to use it at all times.

The service extends the Component Store so that it doesn't require DI and reduces a little boilerplate.

[Link to PR Feature/convert to ngrx component store #1](https://github.com/tomwhite007/ngrx-component-store-experiment/pull/1)

## Links

https://ngrx.io/guide/component-store/usage

https://ngrx.io/guide/component-store/read#selecting-from-global-ngrxstore

## About

This project was generated using [Nx](https://nx.dev).
