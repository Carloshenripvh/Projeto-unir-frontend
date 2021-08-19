import React, { Component } from "react";
import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";
import Routes from "./routes";
class App extends Component {
  
  render() {

    return (
      <Container>
        <Content>
          <Routes />
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
