import createHashHistory from 'history/lib/createHashHistory';
import React             from 'react';
import ReactDOM          from 'react-dom';
import Router            from 'react-router';
import routes            from './routes';

let history = createHashHistory({
  queryKey: false
});

ReactDOM.render(<Router history={history}>{routes}</Router>, document.body)
