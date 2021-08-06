import { Route, Switch, Redirect } from 'react-router-dom';

import Books from './pages/Books';
import Settings from './pages/Settings';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="dashboard" />
      </Route>
      <Route path="/books" component={Books} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
}
