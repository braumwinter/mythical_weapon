import React, {Component} from "react";
import Slider from "react-slick";
import "./promotion.scss";
import productList from "../../script/product";
import manufacturerList from "../../script/manufacturer";
import PromCard from "../../../src/components/promCard/promCard";

/*фильтр для акций*/

function filterPromotion(props) {
    if (props.promotion === "true") {
        return true;
    } else {
        return false;
    }
}

/*фильтр для поиска максимального значения рейтинга*/

function rating(props) {
    if (props.rating > 8) {
        return true;
    } else {
        return false;
    }
}

const promotionArr = productList.filter(filterPromotion);
const ratingProdArr = productList.filter(rating);
const ratingManufArr = manufacturerList.filter(rating);

let jokeComponents = promotionArr.map(obj =>
    <PromCard key={obj.id} type="promotion" name={obj.name} photo={obj.photo} rating={obj.rating}
              promotion={obj.promotion}
              description={obj.description} oldCost={obj.oldCost} cost={obj.cost}
              origin={obj.origin} typeArtifact={obj.typeArtifact} formArtifact={obj.formArtifact}
              effect={obj.effect}/>);

let jokeComponents2 = ratingProdArr.map(obj =>
    <PromCard key={obj.id} type="rating" name={obj.name} photo={obj.photo} rating={obj.rating} promotion={obj.promotion}
              description={obj.description}
              origin={obj.origin} typeArtifact={obj.typeArtifact} formArtifact={obj.formArtifact}
              effect={obj.effect}/>);

let jokeComponents3 = ratingManufArr.map(obj =>
    <PromCard key={obj.id} type="manufacturer" name={obj.name} photo={obj.photo} rating={obj.rating}
              promotion={obj.promotion}
              description={obj.description} specialization={obj.specialization}/>);


/*вычисление ширины экрана*/

let temp = 3;

let w = window,
    d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    width2 = w.innerWidth || documentElement.clientWidth || body.clientWidth;

if (width2 < 1090 && width2 > 540) {
    temp = 2;
} else if (width2 <= 540) {
    temp = 1;
} else {
    temp = 3;
}


export default class CenterMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: jokeComponents,
            numberOfFrames: temp
        };

        this.clickPromotion = this.clickPromotion.bind(this);
        this.clickProductRating = this.clickProductRating.bind(this);
        this.clickManufacturerRating = this.clickManufacturerRating.bind(this);
    }

    clickPromotion() {
        this.setState({
            show: jokeComponents
        })
    };

    clickProductRating() {
        this.setState({
            show: jokeComponents2
        })
    }

    clickManufacturerRating() {
        this.setState({
            show: jokeComponents3
        })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: this.state.numberOfFrames,
            slidesToScroll: this.state.numberOfFrames
        };

        return (
            <div id="ttt">
                <div>
                    <button className="myButton" onClick={this.clickPromotion}>акции</button>
                    <button className="myButton" onClick={this.clickProductRating}>популярные товары</button>
                    <button className="myButton" onClick={this.clickManufacturerRating}>популярные поставщики</button>
                </div>
                <div id="sliderPromotion">
                    <Slider {...settings}>
                        {this.state.show}
                    </Slider>
                </div>
            </div>
        );
    }
}