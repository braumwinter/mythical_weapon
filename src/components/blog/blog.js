import React from 'react';
import './blog.scss';
import blogList from '../../../src/script/blogList';

function Blog() {
    return (
        <div id="Blog">
            <ul className="BlogList">
                {blogList.map((link, index) => {
                    return (
                        <li className="blogReview" key={blogList[index].id + "blogList"}>
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
    )
}

export default Blog;