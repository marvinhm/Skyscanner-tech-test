# SkyscannerJS

 A basic flight results site to showing flight prices.

----

* Your solution looks like the provided [design](#design).

----

## Task

- Fetch flight results from the provided `flights.json` and format them into client readable results.

- Use the returned data to display a page of results that matches the given design.

## Design

We've provided a [design](./designs/) for small-screens (480px). Don't worry about tackling larger breakpoints, but **please make sure your solution looks good at 480px in portrait orientation**.

The design shows a look and feel defined in our [styleguide](https://backpack.github.io/). Feel free to import our React components into your project, or lift colours and things directly from the styleguide pages. We also have some auto-generated [sassdoc](https://backpack.github.io/sassdoc/) that may help.

**NB:** You don't have to use our styleguide or our components -- picking colours from the image and rolling your own css to save time is absolutely fine.

For the airline logos, insert the airline id to the following url: `https://logos.skyscnr.com/images/airlines/favicon/{id}.png`

## Tech

[React](https://facebook.github.io/react/).
[Parcel] - Web application bundler
[Cypress] - End to end testing
[Materialize] - For styling

We've set you up with a build based on [our custom fork](https://backpack.github.io/using/backpack-react-scripts) of Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).


## Flight results

The provided `flights` `json` will return two collections of different items:

* **Itineraries** - These are the containers for your trips, tying together **Legs**, and **prices**. Prices are offered by an **agent** - an airline or travel agent.

* **Legs** - These are journeys (outbound, return) with **duration**, **stops** and **airlines**.

A good structure to represent trip options would be hierarchical:

```
Itineraries
  Legs
```

## Running the project

To startup the frontend client run the following command.

* `npm start` - This will start the application for development
* `npm run build` - Will create a production optimised build
* `npm test` - Will run the front end tests
* `npm run lint` - Will run the code through our linting rules

