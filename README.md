# node framework (VC)

This is a node framework on top of Express. 

Prototyping a fully-pedge MVC similar to popular MVCs out 
there like (Ruby on Rails, Laravel, Django, etc).


## Getting Started

Currently there's no ORM yet to handle the model so this is just **View* & *Controller**.

You can build a website out of this framework. 

Still continuing the development for the Model.


### Prerequisites

Download & install node.js for Mac & Windows:
- https://nodejs.org/en/download/

Install node.js for Ubuntu:
```
$ sudo apt-get update
$ sudo apt-get install nodejs
```

You also need to download Yarn for managing node packages:
- https://yarnpkg.com/lang/en/docs/install/#windows-tab

### Installing
1. Clone this repository.
If you're a non-git user [download this as zip file](https://github.com/moseslucas/node-view-controller/archive/master.zip)

2. Navigate to the directory using your Terminal or CMD.
Example:
```
$ cd /Desktop/node-view-controller
```

3. Now, there are node packages declared in the file `package.json`. 
These are plugins or known as gems in Ruby on Rails.
We need to install these node packages first by running the commad:

```
$ yarn
```

4. After installing the plugins we can start the server by running the commad:
```
$ yarn start
```
then open your browser and navigate to `localhost:3000` or `127.0.0.1:3000`
Try also to navigate to `localhost:3000/dogs`
*ctrl + c to stop the server*

### How it works
1. All commands such as starting the server is stored in `package.json`
```
"scripts" : { 
 "start" : "node ./bin/www"
}
```
so when we run `yarn start` it basically runs the file `www` inside the folder `/bin/`

2. The server is in `/bin/www`. And the configuration of express is `app.js`in the root directory. 
We don't do anything to these files.

3. Routes is in `/config/routes.js`. 
4. Controllers are in `/controllers/`
5. Views are in `/views/`. 
Template engine used here is [pug](https://pugjs.org/language/code.html), 
but we can use [ejs](http://www.embeddedjs.com/) in the future release.


## Sample Adding a new Controller & View

Let's create a controller called **sample**

so when we navigate to `localhost:3000/sample`

we render the file `/views/sample/index`

1. Adding a view:
create a folder in `/views/` called **sample**.
and create a file called: `index.pug`

```
  // inside /views/sample/index.pug
  
  h1 Hello World (Porkchop Index View)
```

2. Adding a new controller:
create a new file in `/controllers` called: `sample.js`
```
  // controllers/sample.js

  //  we export this sample controller so that we can import it in the router
  
  module.exports = {
  
    // index here is what we call action
    // we can add more actions like 'create', 'update', 'show', 'delete', 'etc'
    
    index (req, res) {
    
      // we render what view we want
      // in here i want to render the index.pug view file
      
      res.render('sample/index')
    }
  }
```

3. Adding a route:
open the file `/config/routes.js`.
```
  // We import the porkchop controller
  const sample = require('../controllers/sample')
  
  // let's create the route for porkchop
  // we say here that when user go to localhost:3000/sample
  // the router will call the file /controllers/sample.js
  // and run the index action
  router.get('/sample', sample.index)

```

## Built With

* [NodeJS](https://nodejs.org/en/) - Our backend is 100% Javascript
* [Express](https://expressjs.com/) - We use this for the server & routing.

## Authors

* **Moses Lucas**  *

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

