import React from "react";
import Catalog from "../catalog/catalog";
import Blog from "../blog/blog";
import SimpleSlider from "../mySlider/mySlider";
import CenterMode from "../promotion/promotion";
import InfoMain from "../infoMain/infoMain";
import InfoList from "../infoList/infoList";
import "../../styles/App.scss";
import "./homePage.scss";

function HomePage() {
    return (
        <div id="nnn">
            <div id="catalogNews">
                <Catalog/>
                <div id="vk_groups"/>
                <div id="news">
                    <div id="nameMane">Отзывы</div>
                    <Blog/>
                </div>
            </div>
            <div id="main">
                <div id="sliderDiv">
                    <SimpleSlider/>
                </div>
                <CenterMode/>
                <div id="infoBlock">
                    <InfoMain/>
                    <InfoList/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;