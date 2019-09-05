import React from 'react';
import './registrationPage.scss';
import {connect} from 'react-redux';
import {acIsLogin} from "../../actions/actions";
import {Form, Message, Select, TextArea} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const genderOptions = [
    {key: 'm', text: 'мужчина', value: 'male'},
    {key: 'f', text: 'женщина', value: 'female'},
    {key: 'o', text: 'другое', value: 'other'},
];

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            login: "",
            password: "",
            passwordRepeat: "",
            gender: "",
            text: "",
            warning: false,
            warningHeader: "",
            warningText: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.showHomeRegistration = this.showHomeRegistration.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    showHomeRegistration() {
        if (!this.state.password.replace(/^\s+|\s+$/g, '') || !this.state.login.replace(/^\s+|\s+$/g, '') ||
            !this.state.passwordRepeat.replace(/^\s+|\s+$/g, '') || !this.state.firstName.replace(/^\s+|\s+$/g, '')) {
            this.setState({
                warning: true,
                warningHeader: "не все поля заполнены",
                warningText: "пожалуйста, заполните все обязательные поля!"
            });
            return false;
        } else if (this.state.password !== this.state.passwordRepeat) {
            this.setState({
                warning: true,
                warningHeader: "пароли не совпадают",
                warningText: "введённые пароли не совпадают!"
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
            <div id="registrationForm">
                <Form inverted size="big" warning={this.state.warning} onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Field required>
                        <label>имя</label>
                        <input
                            type="text"
                            value={this.state.firstName}
                            name="firstName"
                            placeholder="введите Ваше имя"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>фамилия</label>
                        <input
                            type="text"
                            value={this.state.lastName}
                            name="lastName"
                            placeholder="введите Вашу фамилию"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{children: 'пол', htmlFor: 'form-select-control-gender'}}
                        placeholder='Ваш пол'
                        search
                        searchInput={{id: 'form-select-control-gender'}}
                    />
                    <Form.Field required>
                        <label>логин</label>
                        <input
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
                            type="password"
                            value={this.state.password}
                            name="password"
                            placeholder="придумайте сложный пароль"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field required>
                        <label>повторите пароль</label>
                        <input
                            type="password"
                            value={this.state.passwordRepeat}
                            name="passwordRepeat"
                            placeholder="повторите пароль"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Дополнительные данные'
                        placeholder='Дополнительные данные'
                    />

                    <Message
                        warning
                        header={this.state.warningHeader}
                        list={[
                            this.state.warningText,
                        ]}
                    />
                    <Link to="/Authorization">
                        <button className="myButton">
                            я зарегистрирован!
                        </button>
                    </Link>
                    <Link to="/">
                        <button className="myButton" onClick={this.showHomeRegistration}>
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
)(RegistrationPage);