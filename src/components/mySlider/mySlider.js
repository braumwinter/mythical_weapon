import React, {Component} from "react";
import Slider from "react-slick";
import "./temps.scss";

/*const Slide_1 = "../../src/img/Glamdring.png";
const Slide_2 = "../../src/img/KarrBelaigDurgin.png";
const Slide_3 = "../../src/img/SwordKladenets.png";*/

export default class SimpleSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            Slide_1: "../../src/img/Glamdring.png",
            Slide_2: "../../src/img/KarrBelaigDurgin.png",
            Slide_3: "../../src/img/SwordKladenets.png"
        };
    }
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="temps">
                        <img className="center-img" alt="Glamdring" src={this.props.Slide_1}/>
                    </div>
                    <div className="temps">
                        <img className="center-img" alt="KarrBelaigDurgin" src={this.props.Slide_2}/>
                    </div>
                    <div className="temps">
                        <img className="center-img" alt="SwordKladenets" src={this.props.Slide_3}/>
                    </div>
                </Slider>
            </div>
        );
    }
}