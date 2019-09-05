import React, {Component} from 'react';
import './mainMenu.scss';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import Search from "../search/search";

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horizontalMenu: false,
            verticalMenu: false
        };

        this.showHorizontalMenu = this.showHorizontalMenu.bind(this);
        this.showVerticalMenu = this.showVerticalMenu.bind(this);
    }

    showHorizontalMenu() {
        if (this.state.horizontalMenu === true) {
            this.setState({
                horizontalMenu: false
            })
        } else {
            this.setState({
                horizontalMenu: true
            })
        }
    }

    showVerticalMenu() {
        if (this.state.verticalMenu === true) {
            this.setState({
                verticalMenu: false
            })
        } else {
            this.setState({
                verticalMenu: true
            })
        }
    }

    render() {
        let horizontalMenu;
        let verticalMenu;

        if (this.state.horizontalMenu === true) {
            horizontalMenu = "showHorizontal"
        } else {
            horizontalMenu = "noshowHorizontal"
        }

        if (this.state.verticalMenu === true) {
            verticalMenu = "showVertical"
        } else {
            verticalMenu = "noshowVertical"
        }

        return (
            <div id="mainMenu">
                <div id="mmm">
                    <div id="navBar">
                        <div id="horizontalHamburgerDiv">
                            <button id="horizontalHamburgerButton" type="button" onClick={this.showHorizontalMenu}>
                                <img id="horizontalHamburgerImg" src="../../src/img/menu.svg"
                                     alt="horizontalHamburgerImg"/>
                            </button>
                        </div>
                        <div id="verticalHamburgerDiv">
                            <button id="verticalHamburgerButton" type="button" onClick={this.showVerticalMenu}>
                                <img id="verticalHamburgerImg" src="../../src/img/menu.svg" alt="verticalHamburgerImg"/>
                            </button>
                        </div>
                        <div id="mainMenuList">
                            <ul className="MenuList">
                                <Link to="/AllCategory">
                                    <li key='menuList1'>
                                        каталог
                                    </li>
                                </Link>
                                <Link to="/AboutCompany">
                                    <li key='menuList2'>
                                        о компании
                                    </li>
                                </Link>
                                <Link to="/CompanyBlog">
                                    <li key='menuList3'>
                                        блог
                                    </li>
                                </Link>
                                <Link to="/FAQ">
                                    <li key='menuList4'>
                                        FAQ
                                    </li>
                                </Link>
                                <Link to="/UserAccount">
                                    <li key='menuList5'>
                                        личный кабинет
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <Search/>
                </div>

                <div id={horizontalMenu}>
                    <ul className="MenuList2">
                        <Link to="/AllCategory">
                            <li key='menuList1'>
                                каталог
                            </li>
                        </Link>
                        <Link to="/AboutCompany">
                            <li key='menuList2'>
                                о компании
                            </li>
                        </Link>
                        <Link to="/CompanyBlog">
                            <li key='menuList3'>
                                блог
                            </li>
                        </Link>
                        <Link to="/FAQ">
                            <li key='menuList4'>
                                FAQ
                            </li>
                        </Link>
                        <Link to="/UserAccount">
                            <li key='menuList5'>
                                личный кабинет
                            </li>
                        </Link>
                    </ul>
                </div>

                <div id={verticalMenu}>
                    <ul className="MenuList3">
                        <Link to="/AllCategory">
                            <li key='menuList1'>
                                все товары
                            </li>
                        </Link>
                        <Link to="/Weapon">
                            <li key='menuList2'>
                                оружие
                            </li>
                        </Link>
                        <Link to="/Armor">
                            <li key='menuList3'>
                                доспехи
                            </li>
                        </Link>
                        <Link to="/Spell">
                            <li key='menuList4'>
                                свитки
                            </li>
                        </Link>
                        <Link to="/AboutCompany">
                            <li key='menuList5'>
                                о компании
                            </li>
                        </Link>
                        <Link to="/CompanyBlog">
                            <li key='menuList6'>
                                блог
                            </li>
                        </Link>
                        <Link to="/FAQ">
                            <li key='menuList7'>
                                FAQ
                            </li>
                        </Link>
                        <Link to="/UserAccount">
                            <li key='menuList8'>
                                личный кабинет
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu);