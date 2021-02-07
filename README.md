# Redux-Pattern-Angular-App

My realization and learning reactive way to know how to build and use the **redux pattern** in a angular app.
<br>
NOTE: I am learning stuffs for a build. New to StoreUtility and global state management in angular app.

<br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

![NGXS-STORE-LOGO](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-L9CoGJCq3UCfKJ7RCUg%2F-Lqo8CEiTGbFfHN-MPem%2F-Lqo8Eji2N8XvyACYQ-W%2Flogo.png?generation=1570685386501621&alt=media)
<br>
(source: https://www.ngxs.io/)

<hr>

## What is NGXS❓

NGXS is a state management pattern + library for Angular. It acts as a single source of truth for your application's state, providing simple rules for predictable state mutations.
NGXS is modeled after the CQRS pattern popularly implemented in libraries like Redux and NgRx but reduces boilerplate by using modern TypeScript features such as classes and decorators.

## NGXS Concept: [NGXS Concept](https://www.ngxs.io/concepts)

There are 4 major concepts to NGXS.
Store: Global state container, action dispatcher and selector.

**Actions:** Class describing the action to take and its associated metadata

**State:** Class definition of the state

**Selects:** State slice selectors
These concepts create a circular control flow traveling from a component dispatching an action, to a store reacting to the action, back to the component through a state select.

# Easy Diagramatic View - [LoginRadius](https://www.loginradius.com/blog/async/angular-state-management-with-ngxs/)

This source really helped me to understand the data flow and know the core points of redux state-management.
![FLOW-DOM-TREE-UPDATION](https://www.loginradius.com/blog/async/static/e7078db45932adcc702097caf1919a23/e5715/redux.png)

## The Global Storage

The store is a global state manager that dispatches actions your state containers listen to and provides a way to select data slices out from the global state.

## Angular State Management With NGXS

NGXS is a state management pattern + library for Angular. It acts as a single source of truth for your application's state, providing simple rules.

![FLOW-DIAGRAM-NGXS-UTILIFY](https://www.loginradius.com/blog/async/static/11800c1071c0ff7f8e9b3161611001aa/03979/title-image.png)
(Source: https://www.loginradius.com/blog/async/angular-state-management-with-ngxs/)

## Directories and Flow of Reducer-Action:

Mainly reducers take 2 params

```ts
function reducer(state:State<any>, actions: enum[]) : State<any> { ... }
```

Any action contains 2 things in it.

1. **type**: SwitchCase to determine which action is requested to be execute...
2. **Payload**: data which we are going to send as overhead to the performed action.

## Service Injection: Providers

- [Http.Service.ts](https://github.com/sounishnath003/Redux-pattern-angular-app/blob/master/src/app/services/http.service.ts) - Quick abstractions of HttpClientModule.

- [Api.Service.ts](https://github.com/sounishnath003/Redux-pattern-angular-app/blob/master/src/app/services/api.service.ts) - The kind of[ API ](https://www.reqres.in) i am using just to have dummy data.

## Custom Pipe: [Guide For Pipe](https://angular.io/guide/pipes)

Pipes are a useful feature in Angular. They are a simple way to transform values in an Angular template. ... A pipe takes in a value or values and then returns a value. This is great for simple transformations on data but it can also be used in other unique ways.

<br>

## Design System - Angular Material

**Angular Material Module** UI component infrastructure and Material Design components for mobile and desktop Angular web applications.
<br>
For High **Quality**, **Versatile**, **Frictionless** and speedy implementions of building UI for your angular app.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
