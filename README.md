## DynamicForms

## Basic Overview

Built on react, redux with redux forms integration, these forms take in data from api (MockyApi in this case) and generates forms based on how the user interacts with them and the cumulative form data is submitted via a POST request (reqres in this case)

Complete Webpack integration with babel loaders processing custom css and js modules and transpiling them.

Redux dev tools are still enabled in this, mapped to the store so that dispached actions can be tracked (install redux dev tools plugin [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en))

## Installation Instructions

=========================

## Initial Project Setup

Project Initialisation involves standard procedures listed below

Clone the repo

      git clone https://github.com/harshattray/dynamicforms.git

Install npm modules

      npm install --save

Install dev dependencies

      npm install --save-dev

## Run the project

      npm start - fires up the webpack dev server with hot module replacement on port 3000
      npm run build - runs the production setup with a clean purge
      npm run  deploy - runs build and commit deploy, creates a githubpages branch and deploys to github pages (make sure all your api calls are https)

## Run the Test Cases

      npm run test - runs the test cases

## Dependencies

* [react](https://github.com/facebook/react):
* [redux](https://github.com/reduxjs/redux) : 3.7.2
* [react-redux](https://github.com/reduxjs/redux) : 5.0.6
* [redux-form](https://github.com/erikras/redux-form) : ^7.4.2
* [redux-thunk](https://github.com/reduxjs/redux-thunk) : 2.2.0
* [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React) :^0.82.5
* [axios](https://github.com/mzabriskie/axios) : 0.16.2
* [webpack](https://github.com/webpack/webpack) : 3.5.6
* [enzyme](https://github.com/airbnb/enzyme) : ^3.6.0
