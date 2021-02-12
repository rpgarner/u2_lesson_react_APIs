# React and Api's

![](https://madooei.github.io/cs421_sp20_homepage/assets/client-server-1.png)

## Overview

In this lesson, we'll be learning how to utilize 3rd party restful api's within our react apps. We'll cover everything from installing necessary dependencies, setting up secret variables/environment variables and setting up files to better manage shared code.

## What We'll Be Building

![preview](images/preview.png)

## Getting Started

- Fork and Clone
- Cd into this lab and `npm install`
- `npm start` to verify your setup steps

## Refresher

What is an api? An api is an application programming interface. Api's allow us to interact with 3rd party libraries and data sources in order to build applications. There are various kinds of api's. The api we'll be using today is an example of a `Restful` api. In other words, we request some kind of information from this external data source and it provides us, the `client` with some information as a response.

## Getting Credentials For Our Api

The api we'll be using today is the `TMDB` api. It's an online movie database that gives us information about movies and tv shows.

This is api is a secured api, meaning that we need some kind of authorization token in order to request information from it.

Head over to this **[LINK](https://www.themoviedb.org/)** and sign up for an account.

Once you've signed up, log in to your account and select your profile on the top right and select settings. Navigate to the `api` section on the left hand side and follow the instructions provided.

Once you've successfully followed these steps, locate the `Api Read Access Token`. We'll be using this token to interact with the api.

## Preparing Our App

Now that we have an access token, we can get started with setting up our app.

### Installing Axios

We'll need axios to perform our api requests. To install axios, run `npm install axios` in this directory.

### Setting Global Variables

We'll now set up some global variables for axios. The base url for the api will always be the same. The only thing that will change is the final endpoint for resources.

In the `src` directory, create a file called `globals.js`.

Add the following code to the file:

```js
export const axiosConfig = {
  headers: { Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}` }
}

export const BASE_URL = 'https://api.themoviedb.org/3'

export const POSTER_PATH = 'https://image.tmdb.org/t/p/original'
```

The `axiosConfig` variable will be used to provide our access token on each request via the request headers. Our api's base url will never change so we'll store it in the `BASE_URL` variable. And finally, in order to view the provided images, we'll need the url stored in the `POSTER_PATH` variable in order to complete the image urls.

### Setting Up Our Environment Variables

Environment variables are pieces of information stored in a file that **SHOULD NOT** get pushed to github. We store sensitive information like credentials or production app information here.

To set this up, create a `.env` file in the root directory of this lab. Once created, it should be on the same folder level as your `package.json`.

We'll now add an environment variable in the `.env` file. Add the following:

```sh
REACT_APP_TMDB_KEY=<Your secret token>
```

**Note: All react environment variables must be prepended with `REACT_APP`**

**Whenever you make a change to your `.env` file, you must restart your react server.**

Finally let's make sure our `.env` file stays a secret. Add `.env` to your `.gitignore`.

## Implementing Our Api Calls

In your `App.js`, let's import axios:

```js
import axios from 'axios'
```

We'll use `axios` to make our api request. In which lifecycle method should we perform our request?

<details closed>
  <summary>Hint</summary>
   <code>componentDidMount()</code>
</details>
