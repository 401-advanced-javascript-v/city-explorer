![CF](http://i.imgur.com/7v5ASc8.png) PROJECT
=================================================

<!-- LINKS -->
<!-- Replace the link for each in brackets below -->
<!-- PR (working into submission) -->
[1]: http://xyz.com
[2]: https://city-explorer-backend.herokuapp.com/
<!-- https://obscure-bayou-17929.herokuapp.com/ -->
<!-- front-end -->
[3]: https://city-explorer.netlify.com/
<!-- swagger -->

## City Explorer

### Author: Vanessa

### Links and Resources
* [provided back-end server]
* [deployed front-end app (Netlify)

<!-- #### Documentation -->
<!-- * [Styleguidist]() -->

#### `index.js`
Entry point for the React application. Requires React DOM to render the `App` component into the `#root` `<div>`.

#### `app.js`
React class component. Manages state of application and renders imported components. Passes down applicable state to some components. Passes down `error` state as `props.children` to the `Error` component. Imports functions from `fetcher.js` module.

#### `mainpage.js`


### Setup
* `npm i`
  - installs app dependencies
* `GOOGLE_MAPS_API_KEY` 
  - unique API key for Google's geolocation service
* `__API_URL__`
  - URL to the running back-end City Explorer server


#### Running the app
* [See `create-react-app` docs](https://facebook.github.io/create-react-app/docs/getting-started)
* `npm run start`
  - runs the app in development mode; open http://localhost:3000 to view it in the browser
* `npm run build`
  - builds the app in a `build/` folder
  
<!-- #### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* What assertions were made?
* What assertions need to be / should be made? -->



