import React, {Component} from 'react';
import './topMenu.scss';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCost: 0,
            text: "  септим"
        };
    }

    componentDidUpdate() {
        if (this.props.data.rdBasket.cost !== this.state.allCost) {
            console.log("allCost ", this.props.data.rdBasket.cost, this.state.allCost);

            this.setState({
                allCost: this.props.data.rdBasket.cost
            })

        }
    }

    render() {
        return (
            <div id="topMenu">
                <div id="logoDiv">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <Link to="/"><img id="logo" alt="logo image" src="../../../src/img/logo.png"/></Link>
                </div>
                <div id="contactDiv">
                    <div id="emailDiv">
                        <span>examples@email.com</span>
                    </div>
                    <div id="phoneDiv">
                        <span>8 (123) 4567890</span>
                    </div>
                </div>
                <Link to="/Basket">
                    <div id="widgetDiv">
                        <div id="basketName">Корзина:</div>

                        <div id="basketCost">{this.state.allCost} {this.state.text}</div>
                    </div>
                </Link>
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
)(TopMenu);
