import React, {Component} from "react";
import {connect} from 'react-redux';
import '../../styles/App.scss';
import './productPage.scss';
import Catalog from "../catalog/catalog";
import {Rating} from 'semantic-ui-react';
import {Form} from 'semantic-ui-react';
import {ADD_TO_BASKET} from '../../consts/constants';
import productList from "../../../src/script/product";
import manufacturerList from "../../../src/script/manufacturer";
import basketList from "../../../src/script/basketList";
import favoritesList from "../../../src/script/favoritesList";
import blogList from "../../../src/script/blogList";
import {acAddToBasket} from "../../actions/actions";

import {Link} from "react-router-dom";

let prodArr;
let manufArr;
let blogArr;
let temp3;

function Size(obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            isFavorites: "в избранное"
        };

        this.handleChange = this.handleChange.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.removeQuantity = this.removeQuantity.bind(this);
        this.toFavorites = this.toFavorites.bind(this);
        this.order = this.order.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        if (value < 1) {
            this.setState({
                [name]: 1
            })
        } else if (value > prodArr[0].quantity) {
            this.setState({
                [name]: prodArr[0].quantity
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    addQuantity() {
        if (this.state.quantity >= prodArr[0].quantity) {
            this.setState({
                quantity: prodArr[0].quantity
            })
        } else {
            this.setState({
                quantity: this.state.quantity + 1
            })
        }
    }

    removeQuantity() {
        if (this.state.quantity == 1 || this.state.quantity == 0) {
            this.setState({
                quantity: 1
            })
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }

    toFavorites() {

        favoritesList.push(prodArr[0].id);
        console.log("favoritesList ", favoritesList);
        console.log("favoritesList.length ", favoritesList.length);
        this.setState({
            isFavorites: String.fromCharCode(10004) + " добавлено"
        })
    }

    order() {
        const selectTv = document.getElementById("renTv");
        const valueTv = selectTv.value;

        let temp = {};
        temp["action"] = ADD_TO_BASKET;
        temp["id"] = prodArr[0].id;
        temp["quantity"] = this.state.quantity;
        temp["manufacter"] = valueTv;

        let size = Size(basketList);

        basketList[size] = temp;

        temp3 = +this.props.data.rdBasket.cost + this.state.quantity * prodArr[0].cost;

        this.props.toOrder(temp3);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        prodArr = productList.filter(productList => productList.id === this.props.data.rdShowWindow.idProduct);
        manufArr = manufacturerList.filter(manufacturerList => manufacturerList.specialization.indexOf(prodArr[0].classArtifact, 0) !== -1);
        blogArr = blogList.filter(blogList => blogList.idProduct == this.props.data.rdShowWindow.idProduct);

        function temp() {
            if (prodArr[0].classArtifact === "Weapon") {
                return (
                    <div className="shortDescriptionD">
                        <p className="shortDescriptionP">Длина клинка: {prodArr[0].bladeLength}</p>
                        <p className="shortDescriptionP">Тип использования: {prodArr[0].typeUse}</p>
                        <p className="shortDescriptionP">Вес: {prodArr[0].weight}</p>
                        <p className="shortDescriptionP">Известные пользователи: {prodArr[0].user}</p>
                    </div>)
            } else if (prodArr[0].classArtifact === "Armor") {
                return (
                    <div className="shortDescriptionD">
                        <p className="shortDescriptionP">Категория доспеха: {prodArr[0].category}</p>
                        <p className="shortDescriptionP">Вес: {prodArr[0].weight}</p>
                        <p className="shortDescriptionP">Известные пользователи: {prodArr[0].user}</p>
                    </div>
                )
            } else {
                return (
                    <div className="shortDescriptionD">
                        <p className="shortDescriptionP">Тип воздействия: {prodArr[0].impactType}</p>
                        <p className="shortDescriptionP">Тип магии:{prodArr[0].typeMagic}</p>
                        <p className="shortDescriptionP">Уровень: {prodArr[0].level}</p>
                    </div>
                )
            }
        }

        return (
            <div className="divCategory">
                <div className="divCatalog">
                    <Catalog/>
                </div>
                <div className="divMainCatalog">
                    <h1 className="categoryCatalog">{prodArr[0].name}</h1>
                    <div id="blockProd">
                        <div id="popW">
                            <div id="imgProd">
                                <img src={prodArr[0].photo} alt={prodArr[0].name}/>
                            </div>
                            <div id="shortDescription">
                                <p className="shortDescriptionP">{prodArr[0].origin}</p>
                                <p className="shortDescriptionP">{prodArr[0].typeArtifact} {prodArr[0].formArtifact}</p>
                                <p className="shortDescriptionP">Эффекты: {prodArr[0].effect}</p>

                                {temp()}

                            </div>
                        </div>
                        <div id="popY">
                            <div id="fullDescription">
                                <p className="fullDescriptionP">{prodArr[0].description}</p>
                            </div>
                            <div className="pop">
                                <Rating icon='star' defaultRating={prodArr[0].rating} maxRating={10}/>
                                <button id='rgty' className="myButton"
                                        onClick={this.toFavorites}>{this.state.isFavorites}</button>
                            </div>
                            <div className="popD">
                                <Form inverted size='big' onSubmit={this.handleSubmit.bind(this)}>
                                    <Form.Group widths='equal'>
                                        <button id="centerButton2" className="myButton" onClick={this.removeQuantity}>
                                            <strong> - </strong>
                                        </button>
                                        <Form.Field>
                                            <label>количество</label>
                                            <input
                                                type="number"
                                                value={this.state.quantity}
                                                name="quantity"
                                                placeholder="quantity"
                                                onChange={this.handleChange}
                                            />
                                        </Form.Field>
                                        <button id="centerButton" className="myButton" onClick={this.addQuantity}>
                                            <strong> + </strong>
                                        </button>
                                        <Form.Field>
                                            <label>итоговая цена</label>
                                            <p id="totalCostProd">{this.state.quantity * prodArr[0].cost}</p>
                                        </Form.Field>
                                    </Form.Group>

                                    <Form.Group widths='equal'>

                                        <Form.Field id="renTv" label='Поставщики' control='select'>
                                            {manufArr.map(obj => {
                                                return (
                                                    <option key={obj.id + "maNuf"} value={obj.name}>{obj.name}</option>
                                                )
                                            })}</Form.Field>
                                        <Form.Group>
                                        </Form.Group>
                                        <Form.Field>
                                            <div id="nvthn">
                                                <Link to="/">
                                                    <button type="button" id="numm" className="myButton"
                                                            onClick={this.order}>
                                                        Заказать
                                                    </button>
                                                </Link>
                                            </div>
                                        </Form.Field>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>

                        <div id="popZ">
                            <ul>
                                {blogArr.map(obj => {
                                    return (
                                        <li className="blogReview" key={obj.id + "blogProd"}>
                                            <div className="blogImgDiv">
                                                <div className="imgRi">
                                                    <img src={obj.avatar} alt={obj.name}/>
                                                </div>
                                                <div className="nameRi">
                                                    <p>{obj.name}</p>
                                                </div>
                                            </div>
                                            <h3><u><strong>{obj.header}</strong></u></h3>
                                            <p>{obj.text}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toOrder: (cost) => dispatch(acAddToBasket(cost))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductPage);