import React from 'react';
import './bottomPanel.scss';
import {Popup} from 'semantic-ui-react';
import {Link} from "react-router-dom";

const path = '../../src/img/';

const style = {
    borderRadius: 0,
    opacity: 0.8,
    padding: '1.5em',
    color: 'white'
};

const socialList = [
    {
        name: 'behance',
        link: 'https://www.behance.net/',
        img: path + 'behance.svg',
        tooltip: 'behance'
    },
    {
        name: 'facebook',
        link: 'https://www.facebook.com/',
        img: path + 'facebook.svg',
        tooltip: 'facebook'
    },
    {
        name: 'instagram',
        link: 'https://www.instagram.com/',
        img: path + 'instagram.svg',
        tooltip: 'instagram'
    },
    {
        name: 'skype',
        link: 'https://www.skype.com/',
        img: path + 'skype.svg',
        tooltip: 'skype'
    },
    {
        name: 'YouTube',
        link: 'https://www.youtube.com/',
        img: path + 'youtube.svg',
        tooltip: 'YouTube'
    },
    {
        name: 'telegram',
        link: 'https://telegram.org/',
        img: path + 'telegram.svg',
        tooltip: 'telegram'
    },
    {
        name: 'twitter',
        link: 'https://twitter.com/',
        img: path + 'twitter.svg',
        tooltip: 'twitter'
    },
    {
        name: 'viber',
        link: 'https://www.viber.com/',
        img: path + 'viber.svg',
        tooltip: 'viber'
    },
    {
        name: 'vkontakte',
        link: 'https://vk.com/',
        img: path + 'vk.svg',
        tooltip: 'vkontakte'
    },
    {
        name: 'whatsapp',
        link: 'https://www.whatsapp.com/',
        img: path + 'whatsapp.svg',
        tooltip: 'whatsapp'
    }
];

function BottomPanel() {
    return (
        <div id="bottomPanel">
            <div id="bottomMenu">
                <ul className="bottomList">
                    <Link to="/AboutCompany">
                        <li>
                            <p>О компании</p>
                        </li>
                    </Link>
                    <Link to="/FAQ">
                        <li>
                            <p>FAQ</p>
                        </li>
                    </Link>
                    <Link to="/CompanyBlog">
                        <li>
                            <p>блог</p>
                        </li>
                    </Link>
                </ul>
            </div>

            <div id="socialLink2">
                <ul className="bottomList">
                    {socialList.map((link, index, img) => {
                        return (
                            <li key={index}>
                                <Popup
                                    trigger={<a href={link.link}><img className="socialImg" src={link.img}
                                                                      alt={link.name}/></a>}
                                    content={link.tooltip}
                                    offset='0, 15px'
                                    position='top center'
                                    style={style}
                                    inverted
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div id="bottomLink">
                <div id="bottomPhone">
                    <div id="emailDivBot">
                        <span>examples@email.com</span>
                    </div>
                    <div id="phoneDivBot">
                        <span>8 (123) 4567890</span>
                    </div>
                </div>
                <div id="socialLink">
                    <ul className="bottomList">
                        {socialList.map((link, index, img) => {
                            return (
                                <li key={index}>
                                    <Popup
                                        trigger={<a href={link.link}><img className="socialImg" src={link.img}
                                                                          alt={link.name}/></a>}
                                        content={link.tooltip}
                                        offset='0, 15px'
                                        position='top center'
                                        style={style}
                                        inverted
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div id="developer">
                    developer
                </div>
            </div>
        </div>
    )
}

export default BottomPanel;