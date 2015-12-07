## How to create route installers for your API

Use the `index.js` file to require and mount all your route installers on root level routes.

```javascript
routes.use('/todos', todosInstaller());
```

Your API route be located at:
* locally: `http://localhost:{localport}/{baseUri}/todos`
* remotely: `https://webtask.it.auth0.com/api/run/{webtaskAccountName}/{webtaskName}/{baseUri}/todos`

### Route installers
Route installers responsibilities are:
* Mount controllers for each route
* Inject dependencies to controllers, services and repositories (since there is no DI mechanism)

This is how a route installer looks like:
```javascript
'use strict';
/*
 *  Route handler for Todos microservice
 */
import express        from 'express';
import TodoController from '../controllers/TodoController';
import TodoModel      from '../models/TodoModel';
import TodoRepository from '../repositories/TodoRepository';
import TodoService    from '../services/TodoService';

export default () => {
  let route      = express.Router();
  let repository = new TodoRepository({Model: TodoModel});
  let service    = new TodoService   ({repository: repository});
  let controller = new TodoController({Model: TodoModel, service: service});

  route.get   ('/',    controller.getAll);
  route.get   ('/:id', controller.get);
  route.post  ('/',    controller.post);
  route.put   ('/:id', controller.put);
  route.patch ('/:id', controller.patch);
  route.delete('/:id', controller.del);

	return route;
}
```
