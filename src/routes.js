import { Route, Switch, Redirect } from 'react-router-dom';

import Books from './pages/Books';
import AboutBook from './pages/AboutBook';
import Settings from './pages/Settings';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="dashboard" />
      </Route>
      <Route exact path="/books" component={Books} />
      <Route path="/books/:id/:author/:title/" component={AboutBook} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
}
