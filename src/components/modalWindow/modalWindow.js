import React, {Component} from 'react';
import {Button, Header, Modal, Icon} from 'semantic-ui-react';
import productList from '../../script/product';

let obj;

class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {modalOpen: false};
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen() {
        this.setState({
            modalOpen: true
        });
    }

    handleClose() {
        this.setState({
            modalOpen: false
        });
    }

    render() {
        productList.map(() => {
            if (productList.name === this.props.name) {
                obj = productList.name
            }
        });

        let obj2 = productList.filter(productList => productList.name === this.props.name);

        return (
            <Modal>
                <Header content='Archive Old Messages'/>
                <Modal.Content>
                    <p>
                        {obj2[0].name}
                        {obj2[0].description}
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted>
                        <Icon name='remove'/> No
                    </Button>
                    <Button color='green' inverted>
                        <Icon name='checkmark'/> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ModalWindow