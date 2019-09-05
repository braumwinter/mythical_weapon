import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../styles/App.scss';
import Catalog from "../catalog/catalog";
import productList from "../../../src/script/product";
import Card from "../card/card";
import {Form} from 'semantic-ui-react';

let costs = [];

productList.forEach(function (item) {
    costs.push(item.cost);
});

let Max;
Max = Math.max.apply(null, costs);

let Min;
Min = Math.min.apply(null, costs);

class AllCategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: Min,
            maxValue: Max,
            isWeapon: false,
            isArmor: false,
            isSpell: false
        };

        this.changeMin = this.changeMin.bind(this);
        this.changeMax = this.changeMax.bind(this);
        this.showWeaponFilter = this.showWeaponFilter.bind(this);
        this.showArmorFilter = this.showArmorFilter.bind(this);
        this.showSpellFilter = this.showSpellFilter.bind(this);
    }

    showWeaponFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isWeapon === true ? this.setState({isWeapon: false}) : this.setState({isWeapon: true})
    }

    showArmorFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isArmor === true ? this.setState({isArmor: false}) : this.setState({isArmor: true})
    }

    showSpellFilter(event) {
        const {name, value, type, checked} = event.target;
        this.state.isSpell === true ? this.setState({isSpell: false}) : this.setState({isSpell: true})
    }

    changeMin(event) {
        const {name, value} = event.target;
        this.setState({
            minValue: value
        })
    }

    changeMax(event) {
        const {name, value} = event.target;
        this.setState({
            maxValue: value
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
                                            value={this.state.minValue}
                                            placeholder={this.state.minValue}
                                            onChange={this.changeMin}
                                />

                                <Form.Input fluid
                                            label='Максимальная'
                                            type="number"
                                            name="max"
                                            value={this.state.maxValue}
                                            placeholder={this.state.maxValue}
                                            onChange={this.changeMax}
                                />
                            </Form.Group>

                            <div className="divFilter">
                                <h1 className="h1Filter">класс артефакта</h1>

                                <Form.Checkbox label='оружие'
                                               type="checkbox"
                                               name="оружие"
                                               checked={this.state.isWeapon}
                                               onChange={this.showWeaponFilter}
                                />
                                <Form.Checkbox label='доспехи'
                                               type="checkbox"
                                               name="доспехи"
                                               checked={this.state.isArmor}
                                               onChange={this.showArmorFilter}
                                />
                                <Form.Checkbox label='свитки'
                                               type="checkbox"
                                               name="свитки"
                                               checked={this.state.isSpell}
                                               onChange={this.showSpellFilter}
                                />
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="divMainCatalog">

                    {/* eslint-disable-next-line array-callback-return */}
                    {productList.map(obj => {
                        if (+obj.cost >= +this.state.minValue && +obj.cost <= +this.state.maxValue) {
                            if (this.state.isWeapon && !this.state.isArmor && !this.state.isSpell) {
                                if (obj.classArtifact === "Weapon") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isArmor && !this.state.isWeapon && !this.state.isSpell) {
                                if (obj.classArtifact === "Armor") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isSpell && !this.state.isArmor && !this.state.isWeapon) {
                                if (obj.classArtifact === "Spell") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isWeapon && this.state.isArmor && !this.state.isSpell) {
                                if (obj.classArtifact === "Weapon" || obj.classArtifact === "Armor") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isWeapon && !this.state.isArmor && this.state.isSpell) {
                                if (obj.classArtifact === "Weapon" || obj.classArtifact === "Spell") {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isWeapon && this.state.isArmor && this.state.isSpell) {
                                if (obj.classArtifact === "Armor" || obj.classArtifact === "Spell") {
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
)(AllCategoryPage);