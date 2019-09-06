import React, {Component} from "react";
import {connect} from 'react-redux';
import '../../styles/App.scss';
import Catalog from "../catalog/catalog";
import productList from "../../script/product";
import Card from "../card/card";
import {Form} from 'semantic-ui-react';

function filterArmor(props) {
    if (props.classArtifact === "Armor") {
        return true;
    } else {
        return false;
    }
}

const armorArr = productList.filter(filterArmor);
let costsArmor = [];

armorArr.forEach(function (item) {
    costsArmor.push(item.cost);
});

let MaxArmor;
MaxArmor = Math.max.apply(null, costsArmor);

let MinArmor;
MinArmor = Math.min.apply(null, costsArmor);

class ArmorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minValueArmor: MinArmor,
            maxValueArmor: MaxArmor,
            isTorso: false,
            isHelmet: false,
            isLeggings: false,
            isGloves: false,
            isShield: false,
            isBelt: false,
            isFootwear: false
        };
        this.changeMinArmor = this.changeMinArmor.bind(this);
        this.changeMaxArmor = this.changeMaxArmor.bind(this);
        this.showTorsoFilter = this.showTorsoFilter.bind(this);
        this.showHelmetFilter = this.showHelmetFilter.bind(this);
        this.showLeggingsFilter = this.showLeggingsFilter.bind(this);
        this.showGlovesFilter = this.showGlovesFilter.bind(this);
        this.showShieldFilter = this.showShieldFilter.bind(this);
        this.showBeltFilter = this.showBeltFilter.bind(this);
        this.showFootwearFilter = this.showFootwearFilter.bind(this);
    }

    showTorsoFilter(event) {
        /*const {name, value, type, checked} = event.target;*/
        this.state.isTorso === true ? this.setState({isTorso: false}) : this.setState({isTorso: true})
    }

    showHelmetFilter(event) {
        /*const {name, value, type, checked} = event.target;*/
        this.state.isHelmet === true ? this.setState({isHelmet: false}) : this.setState({isHelmet: true})
    }

    showLeggingsFilter(event) {
        /*const {name, value, type, checked} = event.target;*/
        this.state.isLeggings === true ? this.setState({isLeggings: false}) : this.setState({isLeggings: true})
    }

    showGlovesFilter(event) {
        /*const {name, value, type, checked} = event.target;*/
        this.state.isGloves === true ? this.setState({isGloves: false}) : this.setState({isGloves: true})
    }

    showShieldFilter(event) {
        /*const {name, value, type, checked} = event.target;*/
        this.state.isShield === true ? this.setState({isShield: false}) : this.setState({isShield: true})
    }

    showBeltFilter(event) {
        /*const {name, value, type, checked} = event.target;*/
        this.state.isBelt === true ? this.setState({isBelt: false}) : this.setState({isBelt: true})
    }

    showFootwearFilter(event) {
        /*const {name, value, type, checked} = event.target;*/
        this.state.isFootwear === true ? this.setState({isFootwear: false}) : this.setState({isFootwear: true})
    }

    changeMinArmor(event) {
        const {value} = event.target;
        this.setState({
            minValueArmor: value
        })
    }

    changeMaxArmor(event) {
        const {value} = event.target;
        this.setState({
            maxValueArmor: value
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
                                            value={this.state.minValueArmor}
                                            placeholder={this.state.minValueArmor}
                                            onChange={this.changeMinArmor}
                                />
                                <Form.Input fluid
                                            label='Максимальная'
                                            type="number"
                                            name="max"
                                            value={this.state.maxValueArmor}
                                            placeholder={this.state.maxValueArmor}
                                            onChange={this.changeMaxArmor}
                                />
                            </Form.Group>
                            <div className="divFilter">
                                <h1 className="h1Filter">форма оружия</h1>
                                <Form.Checkbox label='торс'
                                               type="checkbox"
                                               name="торс"
                                               checked={this.state.isTorso}
                                               onChange={this.showTorsoFilter}
                                />
                                <Form.Checkbox label='шлем'
                                               type="checkbox"
                                               name="шлем"
                                               checked={this.state.isHelmet}
                                               onChange={this.showHelmetFilter}
                                />
                                <Form.Checkbox label='поножи'
                                               type="checkbox"
                                               name="поножи"
                                               checked={this.state.isLeggings}
                                               onChange={this.showLeggingsFilter}
                                />
                                <Form.Checkbox label='перчатки'
                                               type="checkbox"
                                               name="перчатки"
                                               checked={this.state.isGloves}
                                               onChange={this.showGlovesFilter}
                                />
                                <Form.Checkbox label='щит'
                                               type="checkbox"
                                               name="щит"
                                               checked={this.state.isShield}
                                               onChange={this.showShieldFilter}
                                />
                                <Form.Checkbox label='пояс'
                                               type="checkbox"
                                               name="пояс"
                                               checked={this.state.isBelt}
                                               onChange={this.showBeltFilter}
                                />
                                <Form.Checkbox label='обувь'
                                               type="checkbox"
                                               name="обувь"
                                               checked={this.state.isFootwear}
                                               onChange={this.showFootwearFilter}
                                />
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="divMainCatalog">
                    {/* eslint-disable-next-line array-callback-return */}
                    {armorArr.map(obj => {
                        if (+obj.cost >= +this.state.minValueArmor && +obj.cost <= +this.state.maxValueArmor) {
                            if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isHelmet && !this.state.isTorso && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isLeggings && !this.state.isHelmet && !this.state.isTorso && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isGloves && !this.state.isHelmet && !this.state.isLeggings && !this.state.isTorso &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("перчатки", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isShield && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isTorso && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isBelt && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isTorso && !this.state.isFootwear) {
                                if (obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isFootwear && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isTorso) {
                                if (obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("порчатки", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 || obj.category.indexOf("пояс", 0) !== -1 ||
                                    obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && !this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 !== -1 || obj.category.indexOf("пояс", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && !this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("щит", 0) !== -1 !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                !this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("перчатки", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && this.state.isLeggings && !this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("поножи", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && this.state.isHelmet && !this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("шлем", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (this.state.isTorso && !this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("торс", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
                                    return (
                                        <Card key={obj.id} id={obj.id} name={obj.name} photo={obj.photo}
                                              promotion={obj.promotion} description={obj.description}
                                              typeArtifact={obj.typeArtifact} origin={obj.origin}
                                              formArtifact={obj.formArtifact} effect={obj.effect} oldCost={obj.oldCost}
                                              cost={obj.cost} rating={obj.rating}/>);
                                }
                            } else if (!this.state.isTorso && this.state.isHelmet && this.state.isLeggings && this.state.isGloves &&
                                this.state.isShield && this.state.isBelt && this.state.isFootwear) {
                                if (obj.category.indexOf("шлем", 0) !== -1 || obj.category.indexOf("поножи", 0) !== -1 ||
                                    obj.category.indexOf("перчатки", 0) !== -1 || obj.category.indexOf("щит", 0) !== -1 ||
                                    obj.category.indexOf("пояс", 0) !== -1 !== -1 || obj.category.indexOf("обувь", 0) !== -1) {
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
)(ArmorPage);