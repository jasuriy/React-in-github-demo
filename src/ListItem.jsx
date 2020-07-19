import React, { Component } from "react";
import "./StyleListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
class ListItem extends Component {
  render() {
    const { items } = this.props;
    const itemList = items.map((item) => {
      return (
        <div className="list" key={item.key}>
          <p>
            <input
              type="text"
              id={item.key}
              value={item.text}
              onChange={(e) => {
                this.props.setUpdate(e.target.value, item.key);
              }}
            />
            <span>
              <FontAwesomeIcon
                className="faicons"
                icon="trash"
                onClick={() => this.props.deleteItem(item.key)}
              />
            </span>
          </p>
        </div>
      );
    });
    return (
      <FlipMove duration={300} easing="ease-in-out">
        {itemList}
      </FlipMove>
    );
  }
}

export default ListItem;
