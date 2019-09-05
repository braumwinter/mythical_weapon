import React, {Component} from "react";
import {connect} from 'react-redux';
import './userAccountPage.scss';
import {Accordion, Icon, Table, Rating} from 'semantic-ui-react';

import productList from "../../../src/script/product";
import manufacturerList from "../../../src/script/manufacturer";
import favoritesList from "../../../src/script/favoritesList";
import {acIsLogin} from "../../actions/actions";
import {ENTRANCE} from "../../consts/constants";
import {Link} from "react-router-dom";
import manufacturerFavor from "../../script/manufacturerFavor";
import basketList from "../../script/basketList";

// eslint-disable-next-line no-extend-native
Date.prototype.addDays = function (days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date;
};

let date = new Date();
let lastDate = date.addDays(30);

let lastMonth;

switch (lastDate.getMonth()) {
    case 0: {
        lastMonth = 'января';
        break;
    }
    case 1: {
        lastMonth = 'ферваля';
        break;
    }
    case 2: {
        lastMonth = 'марта';
        break;
    }
    case 3: {
        lastMonth = 'апреля';
        break;
    }
    case 4: {
        lastMonth = 'мая';
        break;
    }
    case 5: {
        lastMonth = 'июня';
        break;
    }
    case 6: {
        lastMonth = 'июля';
        break;
    }
    case 7: {
        lastMonth = 'августа';
        break;
    }
    case 8: {
        lastMonth = 'сентября';
        break;
    }
    case 9: {
        lastMonth = 'октября';
        break;
    }
    case 10: {
        lastMonth = 'ноября';
        break;
    }
    case 11: {
        lastMonth = 'декабря';
        break;
    }
    default: {
        lastMonth = 'чего-то';
        break;
    }
}
/*
let randProd = 4 + Math.random() * (11 + 1 - 5);
randProd = Math.floor(randProd);

let randManuf = 1 + Math.random() * (7 + 1 - 1);
randManuf = Math.floor(randManuf);
*/
function Size(obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

class UserAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1,

            thisDay: lastDate.getDate(),
            thisMonth: lastMonth,
            thisYear: lastDate.getFullYear()
        };

        this.handleClick = this.handleClick.bind(this);
        this.exit = this.exit.bind(this);
    }

    handleClick(e, titleProps) {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({activeIndex: newIndex})
    };

    exit() {
        this.props.changeUserName(ENTRANCE);
    }

    render() {
        const {activeIndex} = this.state;
        let size = Size(basketList);
        console.log("size ", size);

        return (
            <div>
                <div id="subscriptionDiv">
                    <p id="subscription">подписка
                        истекает {this.state.thisDay} {this.state.thisMonth} {this.state.thisYear}</p>
                </div>
                <div id="myRatings">
                    <Accordion inverted>
                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Icon name='dropdown'/>
                            Мои купленные товары
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Table unstackable color='black' inverted>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>фото</Table.HeaderCell>
                                        <Table.HeaderCell>название</Table.HeaderCell>
                                        <Table.HeaderCell>рейтинг</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {/* eslint-disable-next-line array-callback-return */}
                                    {productList.map((link, index) => {
                                        for (let i = 0; i < size; i++) {
                                            console.log("i ", i);
                                            if (basketList[i].id === productList[index].id) {
                                                return (
                                                    <Table.Row key={productList[index].id}>
                                                        <Table.Cell>
                                                            <div className="userPhotoDiv">
                                                                <img src={productList[index].photo}
                                                                     alt={productList[index].name}/>
                                                            </div>
                                                        </Table.Cell>
                                                        <Table.Cell>{productList[index].name}</Table.Cell>
                                                        <Table.Cell>
                                                            <Rating icon='star'
                                                                    defaultRating={productList[index].rating}
                                                                    maxRating={10}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                )
                                            }
                                        }
                                    })}
                                </Table.Body>
                            </Table>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Icon name='dropdown'/>
                            Избранные товары
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <Table unstackable color='black' inverted>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>фото</Table.HeaderCell>
                                        <Table.HeaderCell>имя</Table.HeaderCell>
                                        <Table.HeaderCell>рейтинг</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {/* eslint-disable-next-line array-callback-return */}
                                    {productList.map((link, index) => {
                                        for (let i = 0; i < favoritesList.length; i++) {
                                            console.log("i ", i);
                                            if (favoritesList[i] === productList[index].id) {
                                                return (
                                                    <Table.Row key={productList[index].id}>
                                                        <Table.Cell>
                                                            <div className="userPhotoDiv">
                                                                <img src={productList[index].photo}
                                                                     alt={productList[index].name}/>
                                                            </div>
                                                        </Table.Cell>
                                                        <Table.Cell>{productList[index].name}</Table.Cell>
                                                        <Table.Cell>
                                                            <Rating icon='star'
                                                                    defaultRating={productList[index].rating}
                                                                    maxRating={10}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                )
                                            }
                                        }
                                    })}
                                </Table.Body>
                            </Table>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                            <Icon name='dropdown'/>
                            Мои поставщики
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <Table unstackable color='black' inverted>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>фото</Table.HeaderCell>
                                        <Table.HeaderCell>имя</Table.HeaderCell>
                                        <Table.HeaderCell>рейтинг</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {/* eslint-disable-next-line array-callback-return */}
                                    {manufacturerList.map((link, index) => {
                                        for (let i = 0; i < manufacturerFavor.length; i++) {
                                            console.log("i ", i);
                                            if (manufacturerFavor[i] === productList[index].id) {
                                                return (
                                                    <Table.Row key={manufacturerList[index].id}>
                                                        <Table.Cell>
                                                            <div className="userPhotoDiv">
                                                                <img src={manufacturerList[index].photo}
                                                                     alt={manufacturerList[index].name}/>
                                                            </div>
                                                        </Table.Cell>
                                                        <Table.Cell>{manufacturerList[index].name}</Table.Cell>
                                                        <Table.Cell>
                                                            <Rating icon='star'
                                                                    defaultRating={manufacturerList[index].rating}
                                                                    maxRating={10}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                )
                                            }
                                        }
                                    })}
                                </Table.Body>
                            </Table>
                        </Accordion.Content>
                    </Accordion>
                </div>
                <Link to="/">
                    <button className="myButton" onClick={this.exit}>выйти</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        someWindow: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUserName: (userName) => dispatch(acIsLogin(userName))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAccountPage);