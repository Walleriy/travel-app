import './App.scss';
import { MainPage } from './pages/main/MainPage';
import { CountryPage } from './pages/country/CountryPage';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/:name" component={CountryPage} />
    </Switch>
  );
}

export default App;
