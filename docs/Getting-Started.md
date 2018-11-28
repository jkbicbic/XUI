[Back to Table of Contents](https://github.com/jkbicbic/XUI)

# Getting Started
----

In order for you to use the different `classes` of this framework, you need to have NPM and Webpack installed

#### NPM

to install node go to this [Site](https://nodejs.org/en/) and once installed go to your project folder and run the following commands in your shell
```SHELL
$ npm init
```
fill the necessary fields or press `enter` if you are not sure 

# Webpack

To install webpack run the following commands in your shell

```SHELL
$ npm install webpack webpack-cli style-loader css-loader node-sass --save-dev
```
Your project folder should contain `package-lock.json` and `package.json` after.

Create a file called `webpack.config.json` in the root directory and copy the following snippet

```Javascript
module.exports = {
  mode: 'development',
  entry: './webpack.js',
  output: {
    filename: 'webpack.bundle.js',
    path: __dirname + '/app/data/assets'
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] }
    ]
  }
};
```

next create a file `webpack.js` in the root directory that contains the following

```
import './scss/main.scss'
```
this is needed by the `webpack.config.js` then paste this `<script>` tag in your `base.html` file

```HTML
<script src="/assets/webpack.bundle.js">
```

and lastly run the following command in your shell

```SHELL
$ webpack --watch
```

you are good to go! you can use the classes and create new styles with `scss`

[Next: Global CSS](https://github.com/jkbicbic/XUI/blob/master/docs/Global-CSS.md#Global-CSS)
