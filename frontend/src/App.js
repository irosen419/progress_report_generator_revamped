import { Route, Switch } from 'react-router-dom'
import Dashboard from './Containers/Dashboard';
import Login from './Containers/Login'
import Signup from './Containers/Signup';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/signup" render={() => <Signup />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
      </Switch>
    </div>
  );
}

export default App;
