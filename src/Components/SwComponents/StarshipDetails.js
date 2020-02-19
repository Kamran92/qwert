import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import React from "react";
import WithSwapiServise from "../hocHelper/WithSwapiServise";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Модель:"/>
      <Record field="length" label="Длинна:"/>
      <Record field="cost_in_credits" label="Цена:"/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship
  }
};

export default WithSwapiServise(StarshipDetails, mapMethodsToProps);