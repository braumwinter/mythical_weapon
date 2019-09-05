import React, {Component} from "react";
import './search.scss';
import productList from '../../script/product';
import searchList from '../../script/searchList';
import {connect} from "react-redux";

let ArrLength = 0;

for(let i = 0; i < productList.length; i++, ArrLength++){
    let Arr = {};
    Arr["name"] = productList[i].name;
    Arr["photo"] = productList[i].photo;
    Arr["description"] = productList[i].name + " " + productList[i].effect + " " + productList[i].description;

    searchList[ArrLength] = Arr;
}

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: -1
        };
    }

    render() {
        return(
            <div id="searchDiv" className="d5">
                <form action="" method="get">
                    <input name="s" placeholder="Искать здесь..." type="search"/>
                    <button type="submit">
                        <img id="searchImg" src="../../src/img/Tilda_Icons_2web_magnifier.svg" alt="search"/>
                    </button>
                </form>
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
)(Search);