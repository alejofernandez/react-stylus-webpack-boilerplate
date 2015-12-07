## webtask-api-boilerplate

This is a very simple opinionated seed/skeleton project to demo how to build an API and bundle it into a single file, to run it locally or host it in a `webtask.io` container.

### Install global modules
* `npm install -g gulp`
* `npm install -g wt-cli`

### Install local modules
* `npm install`

### Create your webtask profile and configure your token
* `wt init` => then follow instructions
* `wt profile get default` => copy the token

<img width="450" alt="default profile" src="https://cloud.githubusercontent.com/assets/1288192/11450091/13a63444-956f-11e5-8f8a-7d811d507fba.png">

* open `./config/webtask.config.js` and configure the `webtaskToken` property with your token

### To run the API locally
* `gulp run`
  or
* `gulp debug`

### To deploy the API as a webtask
* `gulp deployWebtask`

### Opinionated API design
This boilerplate uses `webpack` for bundling the API and `gulp` for build/deploy automation.
API source code was written in `ES6`, it uses `Express.js` for the web stack and `MongoDb` as repository.

This API tries to implement a simplified version of the REST design pattern, following the guidelines described by [DDD](https://en.wikipedia.org/wiki/Domain-driven_design).
The communication flow between different layers of the API is:
```
{Http requests} => [Controller] => [Service] => [Repository] => {database}
```

### Layer responsibilities in this API
* __Controller__: handles http methods dispatching operations to the service layer and it does the translation between requests/responses and domain model entities.
* __Service__: implements the business logic of the domain model.
* __Repository__: handles the persistency of the domain model.

### How to hack this repo
1. [Edit your configuration files for setting up secrets and parameters.](../../tree/master/config)
2. [Create a route installers for your API and define all routes you want to implement.](../../tree/master/src/routes)
3. [Create a controller for handling your routes.](../../tree/master/src/controllers)
4. [Create a service for implementing your business logic.](../../tree/master/src/services)
5. [Create a repository for storing the domain model.](../../tree/master/src/repositories)
6. TBD: Add unit tests for your controllers and services.
7. TBD: Add integration tests for your repositories.
8. [Run/debug your api locally.](../../blob/master/running-locally.md)
9. [Deploy your api to `webtask.io`.](../../blob/master/working-with-webtasks.md)

### Roadmap
* Add tests and a gulp task for running them and a configuration file for tests
* Add an auto reload task for local development
* Add an auto re-deploy task and stream logs to the console for 100% remote development
* Validate required modules against `https://tehsis.github.io/webtaskio-canirequire/` as a part of the build
* Refactor the `gulpfile` into different plugins for future publishing

![deploy](https://cloud.githubusercontent.com/assets/1288192/11413849/dbc4d0d8-93cc-11e5-8662-6042d6ed58ac.gif)
