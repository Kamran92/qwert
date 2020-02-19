import React, {Component, Fragment} from "react";
import "./RandomPlanet.css";
import SwapiService from "../../SwapiService/SwapiService";
import Spinner from "../Spinner/spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class RandomPlanet extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();

    this.state = {
      planet: {},
      loading: true,
      error: false
    };

    this.onPlanetLoaded = (planet) => {
      this.setState(() => {
        return {
          planet: planet,
          loading: false,
          error: false
        }
      })
    };
    this.onError = (err) => {
      this.setState(() => {
        return {
          error: true,
          loading: false
        }
      })
    };
    this.updatePlanet = () => {
      const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const num = randomNum(1, 10)
      this.swapiService.getPlanet(num)
        .then((planet) => this.onPlanetLoaded(planet))
        .catch(this.onError);
    };
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    const {planet, loading, error} = this.state;
    const {
      img, name, population, rotationPeriod, diameter
    } = planet;
    const randomPlanet = (
      <Fragment>
        <img className="planet-image" src={img} alt="Фото платеты"/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Численность населения:</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Период врaщения:</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Диаметер:</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </Fragment>
    );
    const errorIndicator = error ? <ErrorIndicator/> : null;
    const loadingIndicator = loading ? <Spinner/> : null;
    const conditions = !errorIndicator && !loadingIndicator;
    const result = conditions ? randomPlanet : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorIndicator}
        {loadingIndicator}
        {result}
      </div>
    )
  }
}


export default RandomPlanet;