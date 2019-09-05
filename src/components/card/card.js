import React, {Component} from 'react';
import './card.scss';
import {connect} from 'react-redux';
import {Rating} from 'semantic-ui-react'
import {acShowProductPage} from "../../actions/actions";
import {Link} from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.showProductPage = this.showProductPage.bind(this);
    }

    showProductPage() {
        this.props.showProduct(this.props.id);
    }

    render() {
        let spanProm;
        let spanCost;
        if (this.props.oldCost !== "undefined") {
            spanProm = "ribbon";
            spanCost = "strike";
        } else {
            spanProm = "nowrap";
            spanCost = "nostrike";
        }

        return (
            <div className="card">
            <span className={spanProm}>
                <span>СКИДКА!!!</span>
            </span>
                <h3 className="het">{this.props.name}</h3>
                <div className="flip">
                    <div className="cardFront">
                        <img src={this.props.photo} alt={this.props.name}/>
                    </div>
                    <div className="cardBack">
                        <span className="dem">{this.props.origin}
                            <br/><br/> тип: {this.props.typeArtifact}<br/><br/> форма: {this.props.formArtifact}
                            <br/><br/> эффекты: {this.props.effect}</span>
                    </div>
                </div>
                <div className="ratingCard">
                    <Rating icon='star' defaultRating={this.props.rating} maxRating={10}/>
                </div>
                <span className="kek">
            <p className={spanCost}>{this.props.oldCost} </p><p className="ter">  {this.props.cost} септим</p>
            </span>
                <div className="sert">
                    <Link to="/Product">
                        <button className="myButton" onClick={this.showProductPage}>
                            подробнее
                        </button>
                    </Link>
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
    return {
        showProduct: (idProduct) => dispatch(acShowProductPage(idProduct))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);