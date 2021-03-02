import React, { Component } from 'react';
import './Drink.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt,faShippingFast } from '@fortawesome/free-solid-svg-icons';
class Drink extends Component {
  state = {  }
  render() { 
    return (<div className="drink_item">
      <div className="drink_item_image">
        <img src="https://www.eabl.com/sites/default/files/brands-images/chrome_2.png" alt="" height="250px" width="250px"/>
      </div>
      <div className="drink_item_price_percentage">
        <div className="drink_item_price">Ksh. 250</div>
      </div>
      <div className="drink_item_title">Chrome Gin Chrome Gin Chrome Gin Chrome Gin</div>
      <div className="drink_item_location">
        <FontAwesomeIcon icon={faMapMarkerAlt} color="green" />
        <label className="drink_item_ws_name">Butlers Wines and Spirits  Butlers Wines and Spirits  Butlers Wines and Spirits  Butlers Wines and Spirits  (2km)</label>
      </div>
         <div className="drink_item_deliverly">
        <button className="drink_item_order">
          <FontAwesomeIcon icon={faShippingFast} />
          <span className="drink_item_button_span">Request Delivery</span>
        </button>
      </div>
    </div>);
  }
}
 
export default Drink;