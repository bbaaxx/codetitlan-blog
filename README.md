Codetitlan - The future blogging platform of the past.
======================================================
[![Build Status](https://travis-ci.org/bbaaxx/codetitlan-blog.svg?branch=master)](https://travis-ci.org/bbaaxx/codetitlan-blog) | [![Dependency Status](https://gemnasium.com/bbaaxx/codetitlan-blog.svg)](https://gemnasium.com/bbaaxx/codetitlan-blog) | [![wercker status](https://app.wercker.com/status/5e18081faf5b6d4ec208dc5a47591c23/s "wercker status")](https://app.wercker.com/project/bykey/5e18081faf5b6d4ec208dc5a47591c23) | [![Code Climate](https://codeclimate.com/github/bbaaxx/codetitlan-blog.png)](https://codeclimate.com/github/bbaaxx/codetitlan-blog)

An evolving full-stack javascript application platform (mainly for blogging) built with very good intentions and the usual stuff:

[Node](http://nodejs.org) + [Express](http://expressjs.com) + [Mongo](http://mongodb.org) + [Ember](http://emberjs.com) + [Gulp](http://gulp.js) + [Bootstrap](http://getbootstrap.com) + ... other great projects

>It is basically built on the shoulders of giants. - _Some Dude_

The platform will have a blogging application logic programmed out of the box but if you get a little understanding of what's going on with the code, it is possible to actually use it for pretty much any web application pattern.

Stating on Alpha 0.3.0 you can easily deploy it to a free Openshift instance with a few commands.

## Current version

##### 0.3.0-Alpha
  * Basic and messy but functional build system
  * Easy-cheesy deployment for Openshift (read Openshift section)
  * Minor bug fixes on the server code

#### In the next release ...
  * Fully functional client side auth
  * Posts functionality
  
#### In the near future (beta_1)...
  * Administrative interface
  * End-to-end authentication with oAuth providers
  * ES6 Syntax support on the build system
  * Code richely documented in both english, spanish and probably french too
  * Easy-cheesy deployment for BlueMix and Heroku
  * Role-based auth
  * NPM distribution
  * ...more scaffolding code


## Super quick guide

Clone the repo and:

    $ npm install && bower install
    $ gulp

And you are good to go for local development.

No fancy CLI on this one, but follow the comments on the code and they will hopefully guide you while we release a stable version and can focus on documentation.

### Deploying to Openshift
Due to some [frankly unexplainable configuration](https://github.com/wshearn/openshift-origin-cartridge-nodejs/commit/8de18f9962b9b39d5bf46192707bc91879853f6d) on the "official" Nodejs Cartdridges at Openshift, you need to create your app using a custom one, so get your free account, install the [OpenShift Client Tools](https://www.openshift.com/developers/rhc-client-tools-install) and then go like:

    $ rhc create-app <APP_NAME> "http://cartreflect-claytondev.rhcloud.com/reflect?github=wshearn/openshift-origin-cartridge-nodejs" mongodb-2.4 NPM_CONFIG_PRODUCTION="true"

Once that command is done, check the output for your *git remote* uri and paste it somewhere, then : 

    $ cd APP_NAME
    $ git remote rm origin
    $ git remote add origin https://github.com/bbaaxx/codetitlan-blog
    $ git remote add openshift <paste_your_openshift_git_remote_here>
    $ git fetch
    $ git reset --hard origin/master
    $ git push openshift master --force

And that's it, you can go to your openshift app url and see the welcome page.

If you are curious, you might want to know that the package is [patched with this](https://github.com/ramr/nodejs-custom-version-openshift.git).

## Quick Guide

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
