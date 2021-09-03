import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import InfosU from './pages/InfosU';
import Member from './pages/Member';
import Contact from './pages/Contact';

function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/history" exact component={History}/>
          <Route path="/infos utiles" exact component={InfosU}/>
          <Route path="/membre" exact component={Member}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </BrowserRouter>
    );
}

export default App;