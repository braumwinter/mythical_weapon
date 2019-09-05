import React from 'react';
import './topPanel.scss';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {ENTRANCE} from "../../consts/constants";

class TopPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ENTRANCE,
            link: "/Authorization"
        };
    }

    componentDidUpdate() {
        if (this.props.data.rdIsLogin.userName !== this.state.text) {
            console.log("this.setState", this.props.data.rdIsLogin.userName, this.state.text);
            if (this.props.data.rdIsLogin.userName === ENTRANCE) {
                this.setState({
                    text: ENTRANCE,
                    link: "/Authorization"
                })
            } else {
                this.setState({
                    text: this.props.data.rdIsLogin.userName,
                    link: "/UserAccount"
                })
            }
        }
    }

    render() {
        return (
            <div id="topPanel">
                <div id="timeWork">
                    Часы работы: с 00:00 до 24:00 пн-вс
                </div>
                <div id="timeWork2">
                    Часы работы:
                    <br/>
                    с 00:00 до 24:00 пн-вс
                </div>
                <div id="loginDiv">
                    <Link to={this.state.link}>
                        <button id="loginButton">
                            {this.state.text}
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
)(TopPanel);