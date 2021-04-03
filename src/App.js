import './App.css';
import Template from './template';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Table from './table';
import Details from './details';
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route exact path="/">
            <Template/>
          </Route>
          <Route path="/table">
            <Table/>
          </Route>
          <Route path="/details">
            <Details/>
          </Route>
          
        </Switch>
      </div>
    </Router>

  );
}

export default App;
 