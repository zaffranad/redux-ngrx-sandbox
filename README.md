<div align="center">
<h1>React+TypeScript Cheatsheets</h1>

<a href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/issues/81">
  <img
    height="90"
    width="90"
    alt="react + ts logo"
    src="https://user-images.githubusercontent.com/6764957/53868378-2b51fc80-3fb3-11e9-9cee-0277efe8a927.png"
    align="left"
  />
</a>

<p>Cheatsheets for experienced React developers getting started with TypeScript</p>

[**Web docs**](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup) |
[中文翻译](https://github.com/fi3ework/blog/tree/master/react-typescript-cheatsheet-cn) |
[**Español**](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet-es) |
[**Português**](https://github.com/typescript-cheatsheets/react-pt) |
[Contribute!](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/CONTRIBUTING.md) |
[Ask!](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/issues/new/choose)

</div>

---

# ReduxNgrxSandbox

A redux sandbox project made with [NgRx Store](https://ngrx.io/) library.
As the word sandbox means, this project doesn't not have the purpose to be used in production or to be a starter project for a real one.

This means, no test, no optimizations, nothing... only some components, services and a Store hosting few datas.

## Angular

The app is made with Angular and can be run with:

    npm run start

This will start the server on port 4201 as configured in package.json.

    http://localhost:4201
    
## Redux

Redux is a design pattern first made for React but also compatible with Angular Apps.
NgRx Store is a lib made for that purpose.

please read: https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/


## Details

    src/app/shared/app.reducer.ts

Contains the declaration of all states used in the application

    src/app/layout

Contains the layout components used to build the application layout

    src/app/core
    src/app/core/data
    src/app/core/data/actions
    src/app/core/data/reducers

Applications Actions, Reducers and components used to manage reference datas such as Markets, Sectors, Stocks.

    src/app/core/portfolios
    src/app/core/portfolios/actions
    src/app/core/portfolios/reducers
    
Applications Actions, Reducers and components used to manage portfolios and positions.
