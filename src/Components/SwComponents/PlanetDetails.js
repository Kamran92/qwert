import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import React from "react";
import WithSwapiServise from "../hocHelper/WithSwapiServise";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Численность населения:"/>
      <Record field="rotationPeriod" label="Период врaщения:"/>
      <Record field="diameter" label="Диаметер:"/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet
  }
};

export default WithSwapiServise(PlanetDetails, mapMethodsToProps);