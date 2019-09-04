import {
    SET_PERSON_INFO,
    IS_LOGIN_FALSE,
    IS_LOGIN_TRUE
} from "../consts/constants";

import {
    HOME_PAGE,
    AUTHORIZATION_PAGE,
    REGISTRATION_PAGE,
    USER_ACCOUNT_PAGE,
    PRODUCT_PAGE,
    ABOUT_COMPANY_PAGE,
    FAQ_PAGE,
    COMPANY_BLOG_PAGE,
    ALL_CATEGORY_PAGE,
    WEAPON_PAGE,
    ARMOR_PAGE,
    SPELL_PAGE,
    BASKET_PAGE
} from "../consts/constants";

import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET
} from "../consts/constants";

import {
    PRODUCT_ID
} from "../consts/constants"

import {
    ADD_MESSAGE
} from "../consts/constants"

import {
    COLOR
} from "../consts/constants"


/*******************************СТРАНИЦЫ*****************************/
export const acShowHomePage = () => {
    return {
        type: HOME_PAGE
    }
};

export const acShowAuthorizationPage = () => {
    return {
        type: AUTHORIZATION_PAGE
    }
};

export const acShowRegistrationPage = () => {
    return {
        type: REGISTRATION_PAGE
    }
};

export const acShowUserAccountPage = () => {
    return {
        type: USER_ACCOUNT_PAGE
    }
};

export const acShowProductPage = (idProduct) => {
    return {
        type: PRODUCT_PAGE,
        idProduct
    }
};

export const acShowAboutCompanyPage = () => {
    return {
        type: ABOUT_COMPANY_PAGE
    }
};

export const acShowFAQPage = () => {
    return {
        type: FAQ_PAGE
    }
};

export const acShowCompanyBlogPage = () => {
    return {
        type: COMPANY_BLOG_PAGE
    }
};

export const acShowAllCategoryPage = () => {
    return {
        type: ALL_CATEGORY_PAGE
    }
};

export const acShowWeaponPage = () => {
    return {
        type: WEAPON_PAGE
    }
};

export const acShowArmorPage = () => {
    return {
        type: ARMOR_PAGE
    }
};

export const acShowSpellPage = () => {
    return {
        type: SPELL_PAGE
    }
};

export const acShowBasketPage = () => {
    return {
        type: BASKET_PAGE
    }
};


/*******************************ЛОГИН*****************************/
export const acIsLogin = (userName) => {
    return {
        type: IS_LOGIN_TRUE,
        userName
    }
};


/*******************************КОРЗИНА*****************************/
export const acAddToBasket = (cost) => {

    return {
        type: ADD_TO_BASKET,
        cost
    }
};


export const acRemoveFromBasket = (id, cost, quantity) => {
    return {
        type: REMOVE_FROM_BASKET,
        id,
        cost,
        quantity
    }
};


/*******************************ID ПРОДУКТА*****************************/

export const acGetProductId = (id) => {
    return {
        type: PRODUCT_ID,
        id
    }
};

/*******************************ЦВЕТА*****************************/

export const acBlackColor = (color) => {
    return {
        type: COLOR,
        color
    }
};


/*******************************ДОБАВИТЬ СООБЩЕНИЕ*****************************/

export const acAddMessage = (textMessage) => {
    return {
        type: ADD_MESSAGE,
        textMessage
    }
};