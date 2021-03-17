import './App.scss';
import { MainPage } from './pages/main/MainPage';
import { CountryPage } from './pages/country/CountryPage';
import { Route, Switch } from 'react-router';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('ru');

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => <MainPage lang={lang} setLang={setLang} />}
      />
      <Route path="/:name/:id?/:lang?" component={CountryPage} />
    </Switch>
  );
}

export default App;
