import React, {Component} from "react";
import RandomPlanet from "./Components/RandomPlanet/RandomPlanet";
import Header from "./Components/Header/Header";
import ErrorBoundry from "./Components/ErrorBoundry/ErrorBoundry";
import {SwapiServiceProvider} from "./Components/SwapiServiceContext/SwapiServiceContext"
import SwapiService from "./SwapiService/SwapiService";
import DummySwapiService from "./SwapiService/dummy-swapi-service";
import PeoplePage from "./Components/Pages/PeoplePage";
import PlanetsPage from "./Components/Pages/PlanetsPage";
import StarshipsPage from "./Components/Pages/StarshipsPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StarshipDetails from "./Components/SwComponents/StarshipDetails";


class App extends Component {
  constructor(props) {
    super(props);
    this.swapiService = new SwapiService;
  }

  render() {
    return (
      <div className="stardb-app">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapiService}>
            <BrowserRouter>
              <Header/>
              <RandomPlanet/>
              <Switch>
                <Route path="/"
                       render={() => <h2>Добро пожаловать Star-DB</h2>}
                       exact
                />
                <Route path="/people/:id?" component={PeoplePage}/>
                <Route path="/planets" component={PlanetsPage}/>
                <Route path="/starhips"
                       component={StarshipsPage}
                       exact
                />
                <Route path="/starhips/:id"
                       render={({match}) => {
                         const {id}=match.params;
                         return <StarshipDetails itemId={id}/>
                       }}/>
                <Route render={()=><h2>Страница не найденна</h2>}/>
              </Switch>
            </BrowserRouter>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    )
  }
};

export default App;