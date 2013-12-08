# ProgressBars

## Dev system setup

### Step 1 - Installing tools

If you have NodeJS, Grunt & Bower skip to step2.

Please download [NodeJS](http://nodejs.org/) to get started.

Once node is installed you will need to run the below command to install Grunt our task runner and Bower our client side dependency manager.

`sudo npm install -g grunt-cli bower`

### Step 2 - Automagic dependencies

Once the tools are installed run the below command from the root production directory to install the project's dev & production dependencies.

`npm install && bower install`

### Step 3 - Build and run

To compile the code so it's ready for deployment:

`grunt build`

This will create a 'dist' folder with the deployable production code.

To run a basic connect development web server and automatically load up your web browser:

`grunt server`

To run the tests (requires Firefox)

`grunt test`

