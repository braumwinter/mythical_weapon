import React, {Component} from "react";
import {connect} from 'react-redux';
import '../../styles/App.scss';
import Catalog from "../catalog/catalog";
import productList from "../../script/product";
import Card from "../card/card";
import {Form} from 'semantic-ui-react';

function filterWeapon(props) {
    if (props.classArtifact === "Weapon") {
        return true;
    } else {
        return false;
    }
}

const weaponArr = productList.filter(filterWeapon);

let costsWeapon = [];

weaponArr.forEach(function (item) {
    costsWeapon.push(item.cost);
});


let MaxWeapon;
MaxWeapon = Math.max.apply(null, costsWeapon);

let MinWeapon;
MinWeapon = Math.min.apply(null, costsWeapon);

class WeaponPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minValueWeapon: MinWeapon,
            maxValueWeapon: MaxWeapon,
            isSword: false,
            isSpear: false,
            isTrident: false,
            isHammer: false,
        };
        this.changeMinWeapon = this.changeMinWeapon.bind(this);
        this.changeMaxWeapon = this.changeMaxWeapon.bind(this);
        this.showSwordFilter = this.showSwordFilter.bind(this);
        this.showSpearFilter = this.showSpearFilter.bind(this);
        this.showTridentFilter = this.showTridentFilter.bind(this);
        this.showHammerFilter = this.showHammerFilter.bind(this);
    }

    showSwordFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isSword === true ? this.setState({isSword: false}) : this.setState({isSword: true})
    }

    showSpearFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isSpear === true ? this.setState({isSpear: false}) : this.setState({isSpear: true})
    }

    showTridentFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isTrident === true ? this.setState({isTrident: false}) : this.setState({isTrident: true})
    }

    showHammerFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isHammer === true ? this.setState({isHammer: false}) : this.setState({isHammer: true})
    }

    changeMinWeapon(event) {
        const {name, value} = event.target;
        this.setState({
            minValueWeapon: value
        })
    }

    changeMaxWeapon(event) {
        const {name, value} = event.target;
        this.setState({
            maxValueWeapon: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="divCategory">
                <div className="divCatalog">
                    <div className="categoryCatalog">
                        <Catalog/>
                    </div>
                    <div className="divFormCost">
                        <h1 className="h1Filter">фильтр цен</h1>
                        <Form inverted size='big'>
                            <Form.Group widths='equal' onSubmit={this.handleSubmit.bind(this)}>
                                <Form.Input fluid
                                            label='Минимальная'
                                            type="number"
                                            name="min"
                                            value={this.state.minValueWeapon}
                                            placeholder={this.state.minValueWeapon}
                                            onChange={this.changeMinWeapon}
                                />
                                <Form.Input fluid
                                            label='Максимальная'
                                            type="number"
                                            name="max"
                                            value={this.state.maxValueWeapon}
                                            placeholder={this.state.maxValueWeapon}
                                            onChange={this.changeMaxWeapon}
                                />
                            </Form.Group>
                            <div className="divFilter">
                                <h1 className="h1Filter">форма оружия</h1>
                                <Form.Checkbox label='меч'
                                               type="checkbox"
                                               name="меч"
                                               checked={this.state.isSword}
                                               onChange={this.showSwordFilter}
                                />
                                <Form.Checkbox label='копье'
                                               type="checkbox"
                                               name="копье"
                                               checked={this.state.isSpear}
                                               onChange={this.showSpearFilter}
                                />
                                <Form.Checkbox label='трезубец'
                                               type="checkbox"
                                               name="трезубец"
                                               checked={this.state.isTrident}
                                               onChange={this.showTridentFilter}
                                />
                                <Form.Checkbox label='молот'
                                               type="checkbox"
                                               name="молот"
                                               checked={this.state.isHammer}
                                               onChange={this.showHammerFilter}
                                />
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="divMainCatalog">
                    {weaponArr.map(obj => {
                        if (+obj.cost >= +this.state.minValueWeapon && +obj.cost <= +this.state.maxValueWeapon) {
                            if (this.state.isSword && !this.state.isSpear && !this.state.isTrident && !this.state.isHammer) {
                                if (obj.formArtifact === "меч") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isSword && this.state.isSpear && !this.state.isTrident && !this.state.isHammer) {
                                if (obj.formArtifact === "копье") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isSword && !this.state.isSpear && this.state.isTrident && !this.state.isHammer) {
                                if (obj.formArtifact === "трезубец") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isSword && !this.state.isSpear && !this.state.isTrident && this.state.isHammer) {
                                if (obj.formArtifact === "молот") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isSword && this.state.isSpear && !this.state.isTrident && !this.state.isHammer) {
                                if (obj.formArtifact === "меч" || obj.formArtifact === "копье") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isSword && !this.state.isSpear && this.state.isTrident && !this.state.isHammer) {
                                if (obj.formArtifact === "меч" || obj.formArtifact === "трезубец") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isSword && !this.state.isSpear && !this.state.isTrident && this.state.isHammer) {
                                if (obj.formArtifact === "меч" || obj.formArtifact === "молот") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isSword && this.state.isSpear && this.state.isTrident && !this.state.isHammer) {
                                if (obj.formArtifact === "копье" || obj.formArtifact === "трезубец") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isSword && this.state.isSpear && !this.state.isTrident && this.state.isHammer) {
                                if (obj.formArtifact === "копье" || obj.formArtifact === "молот") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isSword && !this.state.isSpear && this.state.isTrident && this.state.isHammer) {
                                if (obj.formArtifact === "трезубец" || obj.formArtifact === "молот") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isSword && this.state.isSpear && this.state.isTrident && !this.state.isHammer) {
                                if (obj.formArtifact === "меч" || obj.formArtifact === "копье" || obj.formArtifact === "трезубец") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isSword && this.state.isSpear && !this.state.isTrident && this.state.isHammer) {
                                if (obj.formArtifact === "меч" || obj.formArtifact === "копье" || obj.formArtifact === "молот") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isSword && !this.state.isSpear && this.state.isTrident && this.state.isHammer) {
                                if (obj.formArtifact === "меч" || obj.formArtifact === "трезубец" || obj.formArtifact === "молот") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isSword && this.state.isSpear && this.state.isTrident && this.state.isHammer) {
                                if (obj.formArtifact === "копье" || obj.formArtifact === "трезубец" || obj.formArtifact === "молот") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else {
                                return (
                                    <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                          promotion={obj.promotion} description={obj.description}
                                          typeArtifact={obj.typeArtifact} origin={obj.origin}
                                          formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                          cost={obj.cost} rating={obj.rating}/>);
                            }
                        }
                    })}
                </div>
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
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeaponPage);