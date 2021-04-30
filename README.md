# NgRx Component Store Experiment

This project is to show a two stage exploration of NgRx Component Store, as compared to using a BehaviourSubject to store local state in a view model object.

The demo code is in this [App](https://github.com/tomwhite007/ngrx-component-store-experiment/blob/original-version-using-behaviour-subjects/apps/playground/src/app/app.component.ts), inside a Nrwl Nx Workspace. I used Nx because it comes with an excellent schematic for scaffolding the global NgRx state - so I could make this demo quicker.

This branch contains an example app (Book App) using a BehaviourSubject to store local state in a view model object.

[Link to main branch](https://github.com/tomwhite007/ngrx-component-store-experiment)

## Links

https://ngrx.io/guide/component-store/usage

https://ngrx.io/guide/component-store/read#selecting-from-global-ngrxstore

## About

This project was generated using [Nx](https://nx.dev).

# ui-io-bus

Experiment into using @Input and @Output as a bus to reduce template footprint and make state composable

## Todo

1. Add readme comments
2. duplicate repo and Rename app

## Ideas

- Event Object - Class or Interface
  - Event defs like actions?
  - How else to strongly type?
- Unpacker for
  - inputsBus$
  - inputsBus - no stream
  - throw if no callback
- outputsBus handler
  - callback array
  - update observable
  - throw if no callback unless update observable is set
- Logger
  - Styled console logs
- RxJs operators
  - filter events
  - stream logger
- Filter in container
- Filter in presenter component
- Loopback helper
  - convert specified Output events to typed Inputs stream
