import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

class App extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
