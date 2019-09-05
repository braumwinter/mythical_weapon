import React, {Component} from 'react';
import './authorizationPage.scss';
import {connect} from 'react-redux';
import {Form, Message} from 'semantic-ui-react';
import {acIsLogin} from "../../actions/actions";

import {Link} from "react-router-dom";

class AuthorizationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            warning: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.showHomeAuthorization = this.showHomeAuthorization.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    showHomeAuthorization() {

        if (!this.state.password.replace(/^\s+|\s+$/g, '') || !this.state.login.replace(/^\s+|\s+$/g, '')) {
            this.setState({
                warning: true
            });
            return false;
        } else {
            this.props.changeUserName(this.state.login);
            this.setState({
                warning: false
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div id="authorizationForm">
                <Form inverted size="big" warning={this.state.warning} onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Field required>
                        <label>логин</label>
                        <input
                            id='nameLogin'
                            type="text"
                            value={this.state.login}
                            name="login"
                            placeholder="логин"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field required>
                        <label>пароль</label>
                        <input
                            id='passwordLogin'
                            type="password"
                            value={this.state.password}
                            name="password"
                            placeholder="пароль"
                            onChange={this.handleChange}
                        />
                    </Form.Field>

                    <Message
                        warning
                        header='Не все поля заполнены'
                        list={[
                            'Пожалуйста, заполните все поля',
                        ]}
                    />
                    <Link to="/">
                        <button className="myButton" onClick={this.showHomeAuthorization}>
                            войти
                        </button>
                    </Link>
                    <Link to="/Registration">
                        <button className="myButton">
                            зарегистрироваться
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="myButton">
                            отмена
                        </button>
                    </Link>
                </Form>
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
        changeUserName: (userName) => dispatch(acIsLogin(userName))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorizationPage);