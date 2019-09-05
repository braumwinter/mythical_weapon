import React, {Component} from "react";
import {connect} from 'react-redux';
import './aboutCompanyPage.scss';
import '../../script/manufacturer';
import manufacturerList from "../../script/manufacturer";
import Catalog from '../catalog/catalog';
import {BLACK_COLOR, WHITE_COLOR} from "../../../src/consts/constants";
import "../../../src/styles/App.scss";
import favoritesList from "../../script/favoritesList";
import manufacturerFavor from "../../script/manufacturerFavor";

function Size(obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

let size = Size(manufacturerList);

let arr = [];
for(let i = 0; i < size; i++){
    arr.push("в избранное");
}

class AboutCompanyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorites: "в избранное",
            length: 0
        };

        this.toFavorites = this.toFavorites.bind(this);
    };

    toFavorites(event){
        const {value} = event.target;
        manufacturerFavor.push(value);

        arr[value - 1] = String.fromCharCode(10004) + " добавлено";

        this.setState({
            isFavorites: String.fromCharCode(10004) + " добавлено"
        })
    }

    render() {
        if (this.props.data.rdChangeColor.color === BLACK_COLOR) {

        }

        return (
            <div id="mainRem">
                <div id="rem">
                    <Catalog/>
                </div>
                <div id="aboutCompany">
                    <div className="tyre">
                        <div className="tyre2">
                            <h1>О нас</h1>
                        </div>
                        <p>
                            В нашем интернет-магазине легендарное холодное оружие и доспехи можно купить во
                            многих видах его исполнения и типах назначения. При изготовлении каждого из них настоящие
                            Мастера
                            кузнечного используют только самые надежные и крепкие материалы, накопленный многовековой
                            опыт
                            и природный талант.
                        </p>
                    </div>
                    <ul className="aboutCompanyList">
                        {manufacturerList.map((link, index) => {
                            return (
                                <li key={index}>
                                    <div className="cardRt">
                                        <div className="cardFrontRt">
                                            <img src={manufacturerList[index].photo}
                                                 alt={manufacturerList[index].name}/>
                                        </div>
                                        <div className="cardBackRt">
                                            <span className="spanDescription">
                                                <h3 className="headerRt">{manufacturerList[index].name}</h3>
                                                <p className="textRt">{manufacturerList[index].description}</p>
                                                <button className="myButton" onClick={this.toFavorites}
                                                        value={manufacturerList[index].id}>
                                                    {arr[index]}
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
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
)(AboutCompanyPage);