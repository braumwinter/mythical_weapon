import React, {Component} from "react";
import {connect} from 'react-redux';
import './companyBlogPage.scss';
import Catalog from "../catalog/catalog";
import blogList from "../../../src/script/blogList"

class CompanyBlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="mainRem3">
                <div id="rem3">
                    <Catalog/>
                </div>
                <div id="eee3">
                    <ul id="ulBlogList">
                        {blogList.map((link, index, img) => {
                            return (
                                <li className="blogReview" key={index}>
                                    <div className="blogImgDiv">
                                        <div className="imgRi">
                                            <img src={blogList[index].avatar} alt={blogList[index].name}/>
                                        </div>
                                        <div className="nameRi">
                                            <p>{blogList[index].name}</p>
                                        </div>
                                    </div>
                                    <h3><u><strong>{blogList[index].header}</strong></u></h3>
                                    <p>{blogList[index].text}</p>
                                </li>
                            )
                        })}
                    </ul>
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
)(CompanyBlogPage);