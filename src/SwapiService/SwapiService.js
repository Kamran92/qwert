class SwapiService {
  _apiBase = `https://swapi.co/api/`;
  _imgBase = `https://kosbe.ru/images/no_photo.jpg`;

  _getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Ошибка запроса ${url}`)
    }
    return await res.json();
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      img: this._imgBase,
      name: person.name,
      gender: person.gender,
      birthYear: person["birth_year"],
      eyeColor: person["eye_color"]
    }
  };

  _transformPlanet = (planet) => {
    const {name, population, rotation_period, diameter} = planet;
    const conditions = population === "unknown";
    const translationUnknown = conditions ? "неизвестно" : population;
    return {
      id: this._extractId(planet),
      img: this._imgBase,
      name: name,
      population: translationUnknown,
      rotationPeriod: rotation_period,
      diameter: diameter
    }
  };

  _transformStarships = (starships) => {
    return {
      id: this._extractId(starships),
      img: this._imgBase,
      name: starships.name,
      model: starships.model,
      manufacturer: starships.manufacturer,
      cost_in_credits: starships["cost_in_credits"],
      length: starships.length,
      crew: starships.crew,
      passengers: starships.passengers,
      cargo_capacity: starships["cargo_capacity"]
    }
  };

  getAllPeople = async () => {
    const res = await
      this._getResource(this._apiBase + `people/`);
    return res.results
      .map((item) => {
        return this._transformPerson(item)
      })
  };

  getPerson = async (id) => {
    const res = await
      this._getResource(this._apiBase + `people/${id}/`)
    return this._transformPerson(res)
  };

  getAllPlanets = async () => {
    const res = await
      this._getResource(this._apiBase + `planets/`);
    return res.results
      .map((item) => {
        return this._transformPlanet(item)
      })
  };

  getPlanet = async (id) => {
    const planet = await
      this._getResource(this._apiBase + `planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await
      this._getResource(this._apiBase + `starships/`);
    return res.results
      .map((item) => {
        return this._transformStarships(item)
      })
  };

  getStarship = async (id) => {
    const starship = await
      this._getResource(this._apiBase + `starships/${id}/`);
    return this._transformStarships(starship)
  }
}
export default SwapiService;