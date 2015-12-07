import React                        from 'react';
import {IndexRoute, Route}          from 'react-router';
import {App, Home, About, NotFound} from './containers';

export default (
  <Route path="/" component={App}>
    { /* main route */ }
    <IndexRoute component={Home}/>

    { /* routes */ }
    <Route path="about" component={About}/>

    { /* catch all route */ }
    <Route path="*" component={NotFound} />
  </Route>
);
