import { Route, Switch } from 'react-router-dom'
import Dashboard from './Containers/Dashboard';
import Login from './Containers/Login'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
      </Switch>
    </div>
  );
}

export default App;
