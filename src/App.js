/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from "react";
import {connect} from 'react-redux';
import '../src/styles/App.scss';
import Chat from "./components/chat/chat";
import TopPanel from "./components/topPanel/topPanel";
import TopMenu from "./components/topMenu/topMenu";
import MainMenu from "./components/mainMenu/mainMenu";
import HomePage from "./components/homePage/homePage";
import AuthorizationPage from "./components/authorizationPage/authorizationPage";
import RegistrationPage from "./components/registrationPage/registrationPage";
import ProductPage from './components/productPage/productPage';
import UserAccountPage from './components/userAccountPage/userAccountPage';
import CompanyBlogPage from './components/companyBlogPage/companyBlogPage';
import FAQ from './components/FAQPage/FAQPage';
import AboutCompanyPage from './components/aboutCompanyPage/aboutCompanyPage';
import AllCategoryPage from './components/allCategoryPage/allCategoryPage';
import WeaponPage from './components/weaponPage/weaponPage';
import ArmorPage from './components/armorPage/armorPage';
import SpellPage from './components/spellPage/spellPage';
import BasketPage from './components/basketPage/basketPage';
import BottomPanel from "./components/bottomPanel/bottomPanel";
import UpButton from "./components/upButton/upButton";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <div id="ner">
                <UpButton/>
                <TopPanel/>
                <Chat/>
                <div id="container">
                    <TopMenu/>
                    <MainMenu/>
                    <div id="mainContent">
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/mythical_weapon/" component={HomePage}/>
                            <Route path="/Authorization" component={AuthorizationPage}/>
                            <Route path="/Registration" component={RegistrationPage}/>
                            <Route path="/UserAccount" component={UserAccountPage}/>
                            <Route path="/Product" component={ProductPage}/>
                            <Route path="/AboutCompany" component={AboutCompanyPage}/>
                            <Route path="/FAQ" component={FAQ}/>
                            <Route path="/CompanyBlog" component={CompanyBlogPage}/>
                            <Route path="/AllCategory" component={AllCategoryPage}/>
                            <Route path="/Weapon" component={WeaponPage}/>
                            <Route path="/Armor" component={ArmorPage}/>
                            <Route path="/Spell" component={SpellPage}/>
                            <Route path="/Basket" component={BasketPage}/>
                        </Switch>
                    </div>
                </div>
                <BottomPanel/>
            </div>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        someWindow: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);