import React, {Component} from "react";
import Slider from "react-slick";
import "./temps.scss";
import Glamdring from "../../../src/img/Glamdring.png";
import KarrBelaigDurgin from "../../../src/img/KarrBelaigDurgin.png";
import SwordKladenets from "../../../src/img/SwordKladenets.png";

/*const Slide_1 = "../../src/img/Glamdring.png";
const Slide_2 = "../../src/img/KarrBelaigDurgin.png";
const Slide_3 = "../../src/img/SwordKladenets.png";*/

export default class SimpleSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            Slide_1: "require(Glamdring)",
            Slide_2: 'require("../../src/img/KarrBelaigDurgin.png")',
            Slide_3: "https://sun9-58.userapi.com/c850720/v850720355/1aa272/Hdr0nbt3WqU.jpg"
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
                        <img className="center-img" alt="Glamdring" src={require("../../../src/img/Glamdring.png")}/>
                    </div>
                    <div className="temps">
                        <img className="center-img" alt="KarrBelaigDurgin" src={require("../../../src/img/KarrBelaigDurgin.png")}/>
                    </div>
                    <div className="temps">
                        <img className="center-img" alt="SwordKladenets" src={require("../../../src/img/SwordKladenets.png")}/>
                    </div>
                </Slider>
            </div>
        );
    }
}