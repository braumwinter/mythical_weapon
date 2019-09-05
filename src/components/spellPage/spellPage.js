import React, {Component} from "react";
import {connect} from 'react-redux';
import '../../styles/App.scss';
import Catalog from "../catalog/catalog";
import productList from "../../script/product";
import Card from "../card/card";
import {Form} from 'semantic-ui-react';

function filterSpell(props) {
    if (props.classArtifact === "Spell") {
        return true;
    } else {
        return false;
    }
}

const spellArr = productList.filter(filterSpell);

let costsSpell = [];

spellArr.forEach(function (item) {
    costsSpell.push(item.cost);
});

let MaxSpell;
MaxSpell = Math.max.apply(null, costsSpell);

let MinSpell;
MinSpell = Math.min.apply(null, costsSpell);

class SpellPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minValueSpell: MinSpell,
            maxValueSpell: MaxSpell,
            isEarth: false,
            isWater: false,
            isFire: false,
            isAir: false,
        };
        this.changeMinSpell = this.changeMinSpell.bind(this);
        this.changeMaxSpell = this.changeMaxSpell.bind(this);
        this.showEarthFilter = this.showEarthFilter.bind(this);
        this.showWaterFilter = this.showWaterFilter.bind(this);
        this.showFireFilter = this.showFireFilter.bind(this);
        this.showAirFilter = this.showAirFilter.bind(this);
    }

    showEarthFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isEarth === true ? this.setState({isEarth: false}) : this.setState({isEarth: true})
    }

    showWaterFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isWater === true ? this.setState({isWater: false}) : this.setState({isWater: true})
    }

    showFireFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isFire === true ? this.setState({isFire: false}) : this.setState({isFire: true})
    }

    showAirFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isAir === true ? this.setState({isAir: false}) : this.setState({isAir: true})
    }

    changeMinSpell(event) {
        const {name, value} = event.target;
        this.setState({
            minValueSpell: value
        })
    }

    changeMaxSpell(event) {
        const {name, value} = event.target;
        this.setState({
            maxValueSpell: value
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
                        <Form inverted size='big' onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group widths='equal'>
                                <Form.Input fluid
                                            label='Минимальная'
                                            type="number"
                                            name="min"
                                            value={this.state.minValueSpell}
                                            placeholder={this.state.minValueSpell}
                                            onChange={this.changeMinSpell}
                                />
                                <Form.Input fluid
                                            label='Максимальная'
                                            type="number"
                                            name="max"
                                            value={this.state.maxValueSpell}
                                            placeholder={this.state.maxValueSpell}
                                            onChange={this.changeMaxSpell}
                                />
                            </Form.Group>
                            <div className="divFilter">
                                <h1 className="h1Filter">тип магии</h1>
                                <Form.Checkbox label='земля'
                                               type="checkbox"
                                               name="земля"
                                               checked={this.state.isEarth}
                                               onChange={this.showEarthFilter}
                                />
                                <Form.Checkbox label='вода'
                                               type="checkbox"
                                               name="вода"
                                               checked={this.state.isWater}
                                               onChange={this.showWaterFilter}
                                />
                                <Form.Checkbox label='огонь'
                                               type="checkbox"
                                               name="огонь"
                                               checked={this.state.isFire}
                                               onChange={this.showFireFilter}
                                />
                                <Form.Checkbox label='воздух'
                                               type="checkbox"
                                               name="воздух"
                                               checked={this.state.isAir}
                                               onChange={this.showAirFilter}
                                />
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="divMainCatalog">
                    {spellArr.map(obj => {
                        if (+obj.cost >= +this.state.minValueSpell && +obj.cost <= +this.state.maxValueSpell) {
                            if (this.state.isEarth && !this.state.isWater && !this.state.isFire && !this.state.isAir) {
                                if (obj.typeMagic === "земли") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isEarth && this.state.isWater && !this.state.isFire && !this.state.isAir) {
                                if (obj.typeMagic === "воды") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isEarth && !this.state.isWater && this.state.isFire && !this.state.isAir) {
                                if (obj.typeMagic === "огня") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isEarth && !this.state.isWater && !this.state.isFire && this.state.isAir) {
                                if (obj.typeMagic === "воздуха") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isEarth && this.state.isWater && !this.state.isFire && !this.state.isAir) {
                                if (obj.typeMagic === "земли" || obj.typeMagic === "воды") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isEarth && !this.state.isWater && this.state.isFire && !this.state.isAir) {
                                if (obj.typeMagic === "земли" || obj.typeMagic === "огня") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isEarth && !this.state.isWater && !this.state.isFire && this.state.isAir) {
                                if (obj.typeMagic === "земли" || obj.typeMagic === "воздуха") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isEarth && this.state.isWater && this.state.isFire && !this.state.isAir) {
                                if (obj.typeMagic === "воды" || obj.typeMagic === "огня") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isEarth && this.state.isWater && !this.state.isFire && this.state.isAir) {
                                if (obj.typeMagic === "воды" || obj.typeMagic === "воздуха") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isEarth && !this.state.isWater && this.state.isFire && this.state.isAir) {
                                if (obj.typeMagic === "огня" || obj.typeMagic === "воздуха") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isEarth && this.state.isWater && this.state.isFire && !this.state.isAir) {
                                if (obj.typeMagic === "земли" || obj.typeMagic === "воды" || obj.typeMagic === "огня") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isEarth && this.state.isWater && !this.state.isFire && this.state.isAir) {
                                if (obj.typeMagic === "земли" || obj.typeMagic === "воды" || obj.typeMagic === "воздуха") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isEarth && !this.state.isWater && this.state.isFire && this.state.isAir) {
                                if (obj.typeMagic === "земли" || obj.typeMagic === "огня" || obj.typeMagic === "воздуха") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isEarth && this.state.isWater && this.state.isFire && this.state.isAir) {
                                if (obj.typeMagic === "воды" || obj.typeMagic === "огня" || obj.typeMagic === "воздуха") {
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
)(SpellPage);