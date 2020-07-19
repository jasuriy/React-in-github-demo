import React, { Component } from "react";
import ListItems from "./ListItem";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }
  handleAddInput = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };
  deleteItem = (key) => {
    const filteredItem = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: filteredItem });
  };
  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.handleAddInput}>
            <input
              type="text"
              placeholder="Enter text"
              onChange={this.handleInput}
              value={this.state.currentItem.text}
            />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />
      </div>
    );
  }
}

export default Form;
