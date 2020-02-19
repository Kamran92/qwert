import React, {Component, Fragment} from 'react';
import './ItemDetails.css';
import Spinner from "../Spinner/spinner";

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
};

export {Record};

class ItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      loading: false
    };

    this.updatePerson = () => {
      const {itemId, getData} = props;
      if (!itemId) {
        return;
      }
      getData(itemId)
        .then((item) => {
          this.setState({
            item,
            loading: false
          })
        })
    }

    this.updateLoading = () => {
      this.setState(() => {
        return {
          loading: true
        }
      })
    }
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    const {itemId, getData} = this.props;
    if (prevProps.itemId !== itemId && itemId !== undefined) {
      this.updateLoading();
      getData(itemId)
        .then((item) => {
          this.setState(({loading}) => {
            return {
              item,
              loading: !loading
            }
          })
        })
    }
  }

  render() {
    const {item, loading} = this.state;
    if (item === null) {
      return null
    }
    const {img, name} = item;
    const itemDetails = (
      <Fragment>
        <img className="person-image" src={img} alt="фото"/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
      </Fragment>
    );

    const result = loading ? <Spinner/> : itemDetails;
    return (
      <div className="person-details card">
        {result}
      </div>
    )
  }
}


export default ItemDetails;