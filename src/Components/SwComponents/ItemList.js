import React from "react";
import ItemList from "../ItemList/ItemList";
import WithData from "../hocHelper/WithData";
import WithSwapiServise from "../hocHelper/WithSwapiServise";
import widthChildFunction from "../hocHelper/WidthChildFunction";

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};
const mapPlanetToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};
const mapStarshipToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};


const renderName = (item) => item.name;
const ListWithChildren = widthChildFunction(ItemList, renderName);

const PersonList = WithSwapiServise(
  WithData(ListWithChildren), mapPersonMethodsToProps);
const PlanetList = WithSwapiServise(
  WithData(ListWithChildren), mapPlanetToProps);
const StarshipList = WithSwapiServise(
  WithData(ListWithChildren), mapStarshipToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};