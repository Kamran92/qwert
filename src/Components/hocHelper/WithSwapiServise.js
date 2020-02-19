import React from "react";
import {SwapiServiceConsumer} from "../SwapiServiceContext/SwapiServiceContext";

const WithSwapiServise = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);
            return (
              <Wrapped {...props} {...serviceProps}/>
            )
          }
        }
      </SwapiServiceConsumer>
    )
  }
};

export default WithSwapiServise;