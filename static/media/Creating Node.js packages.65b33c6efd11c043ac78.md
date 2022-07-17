# Creating Node.js packages

Hey Everyone!

Sometimes, on cold days, I love to wrap myself up in  blanket and just enjoy a cup of hot coffee. This was my weird attempt to introduce packaging softwares to you.

Today we'll be wrapping up a set of code inside a package and publish it to `npm`. ~~It still won't get any coffee to drink.~~ 

Before going into packaging and nodejs and npm let us first understand the requirement of packaging. 

## What is packaging?

Let us consider a case where you have created a software to generate random numbers (yay!). It is more efficient than the built-in `Math.random` function and you wish for others to be able to use it. 

How do you plan to share it? 

The simple solution is packaging. 

Packaging a software refers to bundling all the required code and external resources for our designed software with the configuration to set it up and then distribute to its designated distribution network.

Not all frameworks and languages have a distribution network, but in our case we are considering `node.js` so its package manager is called *Node Package Manager* or `npm` (not a very creative name eh?).

Another common concept with `node.js` is creating *webpacks* for our software for even simpler distribution. 

Javascript is a very robust language and can basically run on anything that supports running a browser ~~(even a smart refrigerator lol)~~. However, `node.js` cannot be run everywhere and using it package manager requires setting it up. ~~(smart refrigerators do not come bundled with nodejs sadly)~~. So in order to distribute them easily, `Webpack` bundles our set of code into static `javascript`, `css` and `HTML`.  

## How do we create a package in Node.js?

Creating a package in `Node.js` is quite simple. Everything in a `Node.js` based project is rooted at its `package.json` file. In it, you define the name, version, dependencies, set of commands for running, building and testing (maybe deployment as well). Another great thing is that it also allows you to define an entry point for your software. 

By default it is considered to be `index.js`.

To walk through the template creator for `package.json`, go to the root directory of your project and run `npm init`, this will ask you a bunch of inputs regarding your project, and at the end of it create a `package.json` file based on them.

Now that we have set up our `package.json` file,  we'll go on ahead to write our code. 

In your entry javascript file (I'll consider `index.js`) we can add our random function to the `exports` object. Doing that, the function's scope would be globally visible.

```javascript
exports.ourRandomFunction = function() {
    ...
    return randomNumber;
}
```

That is all we are required to do in order to create a software that can be published. 

To publish our software, in the root directory of our project (which contains the `package.json` file),

1. run `npm publish` if you want a private package,

2. run `npm publish --access public` to grant it a public visiblity scope.

Now that we have published our package, to use it we can simply create a new `node.js` project using `npm init` somewhere, lets call it `test-random-number`.

Now inside `test-random-number` we must first install our published software. Lets say we named our published module as `cool-random-numbers`, then within the root folder of `test-random-number` we can simply run `npm install cool-random-numbers` to install our needed software into the new project.

After that within our `javascript` file, we can use our function `ourRandomFunction` as follows,

```javascript
...
const coolNums = require("cool-random-numbers");
...

var randomNumber = coolNums.ourRandomFunction()
console.log(`Our new random number is ${randomNumber}`)
...
```

Due to the ease of distribution and usage of packages in `node.js`, it driven by the community to the most extent and is filled with packages that ease up our requirements (of course using a large amount of external resources would make our package slower). 

Similarly the other notable package distributors that I like are `golang` which uses `github` itself to distrbute its packages so to import them such as `import "github.com/abc/xyz"` and thats it!

Compared to all this, `python`'s `pip` is one of the easiest package manager to use.

Fun fact the term `pip` stands for Pip Installs Packages which is actually a Recursive Acronym ~~("Pip Installs Packages" Installs Packages?)~~

Let's meet another day ~~and have a sword fight~~.
