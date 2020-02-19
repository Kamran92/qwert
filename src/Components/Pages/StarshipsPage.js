import React, {Component} from "react";
import {StarshipList} from "../SwComponents/ItemList";
import {withRouter} from "react-router-dom";

const StarshipsPage = ({history}) => {
  return (
    <StarshipList
      onItemSelected={(itemId) => {
        history.push(itemId)
      }}/>
  )
};

export default withRouter(StarshipsPage);