import React, {Component} from 'react';
import './basketPage.scss';
import {connect} from 'react-redux';
import productList from "../../../src/script/product";
import {Table} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import basketList from "../../script/basketList";

let summ = 0;

function Size(obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}

class BasketPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let size = Size(basketList);

        return (
            <div id="basketDiv">
                <div id="basketTableDiv">
                    <Table unstackable color='black' inverted>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell className="tert">фото</Table.HeaderCell>
                                <Table.HeaderCell>название</Table.HeaderCell>
                                <Table.HeaderCell>поставщик</Table.HeaderCell>
                                <Table.HeaderCell>цена за шуку</Table.HeaderCell>
                                <Table.HeaderCell className="tert2">количество</Table.HeaderCell>
                                <Table.HeaderCell>итоговая цена</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {/* eslint-disable-next-line array-callback-return */}
                            {productList.map((link, index) => {
                                for(let i = 0; i < size; i++){
                                    if (basketList[i].id === productList[index].id){
                                        summ += +productList[index].cost * +basketList[i].quantity;
                                        return (
                                            <Table.Row key={productList[index].id}>
                                                <Table.Cell className="tert">
                                                    <div className="basketPhotoDiv">
                                                        <img src={productList[index].photo} alt={productList[index].name}/>
                                                    </div>
                                                </Table.Cell>
                                                <Table.Cell>{productList[index].name}</Table.Cell>
                                                <Table.Cell>{basketList[i].manufacter}</Table.Cell>
                                                <Table.Cell>{productList[index].cost}</Table.Cell>
                                                <Table.Cell>{basketList[i].quantity}</Table.Cell>
                                                <Table.Cell>{productList[index].cost * basketList[i].quantity}</Table.Cell>
                                            </Table.Row>
                                        )
                                    }
                                }
                            })}
                        </Table.Body>
                    </Table>
                </div>
                <div id="totalBasket">
                    <p id="totalCostBasket"><strong>ИТОГО: {summ}</strong></p>
                </div>
                <div id="totalBasket2">
                    <Link to="/">
                        <button id="nummr" className="myButton">
                            Заказать
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
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketPage);