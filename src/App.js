import React from "react";
import axios from "axios";
import { Router } from "react-router-dom";
import GlobalStyle from "./style/global";
import Routes from "./Routes/index";
import AuthLayout from "./components/_layouts/Auth/index";
import Header from "./components/Navigation";
import history from "./services/history";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Signup from "./components/Signup/index";

class App extends React.Component {
  state = {
    allProducts: []
  };

  componentDidMount() {
    this.getData();
  }

  // here we are setting a function that will get the updated data from our API in order to call upon it after every change that we make to initial list. (ie: deleting an item, adding as item, updating an item, etc.). we will also use this in order to call it once the component loads in order to get the current list of products from our API
  getData = () => {
    axios
      .get("http://localhost:3001/findWatch")
      .then(response => {
        this.setState({
          allProducts: response.data
        });
      })
      .catch(err => console.log({ err }));
  };
  /**
   * @implcitReturn arrow functions same line
   * or retuned by paratheneses dont need return keyword
   * @dashboard watch collecition
   * @login login page
   * @signup  signup page
   * @inventory passing state to child component
   */

  render() {
    const { allProducts } = this.state;
    return (
      <>
        <Router history={history}>
          <Header />
          <Routes inventory={allProducts} />
          <GlobalStyle />
        </Router>
      </>
    );
  }
}

export default App;
