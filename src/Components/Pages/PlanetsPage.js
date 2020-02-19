import React, {Component} from "react";
import {PlanetList} from "../SwComponents/ItemList";
import Row from "../Row/Row";
import PlanetDetails from "../SwComponents/PlanetDetails";

class PlanetsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedItem: "2"
    };

    this.onItemSelected = (selectedItem) => {
      this.setState({selectedItem})
    }
  }


  render() {
    const {selectedItem} = this.state;
    return(
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected}/>}
        right={<PlanetDetails itemId={selectedItem}/>}
      />
    )
  }
}

export default PlanetsPage;