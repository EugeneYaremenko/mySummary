import React, { Component } from "react";
//import { CSSTransition } from "react-transition-group";

import Wrapper from "./Wrapper/Wrapper";
import Info from "./Info/Info";
import Experience from "./Experience/Experience";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Info />
        <Experience />
      </Wrapper>
    );
  }
}

export default App;
