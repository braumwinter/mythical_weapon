import React from 'react';
import './promCard.scss';
import {Image, Modal} from 'semantic-ui-react';

function PromCard(props) {

    let spanProm;
    let spanText;
    let spanProd;
    let spanManuf;
    spanProm = "ribbon1";

    if (props.type === "promotion") {
        spanText = "СКИДКА!!!"
    } else {
        spanText = "рейтинг " + props.rating;
    }

    if (props.type === "promotion" || props.type === "rating") {
        spanProd = "showProdInfo";
        spanManuf = "noshowManufInfo";
    } else {
        spanProd = "noshowProdInfo";
        spanManuf = "showManufInfo";
    }

    return (
        <div className="card1">
            <span className={spanProm}>
                <span>{spanText}</span>
            </span>
            <h3>{props.name}</h3>
            <div className="flip1">
                <div className="cardFront1">
                    <img src={props.photo} alt={props.name}/>
                </div>
                <div className="cardBack1">
                    <span className={spanProd}>{props.origin}
                        <br/><br/> тип: {props.typeArtifact}<br/><br/> форма: {props.formArtifact}
                        <br/><br/> эффекты: {props.effect}</span>
                    <span className={spanManuf}> специализация: {props.specialization}</span>
                </div>
            </div>

            <Modal trigger={<button className="myButton">подробнее</button>} basic size='tiny' closeIcon>
                <Modal.Content>
                    <Image wrapped size='medium' src={props.photo}/>
                    <Modal.Description>
                        <p><strong>{props.name}</strong></p>
                        <br/><br/>
                        <p>{props.description}</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default PromCard;