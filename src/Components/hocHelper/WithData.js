import React, {Component} from "react";
import Spinner from "../Spinner/spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const WithData = (View) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        loading: true,
        error: false
      };
    }

    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          })
        })
        .catch(()=>{
          this.setState({
            error: true
          })
        });
    }

    render() {
      const {loading, data, error} = this.state;
      if (loading) {
        return <Spinner/>
      }

      if(error) {
        return <ErrorIndicator/>
      }
      return <View {...this.props} data={data}/>;
    }
  }
};

export default WithData
