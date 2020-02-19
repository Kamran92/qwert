import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import React from "react";
import WithSwapiServise from "../hocHelper/WithSwapiServise";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Пол"/>
      <Record field="eyeColor" label="Цвет глаз"/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson
  }
};


export default WithSwapiServise(PersonDetails, mapMethodsToProps);