Codetitlan - The future blogging platform of the past.
======================================================
[![Build Status](https://travis-ci.org/bbaaxx/codetitlan-blog.svg?branch=master)](https://travis-ci.org/bbaaxx/codetitlan-blog) | [![Dependency Status](https://gemnasium.com/bbaaxx/codetitlan-blog.svg)](https://gemnasium.com/bbaaxx/codetitlan-blog) | [![wercker status](https://app.wercker.com/status/5e18081faf5b6d4ec208dc5a47591c23/s "wercker status")](https://app.wercker.com/project/bykey/5e18081faf5b6d4ec208dc5a47591c23)

An evolving full-stack javascript application platform (mainly for blogging) built with very good intentions and the usual stuff:

[Node](http://nodejs.org) + [Express](http://expressjs.com) + [Mongo](http://mongodb.org) + [Ember](http://emberjs.com) + [Gulp](http://gulp.js) + [Bootstrap](http://getbootstrap.com) + ... other great projects

>It is basically built on the shoulders of giants. - _Some Dude_

The platform will have a blogging application logic programmed out of the box but if you get a little understanding of what's going on with the code, it is possible to actually use it for pretty much any web application pattern.

## Current version

##### 0.2.0-Alpha_1
  * Basic server side functionality, it delivers the single page Ember app.
  * Basic passport auth on the server side
  * Testing harness (sounds nicer than suite) for the server side with mocha
  * Basic client side structure
  * ... lots and lots of scaffolding code

#### In the next release ...
  * End-to-end authentication with oAuth providers
  * Posts functionality
  * Administrative interface blueprint
  
#### In the near future (beta_1)...
  * ES6 Syntax support on the build system
  * Code richely documented in both english, spanish and probably french too
  * Build system for easy-cheesy deployment at Openshift, BlueMix and of course Heroku
  * Role-based auth
  * NPM distribution
  * ...more scaffolding code


## Install it, develop on it and use it

Soon to be available via NPM but for now, just clone the repo and:

    $ npm install
    $ npm start

And you are good to go.

There is no fancy CLI for the platform, but the structure of the app will hopefully guide you while we release a stable version that can be properly documented.

## Issues and contributing
Please feel free to open issues for questions related to the development, and improving of the platform but please excuse us if we cannot help too much with the deployment for now (until the build system is implemented in beta_1.

Pull requests will be reviewed fairly quick, specially if it includes tests.

## About the Codetitlan project

The Codetitlan platform relesed here, is part of an open effor to deliver information technology ready-to-use tools for researchers of non-technology related disciplines to help them improve the quality of their work by integrating these tools in their workflow/scope.

This open effort is also called Codetitlan and is going to be released very soon at: 
[Codetitlan.org](http://www.codetitlan.org).

##### What's with the name?
Codetitlan, from [_en. Code_] and the [_nah. \-titlan_] suffix from the Mesoamerican Nahuatl language which translates to "being in the middle of " or "being surrounded by", so Codetitlan would mean "To be in the middle of the code".

### Credits
This software could have not been possible without the knowledge and effort of of the people that is developing the [mean.io](http://mean.io) platform from which most of the server code for this repo is inspired.

### Licence
    
Released under the [MIT License](http://opensource.org/licenses/MIT)

>Copyright (C) 2014 Codetitlan.org

>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
